import React from "react";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
  NavBtnLink,
  NavBtn,
} from "./NavBar";
import { FaBars } from "react-icons/fa";
import CV from "../../resources/CV.pdf";

const NavBar = (props) => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/">Florian A.</NavLogo>
          <MobileIcon>
            <FaBars onClick={props.onCloseButtonClik} />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="experiences"> Experiences </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects"> School Projects </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="educations"> Education </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contacts"> Contacts </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink href={CV}> Download CV </NavBtnLink>
          </NavBtn>
        </NavContainer>
      </Nav>
    </>
  );
};

export default NavBar;
