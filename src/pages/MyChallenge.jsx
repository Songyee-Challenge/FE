import React, { useState, useEffect } from "react";
import Mybar from "../components/Mybar";
import styled from "styled-components";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import MyMission from "./MyMission";
import MyReview from "./MyReview";
import MyInfo from "./MyInfo";
import profile from "../images/profile.png";
import editprofile from "../images/editprofile.png";
import axios from "axios";
import ProgressBar from "../components/ProgressBar";
import example from "../images/exampleimage.png";

const Wrapper = styled.div`
  margin-left: 3vw;
  padding-top: 10px;
  display: flex;
`;

const MyBox = styled.div`
  margin-left: 3vw;
`;

const ForestBox = styled.div`
  margin-top: 5rem;
  background-color: #ffe27c;
  border-radius: 10px;
  width: 75vw;
  height: 150px;
  margin-bottom: 30px;
  display: flex;
`;

const EditImg = styled.div`
  display: flex;
`;

const Container = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  overflow: hidden;
  padding-top: 35px;
  margin-left: 35px;
  cursor: pointer;
`;

const Profile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50px;
`;

const Edit = styled.img`
  width: 20px;
  height: 20px;
  margin-left: -20px;
  margin-top: 90px;
  cursor: pointer;
`;

const ForestUser = styled.p`
  font-size: 3rem;
  font-family: "Dongle-regular", sans-serif;
  margin-left: 20px;
  margin-top: 2.8rem;
`;

const ForestSpan = styled.span`
  font-size: 3.2rem;
  font-family: "Dongle-regular", sans-serif;
  margin-left: 5px;
  color: #42af53;
`;

const ForestTxt = styled.p`
  font-size: 2.5rem;
  font-family: "Dongle-regular", sans-serif;
  color: #ffb903;
  text-shadow: -2px 0 white, 0 2px white, 2px 0 white, 0 -2px white;
  margin: auto 30px 5px auto;
`;

const Type = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  display: flex;
`;

const More = styled.p`
  font-family: "Dongle-regular", sans-serif;
  font-size: 2rem;
  margin: auto 30px 5px auto;
  cursor: pointer;
`;

const Box = styled.div`
  width: 75vw;
  border-top: 2px solid black;
  margin-bottom: 30px;
`;

const ChallengeBox = styled.div`
  width: 60vw;
  font-size: 1.2rem;
  color: grey;
  padding: 1rem 0rem;
  display: flex;
`;

const ChDiv = styled.div`
  border: 2px solid #ffd700;
  border-radius: 30px;
  overflow: hidden;
  width: 149px;
  height: 173px;
  margin-left: 30px;
  margin-right: 80px;
  margin-top: 20px;
`;

const ChallengeImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
`;

const TextWrapper = styled.div`
  display: flex;
  font-family: "Pretendard";
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  margin-left: -50px;
  margin-top: 20px;
  white-space: nowrap;
  color: black;
`;

const ChallengeInfo = styled.div`
  font-size: 16px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
`;

const InfoItem = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const InfoLabel = styled.div`
  margin-right: 30%;
  white-space: nowrap;
  margin-right: 0px;
`;

const ShowMissionbtn = styled.button`
  font-family: "Pretendard";
  border: 1px solid #000000;
  background-color: white;
  color: black;
  margin-left: 0%;
  font-weight: bold;
  width: 280px;
  height: 35px;
  font-size: 16px;
  cursor: pointer;
`;

const Num = styled.p`
  margin: 0px 30px 5px auto;
  color: black;
  font-weight: bolder;
  font-family: "Pretendard";
  font-size: 1.2rem;
  display: inline;
  float: right;
  margin-top: 20px;
`;

