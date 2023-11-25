import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MenuBox from "../components/MenuBox";
import mymission from "../images/mymission.png";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import axios from "axios";

const Wrapper = styled.div``;
const CategoryLine = styled.div`
  display: flex;
  margin: 30px 60px;
`;
const CategoryTxt = styled.div`
  font-family: "Dongle-regular";
  font-size: 2.5rem;
  line-height: 70px;
  margin-right: 20px;
  font-weight: 500;
`;
const Line = styled.div`
  background: #000;
  height: 4px;
  border: 0;
  width: 60vw;
  margin-top: 33px;
`;
const MoreBtn = styled.div`
  font-family: "Dongle-regular";
  font-weight: 700;
  cursor: pointer;
  font-size: 2.5rem;
  line-height: 70px;
  margin-left: 20px;
`;
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 280px 280px 280px 280px;
  justify-content: space-between;
  width: 70vw;
  margin-left: 70px;
  margin-bottom: 50px;
`;
const ImgBox = styled.div`
  border: 4px solid #ffe27c;
  border-radius: 30px;
  width: 220px;
  height: 240px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 10px;
`;
const MissionImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const BtnContainer = styled.div`

    position: fixed;
    top: 75%;
    right: -20px;
`
const Title = styled.div`
    font-family: 'Pretendard';
    font-weight: 600;
    font-size: 1.2rem;
    color: black;
    width: fit-content;
    margin-bottom: 60px;
    width: 220px;
    text-align: left;
    word-wrap: break-word;
    line-height: 1.2;
    display: -webkit-box;
    -webkit-line-clamp: 2 ;
    -webkit-box-orient: vertical;
`

const HomePage = () => {
  const navigate = useNavigate();
  const [Imminent, setImminent] = useState([]);
  const [hotList, setHotList] = useState([]);
  let ACCESS_TOKEN = localStorage.getItem("accessToken");


    const getImminent = () => {
        axios.get('/api/v1/main/recruiting', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': ` Bearer ${ACCESS_TOKEN}`
            }
        })
        .then(response => {
            console.log('imminent',response);
            setImminent(response.data);
            console.log(ACCESS_TOKEN);
        })
    }
    const getHot = () => {
        axios.get('/api/v1/main/hot', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': ` Bearer ${ACCESS_TOKEN}`
            }
        })
        .then(response => {
            console.log('hot: ',response);
            setHotList(response.data);
        })
    }

    useEffect(() => {
        getImminent();
        getHot();
    }, []);

    return (
        <Wrapper>
            <MenuBox/>
            <CategoryLine>
                <CategoryTxt>마감 임박 챌린지</CategoryTxt>
                <Line/>
                <MoreBtn onClick={() => {navigate('/songchallenge')}}>MORE &nbsp;&nbsp;{'>'}</MoreBtn>
            </CategoryLine>
            <CardContainer>
                {Imminent && Imminent.map(challenge => (
                    <div>
                    <ImgBox key={challenge.challenge_id}><MissionImg referrerPolicy='no-referrer' src={`http://localhost:8080/api/v1/picture?pictureName=${challenge.picture}`} onClick={() => {navigate('/home')}}/></ImgBox>
                    <Title>{challenge.challenge_title}</Title>
                    </div>
                ))}
            </CardContainer>
            <BtnContainer>
                <Button fontSize='2.3rem' title={`챌린지 생성\n \u00A0바로가기`} marginTop='25px' marginLeft='15px'
                    onClick={() => {
                        navigate('/agree')
                    }}/>
            </BtnContainer>
            <CategoryLine>
                <CategoryTxt>인기 챌린지</CategoryTxt>
                <Line style={{width:"65vw"}}/>
            </CategoryLine>
            <CardContainer>
                {hotList && hotList.map(challenge => (
                    <div>
                    <ImgBox><MissionImg referrerPolicy='no-referrer' src={`http://localhost:8080/api/v1/picture?pictureName=${challenge.picture}`} onClick={() => {navigate('/home')}}/></ImgBox>
                    <Title>{challenge.challenge_title}</Title>
                    </div>
                ))}
            </CardContainer>
        </Wrapper>
    );
};

export default HomePage;
