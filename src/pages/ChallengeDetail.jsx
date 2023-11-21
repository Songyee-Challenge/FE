import React from 'react';
import styled from 'styled-components';
import DetailBar from '../components/DetailBar';

const Wrapper = styled.div`
    margin-top:50px;
`;

const SeparateLine = styled.hr`
    border: none;
    border-top: 3px solid #000;
    width: 95%;
    margin-left:0px;
    margin-top:-10px;
`;

const ChallengeDetail = () => {
    return (
        <Wrapper>
            <h2>모집 중인 챌린지</h2>
            <SeparateLine/>
            <DetailBar/>
        </Wrapper>
    );
};

export default ChallengeDetail;