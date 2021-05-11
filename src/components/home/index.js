import NavBar from "../navBar"
import SideBar from "../sideBar"
import React, {useState} from 'react';
import HomeSection from "../homeSection";
import Section from "../section";
import { ActualWork } from "../../Data";
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
        <Section 
        id={ActualWork.id} 
        topLine={ActualWork.topLine}
        heading = {ActualWork.heading}
        subtitle ={ActualWork.description}
        darkTxt = 'true'
        hidden = {ActualWork.hiddeLinkButton}

        />
        </>
    );
}

export default Home;