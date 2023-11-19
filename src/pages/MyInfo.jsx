import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 37px;
  font-family: "Pretendard";
`;

const Info = styled.div`
  font-size: 1.4rem;
  border-bottom: 6px solid black;
  font-weight: bolder;
  height: 45px;
  width: 160px;
`;

const InfoBox = styled.div`
  border-top: 1px solid black;
  width: 75vw;
`;

const Box = styled.div`
  margin: 0 auto;
  padding-top: 50px;
  width: 500px;
`;

const Txt = styled.p`
  font-size: 1.2rem;
`;

const Container = styled.div`
  width: 100%;
  height: 80px;
  border-top: 0.06cm solid black;
  font-weight: bold;
`;

const Quit = styled.div`
  width: 100%;
  height: 100px;
  border-top: 0.06cm solid black;
  font-weight: bold;
  margin-top: 100px;
  font-size: 1.1rem;
`;

const MyInfo = () => {
  return (
    <Wrapper>
      <Info>내 정보 관리</Info>
      <InfoBox>
        <Box>
          <Txt>이름</Txt>
          <Container>
            <Txt>눈송이</Txt>
          </Container>
          <Txt>휴대폰 번호</Txt>
          <Container>
            <Txt>01012345678</Txt>
          </Container>
          <Txt>현재 아이디(이메일)</Txt>
          <Container>
            <Txt>mutsa1234@sookmyung.ac.kr</Txt>
          </Container>
          <Quit>
            <p style={{ color: "grey" }}>
              더 이상 송이의 숲을 사용하지 않는다면
            </p>
            <Txt>회원탈퇴 바로가기 &gt;</Txt>
          </Quit>
        </Box>
      </InfoBox>
    </Wrapper>
  );
};

export default MyInfo;
