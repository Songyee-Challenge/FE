import React from 'react';
import styled from 'styled-components';

const RecruitBox = styled.div`
    margin-left:3vw;
    margin-top:5vw;
`;

const RecruitList = styled.div`
  width: calc(25% - 2vw); /* 4개의 챌린지를 한 줄에 표시하기 위한 너비 */
  margin: 0.5vw;
`;

const RecruitImageContainer = styled.div`
  border: 2px solid #ffd700;
  border-radius: 10px;
  overflow: hidden;
  width:253px;
  height:347px;
`;

const RecruitImage = styled.img`
    width:100%
    height: auto;
    border-bottom: 1px solid #ccc;
`;

const RecruitInfo = styled.div`
    padding: 1rem;
`;

const RecruitTitle = styled.h3`
    font-weight: bold;
`;

const RecruitDetails = styled.p`
    margin-top: 0.5rem;
    border-top: 1px solid #ccc;
    padding-top: 0.5rem;
`;

const RecruitingChallenge = ({challenges}) => {

    return (
        <RecruitBox>
            <h3>총 1개의 챌린지</h3>
            {/* {challenges.map(challenge=>( */}
            <RecruitList>
                <RecruitImageContainer>    
                    <RecruitImage/>
                </RecruitImageContainer>
                <RecruitInfo>
                    <RecruitTitle>KBS 한국어능력시험(자격/</RecruitTitle>
                    <RecruitDetails>기간</RecruitDetails>
                    <RecruitDetails>한국어문학부 송이의 챌린지!</RecruitDetails>
                </RecruitInfo>
            </RecruitList>
        {/* ))} */}
        </RecruitBox>
    );
};

export default RecruitingChallenge;