const MyChallenge = () => {
  const navigate = useNavigate();
  const [Username, setUsername] = useState([]);
  const [Recruit, setRecruit] = useState([]);
  const [Inprocess, setInprocess] = useState([]);
  const [Finished, setFinished] = useState([]);
  const [total, setTotal] = useState("0");
  let ACCESS_TOKEN = localStorage.getItem("accessToken");

  const getUsername = () => {
    axios
      .get("/api/v1/mypage/name", {
        headers: {
          "Content-Type": "application/json",
          Authorization: ` Bearer ${ACCESS_TOKEN}`,
        },
      })
      .then((response) => {
        console.log(response);
        setUsername(response.data);
      });
  };

  const getRecruit = () => {
    axios
      .get("/api/v1/mypage/challenge/recruiting", {
        headers: {
          "Content-Type": "application/json",
          Authorization: ` Bearer ${ACCESS_TOKEN}`,
        },
      })
      .then((response) => {
        console.log(response);
        setRecruit(response.data);
      });
  };

  const getInprocess = () => {
    axios
      .get("/api/v1/mypage/challenge/inprocess", {
        headers: {
          "Content-Type": "application/json",
          Authorization: ` Bearer ${ACCESS_TOKEN}`,
        },
      })
      .then((response) => {
        console.log(response);
        setInprocess(response.data);
      });
  };

  const getFinished = () => {
    axios
      .get("/api/v1/mypage/challenge/finished", {
        headers: {
          "Content-Type": "application/json",
          Authorization: ` Bearer ${ACCESS_TOKEN}`,
        },
      })
      .then((response) => {
        console.log(response);
        setFinished(response.data);
      });
  };

  useEffect(() => {
    getUsername();
    getRecruit();
    getInprocess();
    getFinished();
  }, []);

  const [isProfileSelected, setIsProfileSelected] = useState(false);

  const handleImageUpload = () => {
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
  };

  const handleFileInputChange = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const photoImage = document.getElementById("photo");
        photoImage.src = e.target.result;

        setIsProfileSelected(true);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleClickBtn = (e) => {
    console.log(e.target.parentElement.children[0].children[0].textContent.substring(4));
    navigate(`/songchallenge/ongoingdetail`, { state: {state: e.target.id, 
      start:e.target.parentElement.children[0].children[0].textContent.substring(4)}});
  };
  return (
    <Wrapper>
      <Mybar />
      <MyBox>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ForestBox>
                  <EditImg onClick={handleImageUpload}>
                    <Container>
                      <Profile id="photo" src={profile} />
                    </Container>
                    <input
                      type="file"
                      id="fileInput"
                      accept="image/*"
                      onChange={handleFileInputChange}
                      style={{ display: "none" }}
                    />
                  </EditImg>
                  <ForestUser>
                    {Username}님의 <ForestSpan>숲</ForestSpan>
                  </ForestUser>
                  <ForestTxt>눈송이들과 함께 갓생 라이프 시작해봐!</ForestTxt>
                </ForestBox>

                <Type>
                  <p>예정된 챌린지</p>
                  <More
                    onClick={() => {
                      navigate("/songchallenge");
                    }}
                  >
                    MORE &gt;
                  </More>
                </Type>
                <Box>
                  <Num>총 {Recruit.length}개</Num>
                  {Recruit.map((recruit) => (
                    <ChallengeBox key={recruit.challenge_id}>
                      <ChDiv>
                        <ChallengeImg
                          src={`http://localhost:8080/api/v1/picture?pictureName=${recruit.picture}`}
                        />
                      </ChDiv>
                      <TextWrapper>
                        <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
                          {recruit.challenge_title}
                        </h2>
                        <ChallengeInfo>
                          <InfoItem>
                            <InfoLabel>
                              기간: {recruit.startDate.substring(0,4)}.{recruit.startDate.substring(4,6)}.{recruit.startDate.substring(6,8)} ~ {recruit.endDate.substring(0,4)}.{recruit.endDate.substring(4,6)}.{recruit.endDate.substring(6,8)}
                            </InfoLabel>
                          </InfoItem>
                          <InfoItem>
                            <InfoLabel>진행률: </InfoLabel>
                            <InfoLabel>
                              <ProgressBar
                                percentage={recruit.progressPercent}
                              />
                            </InfoLabel>
                          </InfoItem>
                          <ShowMissionbtn
                            onClick={handleClickBtn} id={recruit.challenge_id}
                          >
                            챌린지 보러가기
                          </ShowMissionbtn>
                        </ChallengeInfo>
                      </TextWrapper>
                    </ChallengeBox>
                  ))}
                </Box>
                <Type>
                  <p>진행 중인 챌린지</p>
                  <More
                    onClick={() => {
                      navigate("/songchallenge");
                    }}
                  >
                    MORE &gt;
                  </More>
                </Type>
                <Box>
                  <Num>총 {Inprocess.length}개</Num>
                  {Inprocess.map((inprocess) => (
                    <ChallengeBox key={inprocess.challenge_id}>
                      <ChDiv>
                        <ChallengeImg
                          src={`http://localhost:8080/api/v1/picture?pictureName=${inprocess.picture}`}
                        />
                      </ChDiv>
                      <TextWrapper>
                        <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
                          {inprocess.challenge_title}
                        </h2>
                        <ChallengeInfo>
                          <InfoItem>
                            <InfoLabel>
                              기간: {inprocess.startDate.substring(0,4)}.{inprocess.startDate.substring(4,6)}.{inprocess.startDate.substring(6,8)} ~ {inprocess.endDate.substring(0,4)}.{inprocess.endDate.substring(4,6)}.{inprocess.endDate.substring(6,8)}
                            </InfoLabel>
                          </InfoItem>
                          <InfoItem>
                            <InfoLabel>진행률: </InfoLabel>
                            <InfoLabel>
                              <ProgressBar
                                percentage={inprocess.progressPercent}
                              />
                            </InfoLabel>
                          </InfoItem>
                          <ShowMissionbtn
                            onClick={handleClickBtn} id={inprocess.challenge_id}
                          >
                            챌린지 보러가기
                          </ShowMissionbtn>
                        </ChallengeInfo>
                      </TextWrapper>
                    </ChallengeBox>
                  ))}
                </Box>
                <Type>
                  <p>종료된 챌린지</p>
                  <More
                    onClick={() => {
                      navigate("/songchallenge");
                    }}
                  >
                    MORE &gt;
                  </More>
                </Type>
                <Box>
                  <Num>총 {Finished.length}개</Num>
                  {Finished.map((finished) => (
                    <ChallengeBox key={finished.challenge_id}>
                      <ChDiv>
                        <ChallengeImg
                          src={`http://localhost:8080/api/v1/picture?pictureName=${finished.picture}`}
                        />
                      </ChDiv>
                      <TextWrapper>
                        <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
                          {finished.challenge_title}
                        </h2>
                        <ChallengeInfo>
                          <InfoItem>
                            <InfoLabel>
                              기간: {finished.startDate.substring(0,4)}.{finished.startDate.substring(4,6)}.{finished.startDate.substring(6,8)} ~ {finished.endDate.substring(0,4)}.{finished.endDate.substring(4,6)}.{finished.endDate.substring(6,8)}
                            </InfoLabel>
                          </InfoItem>
                          <InfoItem>
                            <InfoLabel>진행률: </InfoLabel>
                            <InfoLabel>
                              <ProgressBar
                                percentage={finished.progressPercent}
                              />
                            </InfoLabel>
                          </InfoItem>
                          <ShowMissionbtn
                            onClick={handleClickBtn} id={finished.challenge_id}
                          >
                            챌린지 보러가기
                          </ShowMissionbtn>
                        </ChallengeInfo>
                      </TextWrapper>
                    </ChallengeBox>
                  ))}
                </Box>
                <Outlet />
              </>
            }
          />

          <Route path="mission" element={<MyMission />} />
          <Route path="review" element={<MyReview />} />
          <Route path="info" element={<MyInfo />} />
        </Routes>
      </MyBox>
    </Wrapper>
  );
};

export default MyChallenge;
