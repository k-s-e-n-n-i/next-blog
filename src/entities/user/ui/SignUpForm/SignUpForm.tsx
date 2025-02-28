"use client";

import { useForm } from "react-hook-form";

import { Button } from "@radix-ui/themes";
import { InputField } from "@/shared/ui/InputField";
import { zodResolver } from "@hookform/resolvers/zod";

import { signUpFormSchema, SignUpFormValues } from "../../model/types";
import { createUserDB } from "../../api/createUser";
import s from "./SignUpForm.module.scss";
import { signIn } from "next-auth/react";

export const SignUpForm = () => {
  const { control, handleSubmit } = useForm<SignUpFormValues>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(signUpFormSchema),
  });

  const register = async (data: SignUpFormValues) => {
    await createUserDB(data);

    await signIn("login", {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: "/admin",
    });
  };

  return (
    <form onSubmit={handleSubmit(register)} className={s.form}>
      <InputField label="Имя" name="name" control={control} />
      <InputField label="Логин" name="email" control={control} />
      <InputField label="Пароль" name="password" control={control} type="password" />

      <Button type="submit" mt="20px" style={{ width: "100%" }}>
        ok
      </Button>
    </form>
  );
};
