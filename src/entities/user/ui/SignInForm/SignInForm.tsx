"use client";

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@radix-ui/themes";

import { InputField } from "@/shared/ui/InputField";
import { signInFormSchema, SignInFormValues } from "@/entities/user";

import s from "./SignInForm.module.scss";

export const SignInForm = () => {
  const { control, getValues } = useForm<SignInFormValues>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(signInFormSchema),
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await signIn("login", {
      email: getValues("email"),
      password: getValues("password"),
      redirect: true,
      callbackUrl: "/admin",
    });
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <InputField label="Логин" name="email" control={control} />
      <InputField label="Пароль" name="password" control={control} type="password" />

      <Button type="submit" mt="20px" style={{ width: "100%" }}>
        ok
      </Button>
    </form>
  );
};
