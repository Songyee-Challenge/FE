import React from 'react';
import styled from 'styled-components';

const MenuBoxContainer = styled.div`
    background: rgba(66, 175, 83, 0.90);
    height: 300px;
    display: flex;
    align-items: center;
`
const Box = styled.div`
    display: flex;
    justify-content: space-between;
    width: calc(100vw - 400px);
    padding: 0 200px;
`
const Menu = styled.div`
    border-radius: 50%;
    background-color: #FFE27C;
    color: black;
    width: 150px;
    height: 150px;
    font-family: 'Dongle-regular';
    font-size: 2.7rem;
    line-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const MenuBox = () => {
    return (
        <MenuBoxContainer>
                <Box>
                    <Menu>자격증/<br/>&nbsp;시험</Menu>
                    <Menu>공채</Menu>
                    <Menu>&nbsp;자유<br/>스터디</Menu>
                    <Menu>취미</Menu>
                    <Menu>운동</Menu>
                </Box>
        </MenuBoxContainer>
    );
};

export default MenuBox;