import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    max-height: 2000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({color})=> (color? '#000' : '#40A497') } ;
    

    @media screen and (max-width: 768px){
        max-height: 2800px;
    }

    @media screen and (max-width: 480px){
        max-height: 3000px;
    }


`

export const ProjectIcon = styled.img`
    height:${({bigIcon})=> (bigIcon? '100px' : '60px' ) };
    width: ${({bigIcon})=> (bigIcon? '120px' : '100px' ) };
    margin-bottom: 10px;
`

export const ProjectH1 = styled.h1`
    font-size: 2.5rem;
    color: ${({color})=> (color? '#fff' : '#000' ) };
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const ProjectH2 = styled.h2`
    font-size: 1rem;
    color: #000;
    margin-bottom: 10px;

    @media screen and (max-width: 480px){
        font-size: 0.8rem;
    }
`

export const ProjectP = styled.p`
    font-size: 1rem;
    color: #000;
    margin-bottom: 10px;

    @media screen and (max-width: 480px){
        font-size: 0.8rem;
    }
`

export const TechnoImages = styled.img`
    height: 60px;
    width: 100px;
    margin-top: 10px;
`