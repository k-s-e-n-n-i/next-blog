import * as z from "zod";

export type Article = {
  id?: number;
  title: string;
  description?: string | null;
  image?: string | null;
};

export const articleSchema = z.object({
  id: z.number().optional(),
  title: z
    .string({ message: "Поле обязательно для заполнения" })
    .min(1, { message: "Поле обязательно для заполнения" }),
  description: z.string().nullable().optional(),
  image: z.string().nullable().optional(),
});

export type ArticleValues = z.infer<typeof articleSchema>;
