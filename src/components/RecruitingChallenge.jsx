import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const RecruitBox = styled.div`
    margin-left:3vw;
    margin-top:5vw;
`;

const RecruitList = styled.div`
    width: calc(25% - 2vw); /*4개의 챌린지를 한 줄에 표시하기 위한 너비 */
    margin: 0.5vw;
    border: 2px solid #ffd700;
    border-radius: 10px;
    overflow: hidden;
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

const RecruitingChallenge = () => {

    return (
        <RecruitBox>
            <h3>총 1개의 챌린지</h3>
        </RecruitBox>
    );
};

export default RecruitingChallenge;