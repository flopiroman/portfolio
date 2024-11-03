import { Card, Stack, styled } from '@mui/material'
import { PALETTE } from '../assets/variables'
import { isMobile } from 'react-device-detect'
import { technoLinks } from '../Data'
import react from "../resources/images/techno/react.jpg"

const StackWrapper = styled(Stack)({
  flex: 1,
  backgroundColor: PALETTE.WHITE,
  justifyContent: 'center',
  alignItems: 'center',
})

const StacksContainer = styled(Stack)({
  width: "320px",
  height: "280px",
  backgroundColor: PALETTE.CYAN,
  borderRadius: "30px",
  padding: "20px",
  display: "flex",
  flexDirection: "row",
  flexWrap: 'wrap',
})

const TechnoCard = styled(Card)({
  width: "80px",
  height: "80px",
  display: "flex",
  borderRadius: "10px",
  flexDirection: "row",
  alignItems: "center",
  margin: "auto",
  justifyContent: "center",
  cursor: "pointer",
  transition: "0.5s ease-in-out",
  '&:hover': {
    scale: 1.1,
  }
})

const LandfilesSection = () => {
  const openLink = (link: string) => {
    window.open(link);
  };

  return (
    <Stack minHeight="100vh" direction={isMobile ? "column" : "row"}>
      <Stack flex={1}>
        <StackWrapper>
          <StacksContainer>
            <TechnoCard onClick={() => openLink(technoLinks.react)}>
              <img width="100%" src={react} />
            </TechnoCard>

            <TechnoCard onClick={() => openLink(technoLinks.react)}>
              <img width="100%" src={react} />
            </TechnoCard>
            <TechnoCard onClick={() => openLink(technoLinks.react)}>
              <img width="100%" src={react} />
            </TechnoCard>
            <TechnoCard onClick={() => openLink(technoLinks.react)}>
              <img width="100%" src={react} />
            </TechnoCard>
            <TechnoCard onClick={() => openLink(technoLinks.react)}>
              <img width="100%" src={react} />
            </TechnoCard>
            <TechnoCard onClick={() => openLink(technoLinks.react)}>
              <img width="100%" src={react} />
            </TechnoCard>
          </StacksContainer>
        </StackWrapper>
      </Stack>
      <Stack flex={1}>
        <StackWrapper>
          <StacksContainer>

          </StacksContainer>
        </StackWrapper>
      </Stack>
    </Stack>
  )
}

export default LandfilesSection