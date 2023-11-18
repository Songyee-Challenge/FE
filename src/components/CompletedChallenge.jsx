import React from 'react';
import styled from 'styled-components';

const CompletedBox = styled.div`
    margin-left:3vw;
    margin-top:5vw;
`;

const CompletedChallenge = () => {
    return (
        <CompletedBox>
            <h3>총 3개의 챌린지</h3>
        </CompletedBox>
    );
};

export default CompletedChallenge;