import { Role } from "@/shared/types/global";
import { z } from "zod";

export type User = {
  id: number;
  name?: string;
  email: string;
  password: string;
  role: Role;
};

export const signInFormSchema = z.object({
  email: z
    .string({ message: "Поле обязательно для заполнения" })
    .min(1, { message: "Поле обязательно для заполнения" }),
  password: z
    .string({ message: "Поле обязательно для заполнения" })
    .min(1, { message: "Поле обязательно для заполнения" }),
});

export type SignInFormValues = z.infer<typeof signInFormSchema>;

export const signUpFormSchema = z.object({
  name: z.string().optional(),
  email: z
    .string({ message: "Поле обязательно для заполнения" })
    .min(1, { message: "Поле обязательно для заполнения" }),
  password: z
    .string({ message: "Поле обязательно для заполнения" })
    .min(1, { message: "Поле обязательно для заполнения" }),
});

export type SignUpFormValues = z.infer<typeof signUpFormSchema>;

export const userSchema = z.object({
  id: z.number(),
  name: z.string().optional(),
  email: z.string(),
  role: z.enum(["moderator", "admin"]),
});

export type UserValues = z.infer<typeof userSchema>;
