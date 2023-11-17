import React from 'react';
import styled from 'styled-components';
import biglogo from '../images/songyee.png';
import Button from '../components/Button';

const Wrapper = styled.div`
    background-color: #FFE27C;
    width: 100vw;
    height: 100vh;
    text-align: center;
`;
const Txt = styled.div`
    font-family: 'Dongle-regular';
    font-weight: 600;
    font-size: 3.5rem;
    letter-spacing: 3px;
    margin-top: -40px;
`;
const TxtBtn = styled.div`
    display: flex;
    align-items: center;
`;

const LandingPage = () => {
    return (
        <Wrapper>
            <img src={biglogo} style={{width:"80vw"}}/>
            <TxtBtn>
                <Txt>나만의 챌린지 메이트!<br/>송이들과 함께라면 어디든지 갈 수 있어~</Txt>
                <Button title='시작하기'/>
            </TxtBtn>
        </Wrapper>
    );
};

export default LandingPage;