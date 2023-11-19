import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  padding-top: 30px;
  margin: 0 auto;
  width: 92vw;
  font-family: "Pretendard";
`;

const Relay = styled.div`
  display: flex;
  border-bottom: 3px solid black;
`;

const RelayTxt = styled.p`
  font-size: 1.4rem;
  font-weight: bolder;
`;

const Moment = styled.p`
  font-size: 1.3rem;
  font-weight: bolder;
`;

const Sub = styled.p`
  font-size: 1.1rem;
`;

const Diary = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Relay>
        <RelayTxt>소감 릴레이</RelayTxt>
      </Relay>
    </Wrapper>
  );
};

export default Diary;
