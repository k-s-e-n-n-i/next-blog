// import Image from "next/image";
import { AspectRatio, Card, Flex, Text } from "@radix-ui/themes";

import s from "./ArticleCard.module.scss";
import { Article } from "@/shared/types/Article";
import Link from "next/link";

export const ArticleCard = ({ title, description, image, id }: Article) => {
  return (
    <Link href={`/blog/${id}`}>
      <Card className={s.card}>
        <Flex direction="column" gap="2">
          <AspectRatio ratio={16 / 9} className={s.image}>
            {/* <Image src={image} className={s.image} alt={title} width={100} height={100} /> */}
            {image && <img src={image} alt={title} />}
          </AspectRatio>

          <Text size="7">{title}</Text>
          <Text size="3">{description}</Text>
        </Flex>
      </Card>
    </Link>
  );
};
