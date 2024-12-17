import styled from "styled-components";

export const Techno = styled.img`
  width: 20px;
  height: 20px;
`;

export const BoxWrapperTechno = styled.div`
  width: 1000px;
  margin: 0 auto;
  margin-top: 10px;
  display: inline-flex;
`;

export const BoxCardTechno = styled.div`
  background: transparent;
  margin: 0 auto;
  /* background-position: bottom; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  max-height: 200px;
  /* padding: 10px; */
  /* box-shadow: 0 1px 3px rgba(0,0,0,0.2); */
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const TechnoContainer = styled.div`
  height: 50px;
  display: flex;
  margin-top: 16px;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: baseline;
  background: #fff;
  /* 
    @media screen and (max-width: 768px){
        max-height: 140px;
    }

    @media screen and (max-width: 480px){
        max-height: 140px;
    }
 */
`;
