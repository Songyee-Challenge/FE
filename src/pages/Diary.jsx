import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import profile from "../images/profile.png";
import like_off from "../images/like_off.png";
import like_on from "../images/like_on.png";
import axios from "axios";

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

const Btn = styled.button`
  color: white;
  background-color: black;
  width: 80px;
  height: 40px;
  white-space: nowrap;
  font-size: 1rem;
  margin: auto 0px 10px auto;
  cursor: pointer;
`;

const Moment = styled.p`
  font-size: 1.3rem;
  font-weight: bolder;
`;

const Sub = styled.p`
  font-size: 1.1rem;
`;

const DiaryBox = styled.div`
  width: 100%;
  border-radius: 10px;
  height: 250px;
  background-color: #f2f2f2;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const FlexBox = styled.div`
  display: flex;
  background-color: white;
  border: 1px solid #dddddd;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 7px 10px;
`;

const ImgContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  overflow: hidden;
  border: 0.01cm solid grey;
  margin: 5px 0px 0px 20px;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Div = styled.div`
  height: 60px;
  margin: 0px 15px;
`;

const Name = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  font-weight: bolder;
`;

const Date = styled.p`
  margin-top: -10px;
  color: grey;
  font-size: 14px;
`;

const Title = styled.p`
  font-size: 1.3rem;
  font-weight: bolder;
  margin-top: 5px;
`;

const SubTitle = styled.p`
  font-size: 1rem;
  font-weight: bolder;
  margin-top: -15px;
`;

const LikeDiv = styled.div`
  display: flex;
  margin: auto 15px 0px auto;
  gap: 15px;
`;

const LikeBtn = styled.img`
  width: 34px;
  height: 32px;
  margin-top: 15px;
  cursor: pointer;
`;

const Count = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  color: #646464;
  margin-top: 17px;
`;

const Contents = styled.p`
  padding: 20px 30px;
  font-size: 1.2rem;
`;

const Diary = () => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [relayList, setRelayList] = useState([]);
  let ACCESS_TOKEN = localStorage.getItem("accessToken");

  const getDiary = () => {
    axios
      .get("/api/v1/review/all", {
        headers: {
          "Content-Type": "application/json",
          Authorization: ` Bearer ${ACCESS_TOKEN}`,
        },
      })
      .then((response) => {
        console.log(response);
        console.log(response.data.review_id);
        setRelayList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getDiary();
  }, []);

  const handleLikeClick = (e) => {
    console.log(e.target.id);
    console.log(ACCESS_TOKEN);
    axios
      .post(`/api/v1/review/${e.target.id}/like`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: ` Bearer ${ACCESS_TOKEN}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error liking diary entry:", error);
      });
  };

  return (
    <Wrapper>
      <Relay>
        <RelayTxt>소감 릴레이</RelayTxt>
        <Btn
          onClick={() => {
            navigate("/diary/post");
          }}
        >
          글쓰기
        </Btn>
      </Relay>
      <Moment>챌린지를 진행하면서 뿌듯했던 순간들</Moment>
      <Sub>
        참여한 챌린지에서 뿌듯했거나 인상깊었던 순간들을 공유해보세요. <br />{" "}
        진심이 담긴 송이들의 소감이 모여 아름다운 물결을 이룹니다.
      </Sub>

      {relayList.map((diaryEntry) => (
        <DiaryBox key={diaryEntry.review_id}>
          <FlexBox>
            <ImgContainer>
              <ProfileImg src={profile} />
            </ImgContainer>
            <Div>
              <Name>{diaryEntry.writer}</Name>
              <Date>{diaryEntry.createdDate}</Date>
            </Div>
            <Div>
              <Title>{diaryEntry.title}</Title>
              <SubTitle>{diaryEntry.myChallenge}</SubTitle>
            </Div>
            <LikeDiv>
              <LikeBtn
                id={diaryEntry.review_id}
                src={diaryEntry.isLiked ? like_on : like_off}
                onClick={handleLikeClick}
              />
              <Count>{diaryEntry.likeCount}</Count>
            </LikeDiv>
          </FlexBox>
          <Contents>{diaryEntry.content}</Contents>
        </DiaryBox>
      ))}
    </Wrapper>
  );
};

export default Diary;
