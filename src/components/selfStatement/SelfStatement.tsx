"use client";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import LevelList from "../LevelList/LevelList";
import "./SelfStatement.css";
export default function SelfStatement() {
  return (
    <LevelList >
      <Grid size={{xs:5,md:2.5,sm:3}} >
        <Image
          src="/images/profile.jpeg"
          alt="MYSELF"
          width={120}
          height={120}
          className="profile-image"
        />
      </Grid>
      <Grid
        size={{xs:5,md:9.5,sm:7}}
        sx={{
          boxSizing: "border-box",
          fontSize: 16,
        }}
      >
        <p className="first-line">
          <b>Java Backend Developer</b> | <b>React</b> frontend Developer
        </p>
        <br />
        Currently focusing on backend Algorithms | Restful API and artificial
        intelligence applications
        <br />
        <br />
        Former Sound Engineer & Designer
        <br /> Lead guitarist in a band (favorite guitar brand is Fender; <br />
        Also do composition and mixing as a hobby)
        <br />
      </Grid>
    </LevelList>
  );
}
