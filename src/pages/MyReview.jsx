import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 37px;
  font-family: "Pretendard";
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

const Txt = styled.textarea`
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0px 30px;
  resize: none;
  width: 100%;
  border-top: 0.01cm solid #dddddd;
  border: none;
  outline: none;
  resize: none;
  font-family: "Pretendard";
  padding-top: 30px;
`;

const BtnBox = styled.div`
  margin: 100px 50px 20px auto;
  display: flex;
  gap: 30px;
`;

const Btn = styled.button`
  font-size: 1.1rem;
  border: 2px solid black;
  background-color: white;
  width: 75px;
  height: 45px;
  font-weight: bolder;
  cursor: pointer;
`;

const Num = styled.p`
  font-family: "Dongle-regular", sans-serif;
  font-size: 2rem;
  font-weight: 900;
  margin: 20px 50px;
  white-space: nowrap;
`;

const MyReview = () => {
  const handleDelete = () => {
    alert("삭제하시겠습니까?");
  };

  const handleEdit = () => {
    alert("변경사항이 저장되었습니다.");
  };

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
              <Btn onClick={handleEdit}>수정</Btn>
              <Btn onClick={handleDelete}>삭제</Btn>
            </BtnBox>
          </TxtDiv>
        </Container>
        <Num>총 n개</Num>
      </ReviewBox>
    </Wrapper>
  );
};

export default MyReview;
