import React from 'react'
import {FooterContainer,FooterWrap, SocialIcon, SocialIconLink,WebSiteRights, SocialMedia, SocialMediaWrap} from './Footer';
import {FaGithub, FaLinkedin, FaMailBulk, FaTwitter} from 'react-icons/fa';
const Footer = () => {
    return (
        <>
            <FooterContainer id='contacts'>
                <FooterWrap>
                    <SocialMedia>
                        <SocialMediaWrap>

                            <SocialIcon>
                                    <SocialIconLink href='https://www.linkedin.com/in/florian-ainadou-776225170/'  aria-label='Linkedin'>
                                        <FaLinkedin/>
                                    </SocialIconLink>
                            </SocialIcon>
                            <SocialIcon>
                                    <SocialIconLink href='https://github.com/FlorianAinadou'  aria-label='Github'>
                                        <FaGithub/>
                                    </SocialIconLink>
                            </SocialIcon>
                            <SocialIcon>
                                    <SocialIconLink href='mailto:florian.ainadou97@gmail.com' aria-label='Twitter'>
                                        <FaMailBulk/>
                                    </SocialIconLink>
                            </SocialIcon>
                        </SocialMediaWrap>
                    </SocialMedia>
                    <WebSiteRights> portfolio © {new Date().getFullYear()} All rights reserved, Powerded by React </WebSiteRights>
                </FooterWrap>    
            </FooterContainer>   
        </>
    )
}

export default Footer
