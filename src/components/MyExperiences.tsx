import { Button, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import { HomeHeader } from './sectionHome/HomeSection'
import { PALETTE } from '../assets/variables'
import { isMobile } from 'react-device-detect'
import { CardContainerAbastract, CardWrapper, TechnoCard } from './MyTechnicalStacks'
import landfiles from "../resources/images/techno/landfiles.webp"
import theia from "../resources/images/techno/theia.jpeg"
import theiaLogo from "../resources/images/techno/theia.svg"
import trainBooking from "../resources/images/techno/trainBooking.png"
import { projectsLink, technoLinks } from '../Data'

import react from "../resources/images/techno/react.png"
import angular from "../resources/images/techno/angular.webp"
import css3 from "../resources/images/techno/css3.png"
import typescript from "../resources/images/techno/typescript.png"
import spring from "../resources/images/techno/spring.png"
import mongodb from "../resources/images/techno/mongoDb.png"
import git from "../resources/images/techno/git.png"
import jira from "../resources/images/techno/jira.png"
import mysql from "../resources/images/techno/mysql.png"
import node from "../resources/images/techno/node.png"
import vscode from "../resources/images/techno/vscode.png"
import gitlab from "../resources/images/techno/gitlab.png"

const CustomButton = styled(Button)({
  backgroundColor: PALETTE.CYAN,
  textTransform: 'none',
  color: PALETTE.BLACK_GREEN,
  "&:hover": {
    boxShadow: `2px 2px 2px ${PALETTE.WHITE}`,
  }
})

const ImageContainer = styled(Stack)({
  backgroundColor: PALETTE.WHITE,
  borderRadius: "10px",
  overflow: "hidden",
  border: `1px solid ${PALETTE.CYAN}`
})

const ExperiencesCard = styled(CardContainerAbastract)({
  backgroundColor: PALETTE.GREEN, 
  height: "350px",
})

const SmallTechnoCard = styled(TechnoCard)({
  width: "50px",
  height: "50px",
  border: "none",
  backgroundColor: PALETTE.WHITE,
})

const MyExperiences = () => {
  const openLink = (link: string) => {
    window.open(link);
  };

  return (
    <Stack bgcolor={PALETTE.WHITE} height="100vh" id="experiences">
    <Stack height="10vh" alignItems="center" justifyContent="center">
      <HomeHeader style={{ color: PALETTE.BLACK_GREEN }}>Some experiences...</HomeHeader>
    </Stack>
    <Stack minHeight="90vh" direction={isMobile ? "column" : "row"}>
    <Stack flex={1}>
        <CardWrapper>
          <ExperiencesCard>
            <ImageContainer flex={3}>
              <img width="100%" style={{ flex: 1 }} src={landfiles} />
            </ImageContainer>
            <Stack direction="row" flex={1} alignItems="center" justifyContent="space-between">
              <Typography fontFamily="Garamond" color="primary" fontSize="24px" sx={{ color: PALETTE.WHITE }}> Landfiles </Typography>
              <CustomButton onClick={() => openLink("https://landfiles.com/")}>About</CustomButton>
            </Stack>
            <Stack direction="row" flex={1} alignItems="center" justifyContent="space-between">
              <SmallTechnoCard onClick={() => openLink(technoLinks.react)}>
                <img width="100%" src={react} />
              </SmallTechnoCard>
              <SmallTechnoCard onClick={() => openLink(technoLinks.react)}>
                <img width="100%" src={spring} />
              </SmallTechnoCard>
              <SmallTechnoCard onClick={() => openLink(technoLinks.mongodb)}>
                <img width="100%" src={mongodb} />
              </SmallTechnoCard>
            </Stack>
          </ExperiencesCard>
        </CardWrapper>
      </Stack>
      <Stack flex={1}>
        <CardWrapper>
          <ExperiencesCard>
            <ImageContainer flex={3}>
              <img width="100%" style={{ flex: 1 }} src={theia} />
            </ImageContainer>
            <Stack direction="row" flex={1} alignItems="center" justifyContent="space-between">
              <Typography fontFamily="Garamond" color="primary" fontSize="24px" sx={{ color: PALETTE.WHITE }}>STM32CubeIDE</Typography>
              <CustomButton onClick={() => openLink("https://www.st.com/en/ecosystems/stm32cube.html")}>About</CustomButton>
            </Stack>
          <Stack direction="row" flex={1} alignItems="center" justifyContent="flex-start">
            <SmallTechnoCard onClick={() => openLink(technoLinks.typescript)}>
              <img width="100%" src={typescript} />
            </SmallTechnoCard>
            <SmallTechnoCard onClick={() => openLink(technoLinks.vscode)}>
              <img width="100%" src={vscode} />
            </SmallTechnoCard>
            <SmallTechnoCard onClick={() => openLink(technoLinks.theia)}>
              <img width="100%" src={theiaLogo} />
            </SmallTechnoCard>
          </Stack>
          </ExperiencesCard>
        </CardWrapper>
      </Stack>
      <Stack flex={1}>
        <CardWrapper>
          <ExperiencesCard>
          <ImageContainer flex={3}>
              <img width="100%" style={{ flex: 1 }} src={trainBooking} />
            </ImageContainer>
            <Stack direction="row" flex={1} alignItems="center" justifyContent="space-between">
              <Typography fontFamily="Garamond" color="primary" fontSize="24px" sx={{ color: PALETTE.WHITE }}>Train Booking</Typography>
              <CustomButton onClick={() => openLink(projectsLink.train)}>About</CustomButton>
            </Stack>
          <Stack direction="row" flex={1} alignItems="center" justifyContent="space-between">
            <SmallTechnoCard onClick={() => openLink(technoLinks.node)}>
              <img width="100%" src={node} />
            </SmallTechnoCard>
            <SmallTechnoCard onClick={() => openLink(technoLinks.mongodb)}>
              <img width="100%" src={mongodb} />
            </SmallTechnoCard>
            <SmallTechnoCard onClick={() => openLink(technoLinks.angular)}>
              <img width="100%" src={angular} />
            </SmallTechnoCard>
          </Stack>
          </ExperiencesCard>
        </CardWrapper>
      </Stack>
    </Stack>
    </Stack>
  )
}

export default MyExperiences