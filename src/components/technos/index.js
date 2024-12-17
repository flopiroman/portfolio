import React, { useEffect } from "react";
import {
  BoxWrapperTechno,
  BoxCardTechno,
  Techno,
  TechnoContainer,
} from "./Techno";
import vscode from "../../resources/images/techno/vscode.png";
import docker from "../../resources/images/techno/docker.jpg";
import htmlCss from "../../resources/images/techno/htmlCss.svg";
import java from "../../resources/images/techno/Java.jpg";
import react from "../../resources/images/techno/react.jpg";
import node from "../../resources/images/techno/nodejs.png";
import theia from "../../resources/images/techno/theia.svg";
import travis from "../../resources/images/techno/travis.png";
import kafka from "../../resources/images/techno/kafka.jpg";
import python from "../../resources/images/techno/python.jpg";
import JavaEE from "../../resources/images/techno/javaEE.png";
import flutter from "../../resources/images/techno/flutter.jpg";
import { technoLinks } from "../../Data";
const Technos = () => {

  const openLink = (link) => {
    window.open(link);
  };
  return (
    <>
      <TechnoContainer id="technos">
        <BoxWrapperTechno onClick={(event) => openLink(technoLinks.javaEE)}>
          <BoxCardTechno>
            <Techno src={JavaEE} />
          </BoxCardTechno>
        </BoxWrapperTechno>
        <BoxWrapperTechno onClick={(event) => openLink(technoLinks.vscode)}>
          <BoxCardTechno>
            <Techno src={vscode} />
          </BoxCardTechno>
        </BoxWrapperTechno>
        <BoxWrapperTechno onClick={(event) => openLink(technoLinks.docker)}>
          <BoxCardTechno>
            <Techno src={docker} />
          </BoxCardTechno>
        </BoxWrapperTechno>
        <BoxWrapperTechno onClick={(event) => openLink(technoLinks.htmlCss)}>
          <BoxCardTechno>
            <Techno src={htmlCss} />
          </BoxCardTechno>
        </BoxWrapperTechno>
        <BoxWrapperTechno onClick={(event) => openLink(technoLinks.java)}>
          <BoxCardTechno>
            <Techno src={java} />
          </BoxCardTechno>
        </BoxWrapperTechno>
        <BoxWrapperTechno onClick={(event) => openLink(technoLinks.react)}>
          <BoxCardTechno>
            <Techno src={react} />
          </BoxCardTechno>
        </BoxWrapperTechno>
        <BoxWrapperTechno onClick={(event) => openLink(technoLinks.node)}>
          <BoxCardTechno>
            <Techno src={node} />
          </BoxCardTechno>
        </BoxWrapperTechno>
        <BoxWrapperTechno onClick={(event) => openLink(technoLinks.theia)}>
          <BoxCardTechno>
            <Techno src={theia} />
          </BoxCardTechno>
        </BoxWrapperTechno>
        <BoxWrapperTechno onClick={(event) => openLink(technoLinks.travis)}>
          <BoxCardTechno>
            <Techno src={travis} />
          </BoxCardTechno>
        </BoxWrapperTechno>
        <BoxWrapperTechno onClick={(event) => openLink(technoLinks.kafka)}>
          <BoxCardTechno>
            <Techno src={kafka} />
          </BoxCardTechno>
        </BoxWrapperTechno>
        <BoxWrapperTechno onClick={(event) => openLink(technoLinks.python)}>
          <BoxCardTechno>
            <Techno src={python} />
          </BoxCardTechno>
        </BoxWrapperTechno>
        <BoxWrapperTechno onClick={(event) => openLink(technoLinks.flutter)}>
          <BoxCardTechno>
            <Techno src={flutter} />
          </BoxCardTechno>
        </BoxWrapperTechno>
      </TechnoContainer>
    </>
  );
};

export default Technos;
