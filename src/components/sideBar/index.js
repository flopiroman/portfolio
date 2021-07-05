import React from 'react';
import {SideBarContainer, Icon, CloseIcon, SideBarBtnWrap, SideBarLink, SideBarRoute, SideBarWrapper, SideBarMenu} from './SideBar'

const SideBar = (props) => {
    return    (
        <SideBarContainer isOpen = {props.isOpen}>
            <Icon>
                <CloseIcon onClick={props.onCloseButtonClik}/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink onClick={props.onCloseButtonClik} to='experiences'>
                        Experiences
                    </SideBarLink>
                    <SideBarLink onClick={props.onCloseButtonClik} to='projects'>
                        Projects
                    </SideBarLink>
                    <SideBarLink onClick={props.onCloseButtonClik} to='educations'>
                        Educations
                    </SideBarLink>
                    <SideBarLink onClick={props.onCloseButtonClik} to='contacts'>
                        Contacts
                    </SideBarLink>
                </SideBarMenu>
                <SideBarBtnWrap>
                    <SideBarRoute to='downloadCV'> Download CV </SideBarRoute>
                </SideBarBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>);
};

export default SideBar;