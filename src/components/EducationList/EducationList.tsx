import { CardPlayList } from "@/entity/playList";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";
import { useTheme } from "@mui/material/styles";
import LevelList from "../LevelList/LevelList";
import EducationCard from "./Card/EducationCard";

export default function EducationList() {
  const theme = useTheme();

  const educationList: CardPlayList[] = [
    {
      title: "UCC",
      subtitle: "Digital Business",
      image: "/images/education/ucc.png",
      color: "#a0df82",
      drawerTitle: "University College Cork",
      drawerImage: "/images/education/ucc_detail.png",
      drawerDescription: "testtest",
      drawerSubtitle: "Master Degree",
      drawerSubtitle2: "Development & Design of Digital Business",
    },
    {
      title: "Wuhan University",
      subtitle: "Hydropower Engineering",
      image: "/images/education/whu.jpg",
      color: "#6effe2",
      drawerTitle: "Wuhan University",
      drawerImage: "/images/education/ucc_detail.png",
      drawerDescription: "testtest whu",
      drawerSubtitle: "Bachelor Degree",
      drawerSubtitle2: "QS195 WHU TEST",
    },
  ];

  return (
    <LevelList>
      <Grid size={6}>
        <Typography component="div" variant="h6" sx={{ justifySelf: "center" }}>
          EDUCATION
        </Typography>
        <EducationCard cardList={educationList} />
      </Grid>

      <Grid size={6}>
        <Typography component="div" variant="h6" sx={{ justifySelf: "center" }}>
          WORK EXPERIENCE
        </Typography>
        <Card
          sx={{
            display: "flex",
            backgroundColor: "#ff3b76",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h6">
                Sound Designer
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ color: "text.secondary" }}
              >
                Kaleidoscope 
              </Typography>
            </CardContent>

            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <IconButton aria-label="previous">
                {theme.direction === "rtl" ? (
                  <SkipNextIcon />
                ) : (
                  <SkipPreviousIcon />
                )}
              </IconButton>
              <IconButton aria-label="play/pause">
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              </IconButton>
              <IconButton aria-label="next">
                {theme.direction === "rtl" ? (
                  <SkipPreviousIcon />
                ) : (
                  <SkipNextIcon />
                )}
              </IconButton>
            </Box>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 162, height: 160 }}
            image="/images/work/mix.jpeg"
            alt="Live from space album cover"
          />
        </Card>
      </Grid>
    </LevelList>
  );
}
