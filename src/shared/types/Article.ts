import * as z from "zod";

export type Article = {
  id?: number;
  title: string;
  description?: string | null;
  image?: string | null;
  authorId?: string;
};

export const articleSchema = z.object({
  id: z.number().optional(),
  title: z
    .string({ message: "Поле обязательно для заполнения" })
    .min(1, { message: "Поле обязательно для заполнения" }),
  description: z.string().nullable().optional(),
  image: z.string().nullable().optional(),
  authorId: z.string(),
});

export type ArticleValues = z.infer<typeof articleSchema>;
