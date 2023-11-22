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

const OngoingDetail = () => {
    return (
        <Wrapper>
            <ContentWrapper>
            <ChallengeImg src={example} />
            <TextWrapper>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold' }}>배드민턴 챌린지(운동)</h2>
            <p style={{ fontSize: '24px' }}>
                몸짱 체력짱 되고 싶은 송이 모여라!
                <br />
                공부든 뭐든 열심히 하고 싶은데 몸이 안 따라준다... 하는 사람?
                <br />
                같이 재밌게 배드민턴 치면서 체력 키우자!
            </p>
            <Line />
            <ChallengeInfo>
                <InfoItem>
                <InfoLabel>개설자&nbsp;&nbsp;&nbsp;&nbsp;</InfoLabel>
                <div>경영학부 한다인</div>
                </InfoItem>
                <InfoItem>
                <InfoLabel>기간&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InfoLabel>
                <div>2023.10.30~2023.11.30</div>
                </InfoItem>
                <InfoItem>
                <InfoLabel>미션 빈도</InfoLabel>
                <div>5일</div>
                </InfoItem>
                <InfoItem>
                <InfoLabel>신청 인원</InfoLabel>
                <div>20명</div>
                </InfoItem>
                <InfoItem>
                <InfoLabel>진행률&nbsp;&nbsp;&nbsp;&nbsp;</InfoLabel>
                <div style={{marginLeft:'-30px', width: '100%'}}><ProgressBar/></div>
                </InfoItem>
            </ChallengeInfo>
            <Line />
            </TextWrapper>
            </ContentWrapper>
        </Wrapper>
    );
};

export default OngoingDetail;
