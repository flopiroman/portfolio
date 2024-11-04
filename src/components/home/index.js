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
import MyTechnicalStacks from "../MyTechnicalStacks";
import SomeThrees from "../SomeThrees";
import MyExperiences from "../MyExperiences";

const Home = () => {
  return (
    <Stack style={{ maxWidth: "100%" }}>
      <Stack height="100vh">
        <NavBar />
        <HomeSection />
      </Stack>
      {/* <SomeThrees /> */}
      <MyTechnicalStacks />
      <MyExperiences />
      {/* <Section {...ActualWork} /> */}
      {/* <Stack>
        <Section {...PolytechStage} />
        <Projects />
        <Technos />
      </Stack> */}
    </Stack>
  );
};

export default Home;
