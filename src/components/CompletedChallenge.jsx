import React from 'react';
import styled from 'styled-components';
import example from '../images/exampleimage.png';
import ProgressBar from './ProgressBar';

const CompletedBox = styled.div`
    margin-left:3vw;
    margin-top:5vw;
    font-family:'Pretendard';
`;

const CompletedList = styled.div`
 width: calc(25% - 2vw);
 margin: 0.5vw;
`;

const CompletedImageContainer = styled.div`
    border : 2px solid #ffd700;
    border-radius: 30px;
    overflow: hidden;
    width: 253px;
    height: 347px;
`;

const CompletedImage = styled.img`
    width: 100%;
    height: auto;
    border-bottom: 1px solid #ccc;
`;

const CompletedInfo = styled.div`
    width:17rem;
`;

const CompletedTitle= styled.h3`
    font-weight: bold;
`;

const CompletedDetails =styled.p`
    margin-top:0.5rem;
    border-top: 1px solid #ccc;
    padding-top: 0.5rem;
`;

const CompletedChallenge = () => {
    return (
        <CompletedBox>
            <h3>총 3개의 챌린지</h3>
            {/* {challenges.map(challenge=>( */}
            <CompletedList>
                <CompletedImageContainer>
                    <CompletedImage src={example}/>
                </CompletedImageContainer>
            <CompletedInfo>
                <CompletedTitle>자바스크립트 챌린지 (자유 스터디)</CompletedTitle>
                <CompletedDetails>기간</CompletedDetails>
                <ProgressBar/>
                {/* 진행바 추가!! */}
                <CompletedDetails>코딩 천재 되고 싶은 송 어딨나~</CompletedDetails>
            </CompletedInfo>
            </CompletedList>
        </CompletedBox>
    );
};

export default CompletedChallenge;