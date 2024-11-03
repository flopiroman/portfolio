import StImage from "./resources/images/st.svg";
import Devops from "./resources/images/tools.svg";

export const projectsLink = {
  cubeMx: "https://www.st.com/en/development-tools/stm32cubemx.html",
  symfinder: "https://hal.archives-ouvertes.fr/hal-02342730",
  isaDevops: "https://github.com/FlorianAinadou/isa-devops/tree/develop",
  pnsInnov: "https://github.com/FlorianAinadou/pns-innov",
  cookieFactory: "https://github.com/FlorianAinadou/cookiefactory",
  diceForge: "https://github.com/FlorianAinadou/DiceForge",
  spaceX: "https://github.com/FlorianAinadou/box-20-21-team-f-1",
  sacc: "https://github.com/PaulKoffi/sacc",
  train: "https://github.com/FlorianAinadou/train-booking",
  cinEditor: "https://github.com/PaulKoffi/dsl-group-b-TP2",
  covidInfo: "https://github.com/PaulKoffi/prog-web-ADKN",
};
export const ActualWork = {
  id: "actualWork",
  lightBg: true,
  lightTxt: false,
  LightTextDesc: true,
  topLine: "STMICROELECTRONICS Sophia, Oct 21-Now",
  heading: "Software Developer",
  description: [
    "I am actually working at STMICROELECTRONICS Sophia as an software developer. I m working with a team of 9 persons. \n \n ",
    "Firstly, I worked on the STM32CubeMx application, developed in Java  which is is a graphical tool that allows a very easier configuration of STM32 microcontrollers.",
    "After that, I added some features to a Java EE project named Powerflow which is used for STM32 microcontrollers industrial process management. \n\n",
    "At the present time, I m working on the developpement of Theia and Vscode extensions for a new project.",
  ],
  isHidden: false,
  projectPath: projectsLink.cubeMx,
  imgStart: false,
  buttonDark: true,
  img: StImage,
  alt: "Developper",
  darkTxt: true,
  primary: true,
  whiteHover: false,
};

export const PolytechStage = {
  id: "polytechStage",
  lightBg: false,
  lightTxt: true,
  LightTextDesc: false,
  topLine: "Polytech Nice Sophia Jun-August 20",
  heading: "Internship on Symfinder-api ",
  description: [
    "Symfinder is a Toolchain for the Identification and Visualization of Object-Oriented Variability Implementations. \n \n",
    "During this internship, I worked on the development of features using a specific toolchain which combines travis, docker, Java, Javascript, html/css and mocha for testing. \n \n",
    "This intership was very interesting since it was my first time using reverse engineering to understand a project structure, before starting its. \n \n",
  ],
  isHidden: false,
  buttonDark: true,
  projectPath: projectsLink.symfinder,
  imgStart: true,
  img: Devops,
  alt: "Developper",
  darkTxt: false,
  primary: true,
  whiteHover: true,
};

export const schools = {
  polytech: "https://polytech.univ-cotedazur.fr/",
  epac: "https://www.esseyi.com/organizations/epac-uac",
};

export const technoLinks = {
  javaEE: "https://www.oracle.com/fr/java/technologies/java-ee-glance.html",
  vscode: "https://code.visualstudio.com/api",
  docker: "https://www.docker.com/",
  htmlCss: "https://www.w3.org/Style/Examples/011/firstcss.fr.html",
  java: "https://www.java.com/fr/",
  react: "https://fr.reactjs.org/",
  node: "https://nodejs.org/en/",
  theia: "https://theia-ide.org/",
  travis: "https://www.travis-ci.com/",
  kafka: "https://kafka.apache.org/",
  python: "https://www.python.org/",
  flutter:
    "https://flutter.dev/?gclid=CjwKCAjw_o-HBhAsEiwANqYhp42AEbVz2ocRnQIPJShU-vnRi-Iy2vTmj-GhzlwOZmyUl4cDY5dn5BoCBKEQAvD_BwE&gclsrc=aw.ds",
};
