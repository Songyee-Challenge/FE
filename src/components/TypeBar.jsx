import React, { useState } from 'react';
import styled from 'styled-components';
import RecruitingChallenge from './RecruitingChallenge';
import OngoingChallenge from './OngoingChallenge';
import CompletedChallenge from './CompletedChallenge';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start; /* 가로 정렬과 간격 조절 */
  margin-left: 2vw;
  white-space: nowrap;
`;

const CustomButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  padding: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  margin-right: 5vw;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: #000;
    }
  }
`;

const TypeBar = ({ onSelectType }) => {
  const [activeComponent, setActiveComponent] = useState('A');

  const handleComponentClick = (componentName) => {
    setActiveComponent(componentName);
    onSelectType && onSelectType(componentName); // 선택된 타입을 부모 컴포넌트로 전달
  };

   // 각 컴포넌트를 동적으로 렌더링
   const renderComponent = () => {
    switch (activeComponent) {
      case 'A':
        return <RecruitingChallenge />;
      case 'B':
        return <OngoingChallenge />;
      case 'C':
        return <CompletedChallenge />;
      default:
        return null;
    }
  };

  return (
    <>
        <ButtonContainer>
        <div>
            <CustomButton
            className={`type_button ${activeComponent === 'A' ? 'active' : ''}`}
            onClick={() => handleComponentClick('A')}
            disabled={activeComponent === 'A'}
            >
            모집 중인 챌린지
            </CustomButton>
        </div>
        <div>
            <CustomButton
            className={`type_button ${activeComponent === 'B' ? 'active' : ''}`}
            onClick={() => handleComponentClick('B')}
            disabled={activeComponent === 'B'}
            >
            진행 중인 챌린지
            </CustomButton>
        </div>
        <div>
            <CustomButton
            className={`type_button ${activeComponent === 'C' ? 'active' : ''}`}
            onClick={() => handleComponentClick('C')}
            disabled={activeComponent === 'C'}
            >
            종료된 챌린지
            </CustomButton>
        </div>
        </ButtonContainer>
        {renderComponent()}
    </>
  );
};

export default TypeBar;
