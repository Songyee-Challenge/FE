import React from 'react';
import styled from 'styled-components';

const OngoingBox = styled.div`
    margin-left:3vw;
    margin-top:5vw;
`;

const OngoingChallenge = () => {
    return (
        <OngoingBox>
            <h3>총 2개의 챌린지</h3>
        </OngoingBox>
    );
};

export default OngoingChallenge;