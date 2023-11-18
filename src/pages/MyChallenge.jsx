import React, { useState } from "react";
import Mybar from "../components/Mybar";
import styled from "styled-components";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import MyMission from "./MyMission";
import MyReview from "./MyReview";
import MyInfo from "./MyInfo";
import profile from "../images/profile.png";
import editprofile from "../images/editprofile.png";

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

const ChallengeBox = styled.div`
  width: 75vw;
  border-top: 1px solid black;
  font-size: 1.2rem;
  color: grey;
  padding: 1rem 0rem;
  display: flex;
`;

const Num = styled.p`
  margin: 0px 30px 5px auto;
  color: black;
  font-weight: bolder;
`;

const MyChallenge = () => {
  const navigate = useNavigate();
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
                    <Edit src={editprofile} />
                    <input
                      type="file" // 파일 선택 input으로 변경
                      id="fileInput"
                      accept="image/*"
                      onChange={handleFileInputChange}
                      style={{ display: "none" }}
                    />
                  </EditImg>
                  <ForestUser>
                    User님의 <ForestSpan>숲</ForestSpan>
                  </ForestUser>
                  <ForestTxt>눈송이들과 함께 갓생 라이프 시작해봐!</ForestTxt>
                </ForestBox>

                <Type>
                  <p>예정된 챌린지</p>
                  <More
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    MORE &gt;
                  </More>
                </Type>
                <ChallengeBox>
                  <p>예정된 챌린지가 없습니다.</p>
                  <Num>총 n개</Num>
                </ChallengeBox>
                <Type>
                  <p>진행 중인 챌린지</p>
                  <More
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    MORE &gt;
                  </More>
                </Type>
                <ChallengeBox>
                  <p>예정된 챌린지가 없습니다.</p>
                  <Num>총 n개</Num>
                </ChallengeBox>
                <Type>
                  <p>종료된 챌린지</p>
                  <More
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    MORE &gt;
                  </More>
                </Type>
                <ChallengeBox>
                  <p>예정된 챌린지가 없습니다.</p>
                  <Num>총 n개</Num>
                </ChallengeBox>
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
