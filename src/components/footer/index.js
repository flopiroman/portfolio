import React from "react";
import {
  FooterContainer,
  FooterWrap,
  SocialIcon,
  SocialIconLink,
  WebSiteRights,
  SocialMedia,
  SocialMediaWrap,
} from "./Footer";
import { FaGithub, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      {/* <FooterContainer id="contacts"> */}
        {/* <FooterWrap>
          <SocialMedia> */}
            <SocialMediaWrap>
              <SocialIcon>
                <SocialIconLink
                  href="https://www.linkedin.com/in/florian-ainadou-776225170/"
                  aria-label="Linkedin"
                >
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcon>
              <SocialIcon>
                <SocialIconLink
                  href="https://github.com/flopiroman"
                  aria-label="Github"
                >
                  <FaGithub />
                </SocialIconLink>
              </SocialIcon>
              <SocialIcon>
                <SocialIconLink
                  href="mailto:florian.ainadou97@gmail.com"
                  aria-label="Twitter"
                >
                  <FaMailBulk />
                </SocialIconLink>
              </SocialIcon>
              <SocialIcon>
                <SocialIconLink href="tel:+33777957964" aria-label="phone">
                  <FaPhone />
                </SocialIconLink>
              </SocialIcon>
            </SocialMediaWrap>
          {/* </SocialMedia> */}
          {/* <WebSiteRights>
            {" "}
            portfolio © {new Date().getFullYear()} All rights reserved,
            Powerded by React{" "}
          </WebSiteRights> */}
        {/* </FooterWrap> */}
      {/* </FooterContainer> */}
    </>
  );
};

export default Footer;
