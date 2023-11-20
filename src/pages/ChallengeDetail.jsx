import React from 'react';
import styled from 'styled-components';
import DetailBar from '../components/DetailBar';

const Wrapper = styled.div`
    margin-top:30px;
`;

const ChallengeDetail = () => {
    return (
        <Wrapper>
            <h2 style={{marginTop:"30px"}}>모집 중인 챌린지</h2>
            <hr/>
            <DetailBar/>
        </Wrapper>
    );
};

export default ChallengeDetail;