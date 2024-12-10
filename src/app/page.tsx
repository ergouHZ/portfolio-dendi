"use client";
import ResponsiveAppBar from "@/components/AppBar";
import EducationList from "@/components/EducationList/EducationList";
import ProjectList from "@/components/projects/ProjectList";
import TitleHi from "@/components/TitleHi/TitleHi";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <ResponsiveAppBar />
      <Box
        className="main-container"
        sx={{
          paddingLeft: 4,
          paddingRight: 4,
          paddingTop: 10,

          justifySelf: "center",
          maxWidth: "760px",
        }}
      >

        <TitleHi />
        <EducationList />
        <ProjectList />
      </Box>
      <footer className="footer">
        <p>@  2024 Dendi.z eeeegou.</p>
      </footer>
    </Box>
  );
}
