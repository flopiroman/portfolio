import React from 'react';
import { LinkButton } from '../LinkButton';
import { Container,BtnWrap,Column1,Column2,DataRow,DataWrapper,Img,ImgWrap,Subtitle,TextWrapper,TopLine,Heading } from './Section';
const Section = (props) => {
    return (
        <>
          <Container id='experiences' lightBg={props.lightBg}>
              <DataWrapper>
                  <DataRow imgStart={props.imgStart} >

                    <Column1>
                        <TextWrapper>
                            
                            <TopLine>{props.topLine}</TopLine>
                            <Heading lightTxt={props.lightTxt}>{props.heading}</Heading>
                            <Subtitle darkTxt={props.darkTxt}>{props.description}</Subtitle>
                            <BtnWrap>
                                <LinkButton isHidden={props.isHidden} dark={props.buttonDark} whiteHover={props.whiteHover} onClick={() => {
                        window.open(props.projectPath) 
                    }}>Link to Project</LinkButton>
                            </BtnWrap>

                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={ props.img } alt={props.alt} />
                        </ImgWrap>
                    </Column2>

                  </DataRow>
              </DataWrapper>         
          </Container>  
        </>
    )
}

export default Section;
