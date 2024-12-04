"use client";
import EducationList from "@/components/EducationList/EducationList";
import ProjectList from "@/components/projects/ProjectList";
import SelfStatement from "@/components/selfStatement/SelfStatement";
import TitleHi from "@/components/TitleHi/TitleHi";
import { Box, Button } from "@mui/material";
import { ThemeProviderWrapper } from "../utils/DardThemeContext";
export default function Home() {
  async function fetchHello() {
    try {
      const response = await fetch('/api/hello');
      const data = await response.json();
      console.log(data.message); // 输出 "Hello, World!"
    } catch (error) {
      console.error('Error fetching hello:', error);
    }
  }
  
  
  return (
    <ThemeProviderWrapper>
      <Box
        className="main-container"
        sx={{
          padding: 4,
          justifySelf: "center",
        }}
      >
        <TitleHi />
        <SelfStatement />
        <EducationList />
        <ProjectList />
        <Button
  onClick={() => {
    fetchHello();
  }}
>
  Click me
</Button>
      </Box>
    </ThemeProviderWrapper>
  );
}
