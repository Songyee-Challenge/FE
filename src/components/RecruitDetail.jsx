import React from 'react';
import styled from 'styled-components';
import example from '../images/exampleimage.png';

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

const ChallengeBtn = styled.button`
  font-family: 'Pretendard';
  border: 2px solid #42af53;
  border-radius: 10px;
  background-color: #42af53;
  color: white;
  margin-top: 25px;
  margin-left: 23%;
  font-weight: bold;
  width: 300px;
  height: 80px;
  font-size: 28px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #367542;
  }
`;

const Line = styled.hr`
  width: 100%;
  margin-left: -10px;
  margin-right: 60px;
`;

const Challenge = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <ChallengeImg src={example} />
        <TextWrapper>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold' }}>KBS 한국어능력시험(자격증/시험)</h2>
          <p style={{ fontSize: '24px' }}>
            한국어문학부 송이의 챌린지!
            <br />
            1~2등급을 목표로 해요. 4주동안 빡세게 진행할 송이들 구합니다!
            <br />
            우리 같이 갓생 살아요 &gt;&lt;
          </p>
          <Line />
          <ChallengeInfo>
            <InfoItem>
              <InfoLabel>개설자&nbsp;&nbsp;&nbsp;&nbsp;</InfoLabel>
              <div>한국어문학부 박연빈</div>
            </InfoItem>
            <InfoItem>
              <InfoLabel>기간&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InfoLabel>
              <div>2023.10.30~2023.11.30</div>
            </InfoItem>
            <InfoItem>
              <InfoLabel>미션 빈도</InfoLabel>
              <div>이틀</div>
            </InfoItem>
            <InfoItem>
              <InfoLabel>신청 인원</InfoLabel>
              <div>20명</div>
            </InfoItem>
          </ChallengeInfo>
          <Line />
          <ChallengeBtn>챌린지 도전하기</ChallengeBtn>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Challenge;
