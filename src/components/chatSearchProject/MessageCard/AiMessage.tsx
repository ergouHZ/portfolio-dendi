import { Avatar, Box, LinearProgress, Typography } from "@mui/material";
import { Article } from "../../../utils/entity/Ariticles";
import TextRender from "../../../utils/TextRender";
import ArticleCardList from "./ArticleList/ArticleCardList";
type Props = {
  summary: string | null;
  articles: Article[] | null | undefined;
};

export default function AiMessage({ summary, articles }: Props) {
  const srcAI =
    "https://avatars.githubusercontent.com/u/140789367?v=4";

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyItems: "start",
        padding: 2,
        paddingTop: 0,
        paddingBottom: 0,
        borderRadius: 2,
        width: "100%",
        maxWidth: 880,
        marginRight: 4,
        marginBottom: 4,
      }}
    >
      <Avatar
        className="avatar"
        alt="User Avatar"
        src={srcAI}
        sx={{ width: 50, height: 50, marginRight: 2 }}
      />
      <Box
        sx={{
          flex: 1,
          width: "100%",
          padding: 2,
          boxSizing: "border-box",
          fontSize: 16,
          border: "1px solid #ddd",
          borderRadius: 4,
          boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
        }}
      >
        <div>
          {summary ? (
            <Typography variant="body1" sx={{ 
              textAlign: "left",
              padding: "10px"
              }}>
              <TextRender text={summary} />
            </Typography>
          ) : (
            <Box>
              <LinearProgress />
              <br></br>
            </Box>
          )}
          {articles ? <ArticleCardList articlesList={articles} /> : <></>}
        </div>
      </Box>
    </Box>
  );
}
