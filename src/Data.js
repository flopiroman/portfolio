import StImage from './resources/images/st.svg';
import Devops from './resources/images/tools.svg';

export const ActualWork = {
    id:'actualWork',
    lightBg: true,
    lightTxt: false,
    LightTextDesc: true,
    topLine: 'STMICROELECTRONICS Sophia, October 21 - Now',
    heading: 'Software Developer',
    description: ['I am actually working at STMICROELECTRONICS Sophia as an software developer. I m working with a team of 6 persons. ',
    'Firstly, I worked on the STM32CubeMx application, developed in Java  which is is a graphical tool that allows a very easy configuration of STM32 microcontrollers and microprocessors.',
    'After that, I add some features to a Java EE project named Powerflow which is used to ease STM32 microcontrollers and microprocessors industrial process management ' ,
    'At the present time, I m working on the developpement of Theia and Vscode extensions for a new project.'
    ],
    isHidden: 'true',
    //projectPath: ,
    imgStart: false,
    img: StImage,
    alt: 'Developper',
    darkTxt: true,
    primary: true,

}          

export const PolytechStage = {
    id:'polytechStage',
    lightBg: false,
    lightTxt: true,
    LightTextDesc: false,
    topLine: 'Polytech Nice Sophia',
    heading: 'Internship on Symfinder-api ',
    description: ['Symfinder is a Toolchain for the Identification and Visualization of Object-Oriented Variability Implementations',
    'During this internship, I worked on the development of features using a specific toolchain which combines travis, docker, Java, nodejs and html/css and mocha for testing.',
    'This intership was very interesting since it was my first time using reverse engineering to understand a project structure, before starting its '
    ],
    isHidden: false,
    buttonDark: true,
    //projectPath: ,
    imgStart: true,
    img: Devops,
    alt: 'Developper',
    darkTxt: false,
    primary: false,

}          

export const projectsLink={
    symfinder: 'https://hal.archives-ouvertes.fr/hal-02342730',
    isaDevops: 'https://github.com/FlorianAinadou/isa-devops/tree/develop',
    pnsInnov: 'https://github.com/FlorianAinadou/pns-innov',
    cookieFactory: 'https://github.com/FlorianAinadou/cookiefactory',  
    diceForge: 'https://github.com/FlorianAinadou/DiceForge',
    spaceX: 'https://github.com/FlorianAinadou/box-20-21-team-f-1',
    sacc: 'https://github.com/PaulKoffi/sacc',
    train: 'https://github.com/FlorianAinadou/train-booking',
    cinEditor: 'https://github.com/PaulKoffi/dsl-group-b-TP2',
    covidInfo: 'https://github.com/PaulKoffi/prog-web-ADKN'
}

export const schools = {
    polytech: 'https://polytech.univ-cotedazur.fr/'
}