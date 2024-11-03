import React, { useState } from "react";
import {
  HomeContainer,
  HomeContent,
  HomeH1,
  HomeImg,
  HomeP,
} from "./HomeSection";
import Video from "../../resources/video.mp4";
import Image from "../../resources/images/profilePicture.png";
import { Stack, styled } from "@mui/material";
import { isMobile } from "react-device-detect";
import { PALETTE } from "../../assets/variables";
import Footer from "../footer";
import './HomeSection.css'

const StyledImage = styled('img')({
  width: '70%',
  float: 'left',
  marginRight: '10px',
  borderRadius: '100%',
  transition: '1s ease',
  backfaceVisibility: 'hidden',
})

const HomeSection = () => {

  return (
      <Stack id="/" width="100%" height="100%" direction="column" alignItems="center" justifyContent="center" /*sx={{ backgroundColor: PALETTE.BLACK_GREEN }}*/>
          <Stack
            component="div"
            direction={isMobile ? "column" : "row"}
            justifyContent="space-between"
            alignItems="center"
            className="card glow"
            sx={{ backgroundColor: PALETTE.GREEN, maxWidth: '70vw' }}
          >
            <Stack width="40%" alignItems="center" justifyContent="center">
              <StyledImage src={Image} alt="Profile Picture" />
            </Stack>
            <Stack direction="column">
              <Stack ml="10px" >
                <HomeP>My name is...</HomeP>
                <HomeH1>Florian AINADOU</HomeH1>
                <HomeP>
                Having graduated in Computer Science Engineering in 2021, I am currently a fullstack Java React developer.
                </HomeP>
              </Stack>
              <Footer />
            </Stack>
          </Stack>
      </Stack>
  );
};

export default HomeSection;
