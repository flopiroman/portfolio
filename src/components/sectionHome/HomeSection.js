import styled from "styled-components";
import { FaArrowAltCircleRight, FaLongArrowAltRight } from "react-icons/fa";
import { isMobile } from "react-device-detect";

export const HomeContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 95svh;
  position: relative;

  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 100%,
        rgba(0, 0, 0, 1) 100%
      ),
      linear-gradient(180deg, rgba(1, 0, 1, 0.2) 0%, transparence 100%);
  }
`;

export const HomeBackGround = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBackGround = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: linear-gradient(top, #ffffff, #9acd00);
`;

export const HomeContent = styled.div`
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeImg = styled.img`
  width: 20%;
  float: left;
  margin-right: 10px;
  border-radius: 100%;
  transition: .5s ease;
  backface-visibility: hidden;
  cursor: pointer;
  &:hover{
    width: 30%;
    border: 5px solid #fff;
  }
`;

export const HomeH1 = styled.h1`
  color: #fff;
  font-size: clamp(22px, 30px, 40px);
  text-align: ${isMobile ? "center" : "flex-start"};
  font-family: Poppins;
`;

export const HomeP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: ${isMobile ? "center" : "flex-start"};
  max-width: 600px;
  font-size: clamp(12px, 16px, 20px);
`;

export const HomeBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  text-align: ${isMobile ? "center" : "flex-start"};
`;

export const ArrowFoward = styled(FaArrowAltCircleRight)`
  margin-left: 8px;
  font-size: 20px;
  color: #40a497;
`;

export const Flash = styled(FaLongArrowAltRight)`
  margin-left: 8px;
  font-size: 20px;
`;
