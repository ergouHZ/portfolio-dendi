import { Avatar, Box, LinearProgress, Typography } from "@mui/material";
import { Article } from "../../utils/entity/Ariticles";
import TextRender from "../../utils/TextRender";
import ArticleCardList from "./ArticleList/ArticleCardList";
type Props = {
  summary: string | null;
  articles: Article[] | null | undefined;
};

export default function AiMessage({ summary, articles }: Props) {
  const srcAI =
    "data:image/webp;base64,UklGRtIFAABXRUJQVlA4WAoAAAAQAAAANwAANwAAQUxQSPIBAAARkCvbtmlb89q2bTu80YvMyPoB27Zt236RbevaNrfmfNr7rL3WD0TEBABDO+eIgYvPv65SNVWpf3Vq0bBIZyvg0Dps5OEP9b0S6UrdTc93D/GxNcs5f2uJShaj2vd9U6aDKXFrioj5r+XhzKwcphRpZKL6c7Ijo8DdnUjmdm1yZmGb/FAm0/FBnI1lhc+ROMRXaZY4Fv4gTt+kWJD0hLh9nWDE2vOexg89dTHgukMhnnc76E3tIK6ViTpR34nz4oD/2C5B3nCN/T+pxcR9ce4/a0nAHTYAAUUifHKygjEkYvdggLNCSAfAs1gIep2S1y5G9bAZJCbOviIG0ulXYhC9qhClUuIF/0EjEonaL4wqCVMlSvUzUZ6cFuXYNDGQ5maKodUO8q4QAt9lwgkh+ncAjEYR2kYC+NYJgEVRALCRP422AgCEd3CnvM/9BxZy17HU9T/e5ZzJHxPg/0OQK7lzEuhaHeKqd4erHji/5kejm0G2BiCpiA8kkp4mgPHUEuSBNO1Vgb0FkPORB1QfZ4Pl8ffRBEQiQpTupdkzAJ/t/SZRx3ZfYGs3qogZEaH0c4yzDSOAgHWl7H4tCwUz7RLWlmnGUCMita98Q4oLmB048nhZG+qR0lv+8sDwYFvgMn7AvLMfarp7epWWtycXDEl1A5ZWUDggugMAALATAJ0BKjgAOAA+MQyMRiIREQsAIAMEsgBWHOBr3y6+ucnr0dIJfUczc87tVe2J5jP1m9ZbnVetJ9AD9K/S99lL/G/6P0cP//di67n/APyPp9Odt/1fJl+R/3T2BP45/TP9r9vXIOfqkK7zWmbMY/9/AuX3CPvJvE0weS7y1LptC7eKoHQxR+0npirvFRcvjcz4PdEbtV73/uB/i3sNVJD/nNi7J0AA/vQlP/4YHWCK1vTlPzDNkfpBV3XnPcd//SWL4gh0/gwRqMt9YK6/B6lZIad2POmJv3gf7z5rJ1nXP8LMV8i+bNfeIrfZdQOi6Pcnd0BXhzKXQf11n9oC/4b+O2pHI29H+30LFD6j+Q1QITAGSYI+fCgAPCtcEqLnzZmocbv85ieiiGqM9P1Wr13SZTkf/J+fiqP/5Gn+XzGiYj8D7Ff/pYxh1noH2mL2RFUjV98j4F2MYOOKbFZsdB/juNc+rB0WWZqlH1JvpW9DY+gbu37p22VNnaVjLiBzmj7sc0ACipVYEARJZ0mgFwVEKiuoZsYfvo02AkuIAMNiz4sa8voqEQG/EFSTXjiFH3BtOAHrIhr449CvnkxDTXg/6G3ll/ndY6RWLbPPIL2Wm3RMYZyiDCR/1QzW44ktJyCj+dsHKqT0HhcGVQ5+iOdXuyZQXfIfMMfLQHxEkLV8Mvix4LkPWzh23Tw1jv7tlmbdA3HCbLzyb1/OasFflv+aC/r3HU9VgghOS1OEi6KG+iYWV9PdN/3X/nwrzN4a4lfaZwAy7gTaE4NmQsDBnrhWmHru8UEWvtqN7tMo7VvFb2JSQVm/U3GlZ5QFuB2R3D78iCo3sGybh2/f6J4McZfOG7s6sUCANmYvpDH1CvtNnFUWkIe/p/r7u3nTR3r2XFIwRAQcpsgW1dA/3r+fBKpWp/HXuizw+v6LU4/5GJE4KiaY42Tr2a7y5a0O+07NOfg8QxNVDs6BszVweb5uWzMJ0F85EdfwLUC3xOATjf+N16ktDRYBY0A2oV+TtAVLnXhyftMJagFtCTuv6plXvn0/qFIRZDF3qwfM8rn0F6tFIv2R0EloUIccKxAWfd1d/80bo1VwMD0Y7G03R3Hi0liG+mzeNRj8HDwfbvliQAMeSYqrz0ZXwRZ6fS0roQhSHk7i7KbhZy4Q5TzIwMrFaUCX6UTFLbqpMBukMOyJNjeuIYaG16V+4V/V1YGjLOr7wkrjnxPRiCo4sssNg3tFaaMxvhpcvjwTtzEsmzwKAjbArI02f+WBAAAAAA==";

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
            <Typography variant="body1" sx={{ textAlign: "left" }}>
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
