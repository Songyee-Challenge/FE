import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';

const Wrapper = styled.div`
    width: 100%;
    height: 15vh;
    line-height: 15vh;
    display: flex;
    align-items: center;
    padding-left: 2vw;
    padding-right: 2vw;
    border-bottom: solid 1px black;
    position: fixed;
    top: 0px;
    background-color: white;
`;
const Menu = styled.div`

`;

const Topbar = () => {
    return (
        <Wrapper>
            <img src={logo} style={{width:"10vw"}}/>
            <Menu>송이의 챌린지</Menu>
            <Menu>송이의 일기장</Menu>
            <Menu>마이 챌린지</Menu>
        </Wrapper>
    );
};

export default Topbar;