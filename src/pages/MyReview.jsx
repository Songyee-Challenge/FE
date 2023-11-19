import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  padding-top: 37px;
`;

const Review = styled.div`
  font-size: 1.4rem;
  border-bottom: 6px solid black;
  font-weight: bolder;
  height: 45px;
  width: 160px;
`;

const ReviewBox = styled.div`
  border-top: 1px solid black;
  width: 75vw;
  display: flex;
`;

const Container = styled.div`
  border-radius: 10px;
  box-shadow: 0cm 0.1cm 0.05cm 0.05cm #dddddd;
  width: 65vw;
  margin-top: 60px;
`;

const Date = styled.p`
  font-family: "Dongle-regular", sans-serif;
  font-size: 2rem;
  font-weight: 900;
  margin-left: 30px;
  margin-bottom: 10px;
`;

const TxtDiv = styled.div`
  width: 100%;
  border-top: 0.01cm solid #dddddd;
  display: flex;
`;

const Txt = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0px 30px;
`;

const BtnBox = styled.div`
  margin: 100px 50px 20px auto;
  display: flex;
  gap: 30px;
`;

const Btn = styled.button`
  font-size: 1.2rem;
  border: 2px solid black;
  background-color: white;
  width: 80px;
  height: 50px;
  font-weight: bolder;
`;

const Num = styled.p`
  font-family: "Dongle-regular", sans-serif;
  font-size: 2rem;
  font-weight: 900;
  margin: 20px 50px;
  white-space: nowrap;
`;

const MyReview = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Review>챌린지 소감</Review>
      <ReviewBox>
        <Container>
          <Date>2023.09.24</Date>
          <TxtDiv>
            <Txt>
              매일 혼자 힘으로 해내기 어려웠던 문제들도 챌린지를 통해서 하니,
              매일 성장하는 기분이다 훗 아자아자 화이팅~
            </Txt>
            <BtnBox>
              <Btn>수정</Btn>
              <Btn>삭제</Btn>
            </BtnBox>
          </TxtDiv>
        </Container>
        <Num>총 n개</Num>
      </ReviewBox>
    </Wrapper>
  );
};

export default MyReview;
