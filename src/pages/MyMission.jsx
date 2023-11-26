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
  const [checkedMissions, setCheckedMissions] = useState([]);
  let ACCESS_TOKEN = localStorage.getItem("accessToken");

  // isChecked를 챌린지 아이디를 키로 하는 객체로 변경
  const [isChecked, setIsChecked] = useState({});

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
        setMissionList(updatedMissionList);

        // 기존에 체크된 상태를 유지하기 위해 기존의 isChecked 상태를 새로 받은 데이터에 맞게 업데이트
        const updatedIsChecked = { ...isChecked };
        updatedMissionList.forEach((missionList) => {
          missionList.missions.forEach((mission) => {
            const key = `${missionList.challenge_id}-${mission.mission_id}`;
            // 기존에 이미 체크된 상태라면 유지
            updatedIsChecked[key] =
              updatedIsChecked[key] || mission.completed === true;
          });
        });

        setIsChecked(updatedIsChecked);

        // localStorage에 체크 여부 저장
        updatedMissionList.forEach((missionList) => {
          missionList.missions.forEach((mission) => {
            const key = `${missionList.challenge_id}-${mission.mission_id}`;
            const completed = mission.completed === true;
            const storedValue = localStorage.getItem(key);
            // 로컬 스토리지에 저장된 값이 없거나 다를 경우에만 업데이트
            if (storedValue === null || JSON.parse(storedValue) !== completed) {
              localStorage.setItem(key, JSON.stringify(completed));
            }
          });
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleCheckboxChange = (challengeId, missionId) => {
    setIsChecked((prev) => {
      return {
        ...prev,
        [`${challengeId}-${missionId}`]: !prev[`${challengeId}-${missionId}`],
      };
    });
  };

  const postCheck = async (challengeId, missionId) => {
    try {
      const response = await axios.post(
        `/api/v1/mypage/mission/${challengeId}/${missionId}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );
      console.log(response);

      // post의 response가 true이면 checkbox를 항상 체크된 상태로 유지
      // false이면 체크를 해제
      const updatedIsChecked = {
        ...isChecked,
        [`${challengeId}-${missionId}`]: response.data === true,
      };

      setIsChecked(updatedIsChecked);

      getMission();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMission();
  }, []); // 초기 렌더링 시 한 번만 호출

  return (
    <Wrapper>
      <Mission>
        <p>참여한 미션</p>
      </Mission>
      {missionList.map((missionList) => (
        <MissionBox key={missionList.challenge_id}>
          <ImgBox
            onClick={() => {
              navigate("/");
            }}
          >
            <MissionImg src={missionList.picture}></MissionImg>
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
                  {
                    missionList.missions.filter(
                      (mission) =>
                        isChecked[
                          `${missionList.challenge_id}-${mission.mission_id}`
                        ] || mission.completed === true
                    ).length
                  }
                  /{missionList.missionCount}
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
                  id={`mycheck-${mission.mission}`}
                  checked={
                    isChecked[
                      `${missionList.challenge_id}-${mission.mission_id}`
                    ] || mission.completed === true
                  }
                  onChange={() =>
                    handleCheckboxChange(
                      missionList.challenge_id,
                      mission.mission_id
                    )
                  }
                  onClick={() =>
                    postCheck(missionList.challenge_id, mission.mission_id)
                  }
                />
                <Label for={`mycheck-${mission.mission}`}>
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
