import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
export default function ToggleTheme() {
  const [theme, setTheme] = useState(() => {
    // Check user's previously saved theme preference
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme;

      // check the computer settings
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    //set the them to localStorage
    localStorage.setItem("theme", theme);
  });

  const toggleThemeMode = () => {
    console.log("toggleThemeMode", theme);
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Box display="flex" alignItems="center">
      {/* <Switch  onChange={toggleThemeMode} />
  {theme ==="dark" ? <DarkModeIcon /> : <WbSunnyIcon />} */}
      <Button
        onClick={toggleThemeMode}
        sx={{
          color: theme === "light"?"#003e8f":"#f9ef9d",
        }}
      >
        {theme === "light" ? <DarkModeIcon /> : <WbSunnyIcon />}
      </Button>
    </Box>
  );
}
