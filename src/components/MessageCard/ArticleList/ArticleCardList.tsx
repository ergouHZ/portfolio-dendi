import { Box, Grow } from "@mui/material";
import { Article } from "../../../utils/entity/Ariticles";
import ArticleCard from "./ArticleCard";

type Props = {
  articlesList: Article[] | null|undefined;
};

export default function ArticleCardList({ articlesList }: Props) {
  return (
    <div>
      <Grow in={true}>
      <Box>
        {articlesList?.map((article, index: number) => {
          return (
            
            <ArticleCard key={index} article={article} index={index} />
            /* map the Aricle in the list */
        
          );
        })}
      </Box>
      </Grow>
    </div>
  );
}
