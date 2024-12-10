import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
type Props = {
  children: React.ReactNode;
  title?: string | null;
};
//每一横向级所用的组件
const LevelList: React.FC<Props> = (props: Props) => {
  return (
    <div>
      {props.title && <Typography variant="h5">{props.title}</Typography>}
      
      <Grid
        container
        spacing={2}
        sx={{
          maxWidth: "760px",
          alignItems: "center",
          margin: 2,
          backgroundColor: "var(--background)",
          padding: 3,
        }}
      >
        {props.children}
      </Grid>
    </div>
  );
};

export default LevelList;
