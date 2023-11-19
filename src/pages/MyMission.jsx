import React from "react";
import styled from "styled-components";
import mymission from "../images/mymission.png";
import checked from "../images/checked.png";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  padding-top: 15px;
  font-family: "Pretendard";
`;

const Mission = styled.div`
  font-size: 1.4rem;
  border-bottom: 6px solid black;
  font-weight: bolder;
  height: 45px;
  width: 160px;
`;

const MissionBox = styled.div`
  border-top: 1px solid black;
  width: 75vw;
  display: flex;
  padding: 80px 30px;
`;

const ImgBox = styled.div`
  border: 4px solid #ffe27c;
  border-radius: 30px;
  width: 180px;
  height: 240px;
  overflow: hidden;
  cursor: pointer;
`;

const MissionImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentBox = styled.div`
  margin-left: 100px;
`;

const HeadDiv = styled.div`
  display: flex;
  gap: 5vw;
`;

const TitleBox = styled.div`
  cursor: pointer;
`;

const Sub = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: -20px;
`;

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 900;
`;

const MissionNum = styled.p`
  font-size: 1.2rem;
  font-weight: 900;
  margin-top: 15px;
`;

const Number = styled.span`
  padding: 10px;
  font-size: 1.8rem;
`;

const Btn = styled.button`
  width: 230px;
  height: 45px;
  background-color: white;
  font-size: 18px;
  font-weight: 900;
  border: 3px solid black;
  margin-top: 20px;
  cursor: pointer;
  white-space: nowrap;
`;

const CheckDiv = styled.div`
  display: flex;
  font-size: 1.1rem;
`;

const Date = styled.p`
  color: grey;
  white-space: nowrap;
`;

const CheckBox = styled.input`
  margin-left: 40px;
  margin-top: 23px;
  cursor: pointer;
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border: 1.5px solid gainsboro;
  &:checked {
    border-color: transparent;
    background-image: url(${checked});
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: limegreen;
  }
`;

const Label = styled.label`
  margin-left: 10px;
  margin-top: 20px;
  font-weight: 600;
  cursor: pointer;
`;

const MyMission = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Mission>
        <p>참여한 미션</p>
      </Mission>
      <MissionBox>
        <ImgBox
          onClick={() => {
            navigate("/");
          }}
        >
          <MissionImg src={mymission}></MissionImg>
        </ImgBox>
        <ContentBox>
          <HeadDiv>
            <TitleBox
              onClick={() => {
                navigate("/");
              }}
            >
              <Sub>온라인/오프라인으로 함께 기말고사 공부 도전해봐요</Sub>
              <Title>기말고사 스터디 챌린지</Title>
            </TitleBox>
            <MissionNum>
              내가 참여한 미션<Number>3/6</Number>개
            </MissionNum>
            <Btn
              onClick={() => {
                navigate("/");
              }}
            >
              참여한 챌린지 바로가기
            </Btn>
          </HeadDiv>
          <CheckDiv>
            <Date>2023.09.21 화</Date>
            <CheckBox type="checkbox" id="mycheck" />
            <Label for="mycheck">
              미션 1. 챌린지 첫날, 챌린지를 시작하게 된 계기를 함께 나눠봅시다!
            </Label>
          </CheckDiv>
        </ContentBox>
      </MissionBox>
    </Wrapper>
  );
};

export default MyMission;
