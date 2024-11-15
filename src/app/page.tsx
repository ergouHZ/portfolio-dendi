import { Typography } from "@mui/material";
import Link from "next/link";
import { ThemeProviderWrapper } from "../utils/DardThemeContext";
export default function Home() {
  return (
    <div>
      <ThemeProviderWrapper>
        <Typography variant="h1" component="h2">
          Hi, My name is Dendi
        </Typography>
        <Link key={"chatExample"} href={"/projects/chat-search"}>
          test
        </Link>
      </ThemeProviderWrapper>
    </div>
  );
}
