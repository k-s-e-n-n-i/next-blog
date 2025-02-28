// import Image from "next/image";
import { AspectRatio, Heading, Text } from "@radix-ui/themes";

import { Article } from "@/shared/types/Article";

import s from "./ArticleView.module.scss";

export const ArticleView = (article: Article) => {
  const { title, description, image } = article;

  return (
    <div>
      <Heading as="h1" mt="3" mb="3" size="8">
        {title}
      </Heading>

      <Text size="3">{description}</Text>
      <AspectRatio ratio={16 / 9}>
        {/* <Image src={image} alt={title} width={100} height={100} /> */}
        {image && <img src={image} className={s.image} alt={title} />}
      </AspectRatio>
    </div>
  );
};
