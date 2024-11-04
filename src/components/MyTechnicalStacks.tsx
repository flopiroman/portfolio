import { Card, Stack, styled, Typography } from '@mui/material'
import { PALETTE } from '../assets/variables'
import { isMobile } from 'react-device-detect'
import { technoLinks } from '../Data'
import react from "../resources/images/techno/react.png"
import html5 from "../resources/images/techno/html5.png"
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
import { HomeHeader } from './sectionHome/HomeSection'

export const CardWrapper = styled(Stack)({
  flex: 1,
  backgroundColor: "transparent",
  justifyContent: 'center',
  alignItems: 'center',
})

export const CardContainerAbastract = styled(Stack)({
  width: "350px",
  height: "280px",
  padding: "20px",
  display: "flex",
  borderRadius: "30px",
  transition: '0.5s ease-in-out',
  "&:hover": {
    scale: 1.1,
    border: "solid 1px black",
    boxShadow: `10px 5px 5px ${PALETTE.CYAN}`,
  }
})

export const CardContainer = styled(CardContainerAbastract)({
  backgroundColor: PALETTE.WHITE,
  flexDirection: "row",
  flexWrap: 'wrap',
})

export const TechnoCard = styled(Card)({
  width: "90px",
  height: "90px",
  display: "flex",
  borderRadius: "10px",
  flexDirection: "column",
  border: "solid 1px black",
  alignItems: "center",
  margin: "auto",
  justifyContent: "center",
  cursor: "pointer",
  backgroundColor: "transparent",
  transition: "0.2s ease-in-out",
  '&:hover': {
    scale: 1.1,
    boxShadow: `2px 5px 5px ${PALETTE.CYAN}`,
  }
})

const MyTechnicalStacks = () => {
  const openLink = (link: string) => {
    window.open(link);
  };

  return (
    <Stack bgcolor={PALETTE.GREEN} id="stacks">
    <Stack height="10vh" alignItems="center" justifyContent="center">
      <HomeHeader>The stacks I usually work on...</HomeHeader>
    </Stack>
    <Stack minHeight="90vh" direction={isMobile ? "column" : "row"}>
      <Stack flex={1}>
        <CardWrapper>
          <CardContainer>
            <TechnoCard onClick={() => openLink(technoLinks.react)}>
              <img width="100%" src={react} />
            </TechnoCard>
            <TechnoCard onClick={() => openLink(technoLinks.htmlCss)}>
              <img width="100%" src={html5} />
            </TechnoCard>
            <TechnoCard onClick={() => openLink(technoLinks.htmlCss)}>
              <img width="100%" src={css3} />
            </TechnoCard>
            <TechnoCard onClick={() => openLink(technoLinks.typescript)}>
              <img width="100%" src={typescript} />
            </TechnoCard>
            <TechnoCard onClick={() => openLink(technoLinks.react)}>
              <img width="100%" src={spring} />
            </TechnoCard>
            <TechnoCard onClick={() => openLink(technoLinks.node)}>
              <img width="100%" src={node} />
            </TechnoCard>
          </CardContainer>
        </CardWrapper>
      </Stack>
      <Stack flex={1}>
        <CardWrapper>
          <CardContainer>
            <TechnoCard onClick={() => openLink(technoLinks.git)}>
              <img width="100%" src={git} />
            </TechnoCard>
            <TechnoCard onClick={() => openLink(technoLinks.jira)}>
              <img width="100%" src={jira} />
            </TechnoCard>
            <TechnoCard onClick={() => openLink(technoLinks.vscode)}>
              <img width="100%" src={vscode} />
            </TechnoCard>
            <TechnoCard onClick={() => openLink(technoLinks.gitlab)}>
              <img width="100%" src={gitlab} />
            </TechnoCard>
            <TechnoCard onClick={() => openLink(technoLinks.mysql)}>
              <img width="100%" src={mysql} />
            </TechnoCard>
            <TechnoCard onClick={() => openLink(technoLinks.mongodb)}>
              <img width="100%" src={mongodb} />
            </TechnoCard>
          </CardContainer>
        </CardWrapper>
      </Stack>
    </Stack>
    </Stack>
  )
}

export default MyTechnicalStacks