import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
    width: 100%;
    height: 120px;
    line-height: 120px;
    display: flex;
    align-items: center;
    border-bottom: solid 1px black;
    position: fixed;
    top: 0px;
    background-color: white;
    justify-content: space-between;
    font-family: 'Dongle-regular', sans-serif;
`;
const MainMenu = styled.div`
    display: flex;
    margin-left: 3vw;
`;
const Menu = styled.div`
    color: #000;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    margin-right: ${props => props.marginR};
    cursor: pointer;
`;
const LogoMenu = styled.div`
    display: flex;
    align-items: center;
    margin-left: 3vw;
`;

const Topbar = () => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <LogoMenu>
            <img src={logo} style={{width:"180px"}}/>
            <MainMenu>
            <Menu marginR="3vw" onClick={() => {
                navigate('/');
            }}>송이의 챌린지</Menu>
            <Menu onClick={() => {
                navigate('/');
            }}>송이의 일기장</Menu>
            </MainMenu>
            </LogoMenu>
            <Menu marginR="5vw" onClick={() => {
                navigate('/');
            }}>마이 챌린지</Menu>
        </Wrapper>
    );
};

export default Topbar;