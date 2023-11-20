import React, {useState} from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 2vw;
  white-space: nowrap;
  align-items: center;
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
  margin-right: 2vw;
  margin-top:30px;
  flex: 0 0 auto;

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

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const DetailBar = () => {
    const [activeComponent, setActiveComponent] = useState('A');

    const handleComponentClick = (componentName) => {
        setActiveComponent(componentName);
    };

    const renderComponent = () => {
        switch (activeComponent) {
          case 'A':
            return <Challenge />;
          case 'B':
            return <Calendar />;
          case 'C':
            return <ShowMission />;
          case 'D':
            return <ChallengeGuide/>;
          default:
            return null;
        }
      };

    return (
        <ButtonContainer>
            <div>
            <CustomButton
            className={`detail_type_button ${activeComponent === 'A' ? 'active' : ''}`}
            onClick={() => handleComponentClick('A')}
            disabled={activeComponent === 'A'}
          >
            챌린지
          </CustomButton>
          <CustomButton
            className={`detail_type_button ${activeComponent === 'B' ? 'active' : ''}`}
            onClick={() => handleComponentClick('B')}
            disabled={activeComponent === 'B'}
          >
            챌린지달력
          </CustomButton>
          <CustomButton
            className={`detail_type_button ${activeComponent === 'C' ? 'active' : ''}`}
            onClick={() => handleComponentClick('C')}
            disabled={activeComponent === 'C'}
          >
            미션보기
          </CustomButton>
          <CustomButton
            className={`detail_type_button ${activeComponent === 'D' ? 'active' : ''}`}
            onClick={() => handleComponentClick('D')}
            disabled={activeComponent === 'D'}
          >
            챌린지가이드
          </CustomButton>
                
            </div>
        </ButtonContainer>
    );
};

export default DetailBar;