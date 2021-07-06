import styled from 'styled-components';

export const LinkButton = styled.a`
    visibility: ${({isHidden}) => (isHidden? 'hidden' : '#visible')};
    border-radius: 50px;
    background: ${({primary}) => (primary? '#40A497' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ?'14px 8px': '12px 30px')};
    background: ${({dark}) => (dark ?'#40A497': '#fff')};
    color: #fff;
    font-size : ${({fontBig}) => (fontBig ?'20px': '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({whiteHover}) => (whiteHover ?'#fff': '#000')};
        color: #40A497;
    }
`
;