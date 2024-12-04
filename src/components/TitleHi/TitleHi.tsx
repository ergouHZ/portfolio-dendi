import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Drawer, Typography } from "@mui/material";
import { useState } from "react";
export default function TitleHi() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Box
      sx={{
        paddingLeft: 8,
        display: "flex",
        flex: 1,
        justifyContent: "space-between", //
        alignItems: "center", //
      }}
    >
      <Typography variant="h4" component="h3">
        Hey, My name is Dendi
      </Typography>
      <Box sx={{ display: "flex", flex: 0.2 }}>
        <a
          href="https://www.linkedin.com/in/dendi-zhan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon fontSize="large" />
        </a>
        <a
          href="https://www.instagram.com/dendi.hz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon fontSize="large" />
        </a>
        <a
          href="https://github.com/ergouHZ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize="large" />
        </a>
        <EmailIcon onClick={toggleDrawer(true)} fontSize="large" />
        <CallIcon fontSize="large" />
      </Box>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            
            direction: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 8,
          }}
        >
          <Typography variant="h4">Contact Information</Typography>
          <br></br>
          <Typography variant="h5">
            Email:zhandendi@gmail.com
            <br></br>
            Phone : +353 874878051
          </Typography>
        </Box>
      </Drawer>
    </Box>
  );
}
