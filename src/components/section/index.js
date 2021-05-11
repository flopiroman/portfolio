import React from 'react';
import { LinkButton } from '../LinkButton';
import { Container,BtnWrap,Column1,Column2,DataRow,DataWrapper,Img,ImgWrap,Subtitle,TextWrapper,TopLine,Heading } from './Section';

const Section = (props) => {
    return (
        <>
          <Container id={props.id}>
              <DataWrapper>
                  <DataRow>

                    <Column1>
                        <TextWrapper>
                            <TopLine>{props.topLine}</TopLine>
                            <Heading>{props.heading}</Heading>
                            <Subtitle darkTxt={props.darkTxt}>{props.subtitle}</Subtitle>
                            <BtnWrap>
                                <LinkButton href={props.projectPath} isHidden={props.hidden}>Link</LinkButton>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>

                  </DataRow>
              </DataWrapper>         
          </Container>  
        </>
    )
}

export default Section;
