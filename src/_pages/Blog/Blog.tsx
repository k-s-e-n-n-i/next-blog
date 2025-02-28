import { Grid, Heading } from "@radix-ui/themes";

import { Article } from "@/shared/types/Article";
import { ArticleCard } from "@/entities/blog/ui/ArticleCard/ArticleCard";

type Props = {
  articles: Article[];
};

export const Blog = ({ articles }: Props) => {
  return (
    <div>
      <Heading as="h1" mt="3" mb="3" size="8">
        Блог
      </Heading>

      <Grid columns="3" gap="5" align="stretch">
        {articles.map((info, i) => (
          <ArticleCard {...info} key={i} />
        ))}
      </Grid>
    </div>
  );
};
