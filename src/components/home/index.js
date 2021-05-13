import NavBar from "../navBar"
import SideBar from "../sideBar"
import React, {useState,} from 'react';
import HomeSection from "../homeSection";
import Section from "../section";
import { ActualWork, PolytechStage } from "../../Data";
import Projects from "../projects";
import Technos from "../technos";
import Footer from "../footer";
// import profilePicture from '../../profilePicture.png';
const Home = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const onCloseButtonClik = () =>{
        setIsOpen(!isOpen);
    }


    return (
        <>
        <SideBar isOpen ={isOpen}  onCloseButtonClik={onCloseButtonClik}/>
        <NavBar onCloseButtonClik={onCloseButtonClik} />
        <HomeSection/>
        <Section {...ActualWork} />
        <Section {...PolytechStage} />
        <Projects/>
        <Technos/>
        <Footer/>
        </>
    );
}

export default Home;