import React, { useEffect, useState } from "react";
import styled from "styled-components";
import mymission from "../images/mymission.png";
import checked from "../images/checked.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  margin-bottom: 10px;
`;

const TitleBox = styled.div`
  cursor: pointer;
  width: 250px;
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
  font-family: "Abril+Fatface";
`;

const Btn = styled.button`
  width: 230px;
  height: 45px;
  background-color: white;
  font-size: 18px;
  font-weight: 900;
  border: 2px solid black;
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
  margin-top: 22px;
  font-size: 1rem;
  font-weight: 500;
  display: inline-block;
  width: 80px;
`;

const CheckBox = styled.input`
  margin-left: 100px;
  margin-top: 20px;
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
  const [missionList, setMissionList] = useState([]);
  const [completedCount, setCompletedCount] = useState(0);
  const [isChecked, setIsChecked] = useState({});
  const [checkedMissions, setCheckedMissions] = useState([]);
  let ACCESS_TOKEN = localStorage.getItem("accessToken");

  const getMission = () => {
    axios
      .get("/api/v1/mypage/mission", {
        headers: {
          "Content-Type": "application/json",
          Authorization: ` Bearer ${ACCESS_TOKEN}`,
        },
      })
      .then((response) => {
        console.log(response);
        const updatedMissionList = response.data.map((missionList) => ({
          ...missionList,
          missions: missionList.missions.map((mission, missionIndex) => ({
            ...mission,
            mission_id: missionList.challenge_id * 0 + missionIndex + 1,
          })),
        }));

        const updatedIsChecked = {};
        updatedMissionList.forEach((missionList) => {
          missionList.missions.forEach((mission) => {
            updatedIsChecked[
              `${missionList.challenge_id}-${mission.mission_id}`
            ] = mission.completed;
          });
        });
        setIsChecked(updatedIsChecked);

        setMissionList(updatedMissionList);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const postCheck = (challengeId, missionId) => {
    axios
      .post(
        `/api/v1/mypage/mission/${challengeId}/${missionId}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error post checkbox data", error);
      });
  };

  useEffect(() => {
    const storedIsChecked = JSON.parse(localStorage.getItem("isChecked"));
    if (storedIsChecked) {
      setIsChecked(storedIsChecked);
    }

    getMission();
  }, []);

  const handleImageClick = (e) => {
    navigate(`/songchallenge/completeddetail`, {
      state: {
        state: e.target.id,
        start:
          e.target.parentElement.parentElement.children[1].children[1]
            .children[1].textContent,
      },
    });
  };

  useEffect(() => {
    // 브라우저의 Local Storage에 isChecked 상태를 저장합니다.
    localStorage.setItem("isChecked", JSON.stringify(isChecked));
  }, [isChecked]);

  return (
    <Wrapper>
      <Mission>
        <p>참여한 미션</p>
      </Mission>
      {missionList.map((missionList) => (
        <MissionBox key={missionList.challenge_id}>
          <ImgBox onClick={handleImageClick}>
            <MissionImg
              src={`http://localhost:8080/api/v1/picture?pictureName=${missionList.picture}`}
            ></MissionImg>
          </ImgBox>
          <ContentBox>
            <HeadDiv>
              <TitleBox
                onClick={() => {
                  navigate("/");
                }}
              >
                <Sub>{missionList.explain}</Sub>
                <Title>{missionList.challenge_title}</Title>
              </TitleBox>
              <MissionNum>
                내가 참여한 미션
                <Number>
                  {missionList.completedCount}/{missionList.missionCount}
                </Number>
                개
              </MissionNum>
              <Btn
                onClick={() => {
                  navigate("/");
                }}
              >
                참여한 챌린지 바로가기
              </Btn>
            </HeadDiv>
            {missionList.missions.map((mission) => (
              <CheckDiv key={mission.missionDate}>
                <Date>{mission.missionDate}</Date>
                <CheckBox
                  type="checkbox"
                  id={`mycheck-${mission.mission_id}`}
                  checked={
                    isChecked[
                      `${missionList.challenge_id}-${mission.mission_id}`
                    ]
                  }
                  onChange={() =>
                    postCheck(missionList.challenge_id, mission.mission_id)
                  }
                />
                <Label htmlFor={`mycheck-${mission.mission_id}`}>
                  미션 {mission.mission_id}. {mission.mission}
                </Label>
              </CheckDiv>
            ))}
          </ContentBox>
        </MissionBox>
      ))}
    </Wrapper>
  );
};

export default MyMission;
