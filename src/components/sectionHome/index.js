import React, { useState } from "react";
import {
  HomeContainer,
  HomeContent,
  HomeHeader,
  HomeImg,
  HomeBodyText,
} from "./HomeSection";
import Image from "../../resources/images/profilePicture.png";
import { IconButton, Stack, styled, Typography } from "@mui/material";
import { minWidth, PALETTE } from "../../assets/variables";
import Footer from "../footer";
import './HomeSection.css'
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";import CV from "../../assets/CV.pdf";
import { useWindowSize } from 'usehooks-ts'

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = CV;
  link.download = "CV-Florian-AINADOU.pdf";
  link.click();
};


const StyledImage = styled('img')({
  width: '70%',
  float: 'left',
  marginRight: '10px',
  borderRadius: '100%',
  transition: '1s ease',
  backfaceVisibility: 'hidden',
})

const HomeSection = () => {
  const { width = 0, height = 0 } = useWindowSize()

  return (
      <Stack id="/" width="100%" height="100%" direction="column" alignItems="center" justifyContent="center">
          <Stack
            component="div"
            direction={width < minWidth ? "column" : "row"}
            justifyContent="space-between"
            alignItems="center"
            className="card glow"
            sx={{ backgroundColor: PALETTE.GREEN, minWidth: '350px', maxWidth: '70vw', minHeight: "50vh", boxShadow: "20px 10px 10px grey", borderRadius: '30px' }}
          >
            <Stack width="40%" alignItems="center" justifyContent="center">
              <StyledImage src={Image} alt="Profile Picture" />
            </Stack>
            <Stack direction="column">
              <Stack ml="10px" >
                <HomeBodyText>My name is...</HomeBodyText>
                <HomeHeader>Florian AINADOU</HomeHeader>
                <HomeBodyText>
                  Having graduated in Computer Science Engineering in 2021, I am currently a fullstack Java React developer.
                </HomeBodyText>
              </Stack>
              <Stack direction="row" width="100%" justifyContent="space-between"> 
                <Footer /> 
                <Stack direction="row" alignItems="center">
                  <Typography fontSize={20} fontFamily="Poppins" sx={{ color: PALETTE.WHITE }}>Download CV :</Typography>
                  <IconButton onClick={handleDownload} sx={{ mx: 1 }}>
                    <CloudDownloadIcon fontSize="large" sx={{ color: PALETTE.WHITE }} />
                  </IconButton></Stack>
                </Stack>
            </Stack>
          </Stack>
      </Stack>
  );
};

export default HomeSection;
