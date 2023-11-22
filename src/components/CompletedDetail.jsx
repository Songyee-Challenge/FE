import React from 'react';
import styled from 'styled-components';
import example from '../images/exampleimage.png';
import ProgressBar from '../components/ProgressBar';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  margin-top: 70px;
  margin-left: 50px;
  font-family: 'Pretendard';
`;

const ContentWrapper = styled.div`
  display: flex;
`;

const ChallengeImg = styled.img`
  width: 382px;
  height: 466px;
  margin-left: -100px;
  margin-right: 80px;
  margin-top:35px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  margin-left:50px;
  color: #747474;
`;

const ChallengeInfo = styled.div`
  font-size: 20px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
`;

const InfoItem = styled.div`
  display: flex;
//   justify-content: flex-start;
  margin-bottom: 20px; /* 간격 조절 */
  margin-top:10px;
`;

const InfoLabel = styled.div`
  margin-right: 30%;
//   margin-right: auto; /* 라벨과 값 간 간격 조절 */
`;

const Line = styled.hr`
  width: 100%;
  margin-left: -10px;
  margin-right: 60px;
`;

const CompletedDetail = () => {
    return (
        <Wrapper>
            <ContentWrapper>
            <ChallengeImg src={example} />
            <TextWrapper>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold' }}>자바스크립트 챌린지 (자유스터디)</h2>
            <p style={{ fontSize: '24px' }}>
                코딩 천재 되고 싶은 송 어딨나~
                <br />
                코딩에서 나는.... 왜 해도해도 감자일까요....
                <br />
                같이 고통을 나누면서 성장할 친구들 구합니다!
            </p>
            <Line />
            <ChallengeInfo>
                <InfoItem>
                <InfoLabel>개설자&nbsp;&nbsp;&nbsp;&nbsp;</InfoLabel>
                <div>IT공학과 양지원</div>
                </InfoItem>
                <InfoItem>
                <InfoLabel>기간&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InfoLabel>
                <div>2023.10.30~2023.11.30</div>
                </InfoItem>
                <InfoItem>
                <InfoLabel>미션 빈도</InfoLabel>
                <div>3일</div>
                </InfoItem>
                <InfoItem>
                <InfoLabel>신청 인원</InfoLabel>
                <div>20명</div>
                </InfoItem>
                <InfoItem>
                <InfoLabel>진행률&nbsp;&nbsp;&nbsp;&nbsp;</InfoLabel>
                <div><ProgressBar/></div>
                </InfoItem>
            </ChallengeInfo>
            <Line />
            </TextWrapper>
            </ContentWrapper>            
        </Wrapper>
    );
};

export default CompletedDetail;