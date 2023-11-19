import React from 'react';
import styled from 'styled-components';
import MenuBox from '../components/MenuBox';
import mymission from "../images/mymission.png";
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Wrapper = styled.div`
    
`
const CategoryLine = styled.div`
    display: flex;
    margin: 30px 60px;
`
const CategoryTxt = styled.div`
    font-family: 'Dongle-regular';
    font-size: 2.5rem;
    line-height: 70px;
    margin-right: 20px;
`
const Line = styled.div`
    background: #000;
    height:4px;
    border:0;
    width: 60vw;
    margin-top: 33px;
`
const MoreBtn = styled.div`
    font-family: 'Dongle-regular';
    font-weight: 700;
    cursor: pointer;
    font-size: 2.5rem;
    line-height: 70px;
    margin-left: 20px;
`
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 253px 253px 253px 253px;
  justify-content: space-between;
  width: 70vw;
  margin-left: 150px;
  margin-bottom: 50px;
`;
const ImgBox = styled.div`
  border: 4px solid #ffe27c;
  border-radius: 30px;
  width: 180px;
  height: 240px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 100px;
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

let ongoingdummy = [
    {id:1, src:{mymission}},
    {id:2, src:{mymission}},
    {id:3, src:{mymission}},
    {id:4, src:{mymission}},
];

let populardummy = [
    {id:1, src:{mymission}},
    {id:2, src:{mymission}},
    {id:3, src:{mymission}},
    {id:4, src:{mymission}},
    {id:5, src:{mymission}},
    {id:6, src:{mymission}},
    {id:7, src:{mymission}},
    {id:8, src:{mymission}},
];

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <Wrapper>
            <MenuBox/>
            <CategoryLine>
                <CategoryTxt>모집 중인 챌린지</CategoryTxt>
                <Line/>
                <MoreBtn onClick={() => {navigate('/home/songchallenge')}}>MORE &nbsp;&nbsp;{'>'}</MoreBtn>
            </CategoryLine>
            <CardContainer>
                {ongoingdummy && ongoingdummy.map(challenge => (
                    <ImgBox><MissionImg src={mymission} onClick={() => {navigate('/home')}}/></ImgBox>
                ))}
            </CardContainer>
            <BtnContainer>
                <Button fontSize='2.3rem' title={`챌린지 생성\n \u00A0바로가기`} marginTop='25px' marginLeft='15px'
                    onClick={() => {
                        navigate('/home/songchallenge')
                    }}/>
            </BtnContainer>
            <CategoryLine>
                <CategoryTxt>인기 챌린지</CategoryTxt>
                <Line style={{width:"65vw"}}/>
            </CategoryLine>
            <CardContainer>
                {populardummy && populardummy.map(challenge => (
                    <ImgBox><MissionImg src={mymission} onClick={() => {navigate('/home')}}/></ImgBox>
                ))}
            </CardContainer>
        </Wrapper>
    );
};

export default HomePage;