import NavBar from "../navBar"
import SideBar from "../sideBar"
import React, {useState} from 'react';
import HomeSection from "../homeSection";

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
        </>
    );
}

export default Home;