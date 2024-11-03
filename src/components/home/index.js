import SideBar from "../sideBar";
import React, { useState } from "react";
import HomeSection from "../sectionHome";
import Section from "../section";
import { ActualWork, PolytechStage } from "../../Data";
import Projects from "../projects";
import Technos from "../technos";
import Footer from "../footer";
import { Stack } from "@mui/material";
import NavBar from "../NavigationBar/NavBar";
import LandfilesSection from "../LandfilesSection";

const Home = () => {
  return (
    <Stack style={{ maxWidth: "100%" }}>
      <Stack height="100vh">
        <NavBar />
        <HomeSection />
      </Stack>
      <LandfilesSection />
      <Section {...ActualWork} />
      {/* <Stack>
        <Section {...PolytechStage} />
        <Projects />
        <Technos />
      </Stack> */}
    </Stack>
  );
};

export default Home;
