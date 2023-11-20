import React from 'react';
import styled from 'styled-components';

const GuideWrapper = styled.div`
  background-color: #FDF9EA; /* 연한 노란색 배경 */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 그림자 효과 */
  width: 80%; /* 화면 80% 차지 */
  margin-top:100px;
  margin-left: 50px;
  padding: 20px; /* 안쪽 여백 */
`;

const ChallengeGuide = () => {
  return (
    <GuideWrapper>
      <h2>챌린지 가이드</h2>
      <p>챌린지 개설자</p>
      <p>송이마을에 살고있는 &&학과 &&& 눈송이입니다</p>
      {/* '송이마을에 살고있는' {입력값} '눈송이입니다. */}
      <p>챌린지를 시작하며</p>
      <p>혼자서는 하기 힘들었던 매일의 습관!<br/>미션을 통해 매일 즐거움과 짜릿함으로 이겨봅시다~</p>
      <p>챌린지 진행</p>
      <p>- 별도의 미션 인증은 없지만 나와의 약속을 성실하게 실천해봅시다. <br/>- 하루의 마무리에 소감을 기록하세요.</p>

    </GuideWrapper>
  );
};

export default ChallengeGuide;
