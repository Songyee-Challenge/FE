import React from 'react';
import styled from 'styled-components';
import example from '../images/exampleimage.png';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin-top:70px;
  margin-left:50px;
`;

const ChallengeImg = styled.img`
  width: 253px;
  height: 347px;
  margin-right: 60px; /* 이미지와 텍스트 간격을 조절하기 위한 마진 값 */
`;

const TextWrapper = styled.div`
  flex: 1; /* 남은 공간을 모두 차지하도록 설정 */
  align-items: flex-start;
`;

const ChallengeInfo=styled.div`
    `;

const ChallengeBtn = styled.button`
  border: 2px solid #42af53; /* 테두리 추가 */
  border-radius: 10px;
  background-color: #42af53;
  color: white;
  margin-left:150px;
  font-weight: bold; /* 볼드체 텍스트 */
  padding: 10px 20px; /* 내용과 테두리 사이의 여백 */
  font-size: 16px; /* 글자 크기 조정 */
  cursor: pointer;
  transition: background-color 0.3s ease; /* 배경색 변화에 애니메이션 효과 */

  &:hover {
    background-color: #367542; /* hover 시 배경색 변경 */
  }
`;

const Challenge = () => {
  return (
    <Wrapper>
      <ChallengeImg src={example} />
      <TextWrapper>
        <h2>KBS 한국어능력시험(자격증/시험)</h2>
        <p>
          한국어문학부 송이의 챌린지!
          <br />
          1~2등급을 목표로 해요. 4주동안 빡세게 진행할 송이들 구합니다!
          <br />
          우리 같이 갓생 살아요 &gt;&lt;
        </p>
        <hr />
        <ChallengeInfo>
            <p>개설자</p>
            <p>기간</p>
            <p>미션 빈도</p>
            <p>신청 인원</p>
        </ChallengeInfo>
        <hr/>
        <ChallengeBtn>챌린지 도전하기</ChallengeBtn>
      </TextWrapper>
    </Wrapper>
  );
};

export default Challenge;
