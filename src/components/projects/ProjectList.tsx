"use client";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ProjectCard from "./ProjectCard/ProjectCard";
export default function ProjectList() {
  return (
    <Box
      sx={{
        maxWidth: "820px",
        alignItems: "center",
        margin: 2,
        padding: 3,
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          maxWidth: "800px",
          alignItems: "center",
          padding: 1,
        }}
      >
        <Grid size={6}>
          <ProjectCard
            title="Chat-Search"
            link="/projects/chat-search"
            image="/images/project/chat-search.png"
            github="https://github.com/ergouHZ/chat_search_front"
          />
        </Grid>
        <Grid size={6}>
          <ProjectCard
            title="Aura"
            image="/images/project/aura.png"
            link="https://www.auraxplorers.com/"
            github="https://github.com/ergouHZ/chatE"
          />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        sx={{
          maxWidth: "800px",
          alignItems: "center",
          padding: 1.5,
        }}
      >
        <Grid size={6}>
          <ProjectCard
            title="WDC"
            image="/images/project/wdc.png"
            link="https://wdc.dendi.top/"
            github="https://github.com/ergouHZ/Web_H5_Project"
          />
        </Grid>
        <Grid size={6}>
          <ProjectCard
            title="WattUp"
            image="/images/project/wattup.png"
            link="https://github.com/ergouHZ/WattUp_Electric_Calculator"
            github="https://github.com/ergouHZ/WattUp_Electric_Calculator"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
