import styled from "styled-components";
import { Link } from "react-router-dom";
import { PALETTE } from "../../assets/variables";
import { isMobile } from "react-device-detect";

export const FooterContainer = styled.div`
  background-color: ${PALETTE.CYAN};
`;

export const FooterWrap = styled.div`
  padding: 8px 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
  min-height: 10svh;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 820px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;
export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 16px;

  &:hover {
    color: #fff;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: ${isMobile ? 'space-between' : 'block'};
  align-items: center;
  max-width: 100vh;
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebSiteRights = styled.small`
  color: #fff;
  margin-top: 16px;
`;

export const SocialIcon = styled.div`
  display: flex;
  flex-direction: row
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
  margin: 0 10px 0;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  max-width: 100%;
  max-height: 100%;
`;
