import React from 'react';
import styled from 'styled-components';
import arrow from '../images/arrow.svg';

const Btn = styled.div `
    background-color: #FF528B;
    cursor: pointer;
    font-family: 'Dongle-regular';
    font-weight: 600;
    font-size: 3.5rem;
    color: white;
    width: 20vw;
    height: 120px;
    border-radius: 25px;
    line-height: 120px;
    display: flex;
    align-items: center;
    letter-spacing: 3px;
`
const Txt = styled.div`
    margin: auto;
    display: flex;
    align-items: center;
`

const Button = (props) => {
    const { onClick, title } = props;
    return (
        <Btn onClick={onClick}>
            <Txt>
            {title || "버튼"}
            <img src={arrow} style={{width:"80px", marginLeft:"30px"}}/>
            </Txt>
        </Btn>
    );
};

export default Button;