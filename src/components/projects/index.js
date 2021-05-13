import React, {useEffect} from 'react';
import Aos from 'aos';
import {BoxWrapper,BoxCard} from '../BoxCard';
import {ProjectsContainer, ProjectH1, ProjectH2, ProjectIcon, ProjectP, TechnoImages} from './Projects';
import 'aos/dist/aos.css';
import SpaceX from '../../resources/images/projects/spacex.jpg';
import TrainBookin from '../../resources/images/projects/train.jpg';
import PythonKafka from '../../resources/images/techno/kafpy.png';
import NodeJsAngular from '../../resources/images/techno/nodejs.png';
import Dsltechno from '../../resources/images/techno/dslTechno.jpg';
import CinEditor from '../../resources/images/projects/cut.png';
import Cloud from '../../resources/images/projects/cloud.jpg';
import CloudTechno from '../../resources/images/techno/stackCloud.png';
import WebProject from '../../resources/images/projects/covid.png';
import WebTechno from '../../resources/images/techno/rnode.jpeg';
import IsaProject from '../../resources/images/projects/drone.png';
import IsaTechno from '../../resources/images/techno/javaEE.png';
import CookieFactory from '../../resources/images/projects/cookies.jpg';
import Java from '../../resources/images/techno/Java.jpg';
import DiceForge from '../../resources/images/projects/Dice-Forge.jpg';
import Polytech from '../../resources/images/univ/imagePoly.png';
import Epac from '../../resources/images/univ/epac.png';
import { projectsLink } from '../../Data';

const Projects = () => {

    useEffect(() =>{
        Aos.init({duration: 2000})
    })
    return (
        <>
            <ProjectsContainer id='projects'>
                <ProjectH1>Some School Projects</ProjectH1>
                <BoxWrapper>
                    <BoxCard data-aos='fade-up-right' onClick={() => {
                        window.open(projectsLink.spaceX)
                    }}>
                        <ProjectIcon src={SpaceX} />
                        <ProjectH2> Space X project </ProjectH2>
                        <ProjectP>This project was about building an event oriented application to monitor some rocket launchs </ProjectP>
                        <TechnoImages src={PythonKafka}/>
                    </BoxCard>
                    <BoxCard  data-aos='flip-up' onClick={() => {
                        window.open(projectsLink.train)
                    }}>
                        <ProjectIcon src={TrainBookin}/>
                        <ProjectH2> TrainBookin </ProjectH2>
                        <ProjectP> This project purpose was to monitor trains booking regarding using a Web and a mobile app. </ProjectP>
                        <TechnoImages src={NodeJsAngular}/>
                    </BoxCard>
                    <BoxCard data-aos='fade-down-left' onClick={() => {
                        window.open(projectsLink.cinEditor)
                    }}> 
                        <ProjectIcon src={CinEditor} />
                        <ProjectH2> CinEditor </ProjectH2>
                        <ProjectP> This project aims to allow people with minimal knowledge to easily edit videos in vscode </ProjectP>
                        <TechnoImages src={Dsltechno}/>
                    </BoxCard>
                    <BoxCard data-aos='fade-up-right' onClick={() => {
                        window.open(projectsLink.sacc)
                    }}> 
                        <ProjectIcon src={Cloud} />
                        <ProjectH2> Tracking as a Service </ProjectH2>
                        <ProjectP> This project purpose was to keep track of people infected by the Covid19 </ProjectP>
                        <TechnoImages src={CloudTechno}/>
                    </BoxCard>
                    <BoxCard data-aos='flip-down' onClick={() => {
                        window.open(projectsLink.covidInfo)
                    }}> 
                        <ProjectIcon src={WebProject} />
                        <ProjectH2> CovidInfo </ProjectH2>
                        <ProjectP> This application was built to analyze and show daily Covid data using charts </ProjectP>
                        <TechnoImages src={WebTechno}/>
                    </BoxCard>
                    <BoxCard data-aos='fade-up-left' onClick={() => {
                        window.open(projectsLink.isaDevops)
                    }}> 
                        <ProjectIcon src={IsaProject} />
                        <ProjectH2> DroneDelivery </ProjectH2>
                        <ProjectP> This project was aiming to help a company to manage deliveries using drones </ProjectP>
                        <TechnoImages src={IsaTechno}/>
                    </BoxCard>
                    <BoxCard data-aos='fade-down-right' onClick={() => {
                        window.open(projectsLink.cookieFactory)
                    }}> 
                        <ProjectIcon src={CookieFactory} />
                        <ProjectH2> Cookie Factory </ProjectH2>
                        <ProjectP> During this project, we had to build an application to manage cookies sales  </ProjectP>
                        <TechnoImages src={Java}/>
                    </BoxCard>
                    <BoxCard data-aos='flip-left' onClick={() => {
                        window.open(projectsLink.diceForge)
                    }}> 
                        <ProjectIcon src={DiceForge} />
                        <ProjectH2> Dice Forge </ProjectH2>
                        <ProjectP> This appliaction was a digital version of a society game named Dice Forge</ProjectP>
                        <TechnoImages src={Java}/>
                    </BoxCard>
                </BoxWrapper>
            </ProjectsContainer>

            <ProjectsContainer id='educations' color={true}>
                <ProjectH1 color={true}>Education</ProjectH1>
                <BoxWrapper>
                    <BoxCard color={true} data-aos='zoom-out-up'>
                        <ProjectIcon src={Polytech} bigIcon={true}/>
                        <ProjectH2> Engineering cycle in computer sciences specialized in software architecture</ProjectH2>
                        <ProjectP>Polytech Nice  (September 2018 - Now) </ProjectP>
                    </BoxCard>
                    <BoxCard  color={true} data-aos='zoom-out-up' >
                        <ProjectIcon src={Epac} bigIcon={true}/>
                        <ProjectH2> Engineering cycle first year in computer sciences and telecoms field </ProjectH2>
                        <ProjectP> EPAC (November 2017 - August 2018) </ProjectP>
                    </BoxCard>
                    <BoxCard  color={true} data-aos='zoom-out-up' >
                        <ProjectIcon src={Epac} bigIcon={true}/>
                        <ProjectH2> Preparatory classes in mathematics, physical sciences and computer science </ProjectH2>
                        <ProjectP> EPAC (September 2015 - October 2017) </ProjectP>
                    </BoxCard>
                </BoxWrapper>
            </ProjectsContainer>
        </>
    )
}

export default Projects
