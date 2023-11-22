import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import example from '../images/exampleimage.png';
import ProgressBar from './ProgressBar';

const OngoingBox = styled.div`
    margin-left:3vw;
    margin-top:5vw;
    font-family:'Pretendard';
`;

const OngoingList = styled.div`
    width: calc(25% - 2vw);
    margin: 0.5vw;
`;

const OngoingImageContainer = styled.div`
    border: 2px solid #ffd700;
    border-radius: 30px;
    overflow: hidden;
    width: 253px;
    height: 347px;
    cursor: pointer;
`;

const OngoingImage = styled.img`
    width: 100%;
    height: auto;
    border-bottom: 1px solid #ccc;
`;

const OngoingInfo = styled.div`
    width:17rem;
`;

const OngoingTitle = styled.h3`
    font-weight: bold;
    font-size:1.25rem;
`;

const OngoingDetails = styled.p`
    margin-top: 0.5rem;
    border-top: 1px solid #ccc;
    padding-top: 0.5rem;
    font-size:1.1rem;
    display: flex;
    justify-content: space-between;
`;

const OngoingChallenge = () => {
    const navigate = useNavigate();

    const handleImageClick = () => {
        navigate('/songchallenge/ongoingdetail');
    };

    return (
        <OngoingBox>
            <h3 style={{marginBottom:'70px'}}>총 1개의 챌린지</h3>
            {/* {challenges.map(challenge=>()} */}
            <OngoingList>
                <OngoingImageContainer onClick={handleImageClick}>
                    <OngoingImage src={example}/>
                </OngoingImageContainer>
            <OngoingInfo>
                <OngoingTitle>배드민턴 챌린지 (운동)</OngoingTitle>
                <OngoingDetails>
                        <span>기간</span>
                        <span style={{fontWeight:'bold'}}>2023.10.16~2023.10.22</span>
                </OngoingDetails>
                <ProgressBar/>
                {/* 진행바 기능 추가해야됨! */}
                <OngoingDetails>몸짱 체력장 되고 싶은 송이 나와라!</OngoingDetails>
            </OngoingInfo>
            </OngoingList>
            {/* ))} */}
        </OngoingBox>
    );
};

export default OngoingChallenge;