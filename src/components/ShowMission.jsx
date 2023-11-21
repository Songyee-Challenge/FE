import React from 'react';
import styled from 'styled-components';

const MissionContainer = styled.div`
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: center;
    width: 60%;
    margin: 0 auto;
`;

const TextWrapper = styled.div`
    margin-top:30px;
    padding:10px;
    display: flex;
    flex-direction: column;
`;

const Mission = styled.p`
    font-family: 'Pretendard';
    font-size:1.1rem;
`;

const Line = styled.hr`
    border: none;
    border-top: 1px solid #000;
    width: 100%;
    margin: 10px 0;
`;

const ShowMission = () => {
    return (
        <MissionContainer>
            <TextWrapper>
                <Mission>미션1. 챌린지 첫날, 챌린지를 시작하게 된 계기를 함께 나눠봅시다!</Mission>
                <Line/>
                <Mission>미션2. 이 고유어 정말 안 외워진다! 뜻과 함께 공유하기 (3개)</Mission>
                <Line/>
                <Mission>미션3. 나는 한국인이 아닌가... 문법에서 제일 어려운 부분과 핵심 요약해서 공유하기</Mission>
                <Line/>
                <Mission>미션4. 오늘은 잠깐 쉬어가는 타임! 한국어능력시험 이런 게 제~일 싫다 공유하기</Mission>
                <Line/>
                <Mission>미션5. 오늘의 순공 시간 인증하고 어디까지 공부했는지 공유하기</Mission>
                <Line/>
                <Mission>미션6. 이제 곧 챌린지 끝! 서로 가장 자신있는 부분을 짧은 분량으로 정리해서 공유하기</Mission>
            </TextWrapper>
        </MissionContainer>
    );
};

export default ShowMission;