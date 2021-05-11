import React, {useState} from 'react';
import {HomeBackGround,HomeContainer,VideoBackGround, HomeContent, HomeH1, HomeImg, HomeP,ArrowFoward, Flash, HomeBtnWrapper} from './HomeSection';
import Video from '../../resources/video.mp4';
import Image from '../../resources/profilePicture.png';
import {Button} from '../HomeButton';

const HomeSection = () => {

    const [hover,setHoover] = useState(false);

    const onHoover = () =>{
        setHoover(!hover);
    }

    return (
        <>
            <HomeContainer>
                <HomeBackGround>
                    <VideoBackGround autoPlay loop muted src={Video} type='video/mp4'/>
                </HomeBackGround> 
                    <HomeContent>
                        <HomeImg src={Image}  alt='Profile Picture'/>
                        <HomeH1>
                                Florian AINADOU
                        </HomeH1>
                        <HomeP>
                            Final year student in computer sciences specialized in Software Architecture at Polytech Nice Sophia,
                            looking for a software developer position architecture oriented starting in October 21.
                        </HomeP>
                        <HomeBtnWrapper>
                            <Button to='experiences' onMouseEnter={onHoover} onMouseLeave={onHoover} primary='true'>
                                My Experiences  {hover ? <ArrowFoward /> : <Flash />}
                            </Button>
                        </HomeBtnWrapper>
                    </HomeContent>
            </HomeContainer>
        </>
    )
}

export default HomeSection;
