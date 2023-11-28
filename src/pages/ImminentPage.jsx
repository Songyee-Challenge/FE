import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../components/Button';

const RecruitBox = styled.div`
    margin-left: 4vw;
    margin-right: 3vw;
    padding-top: 1.2vw;
    font-family:'Pretendard';
    margin-bottom: 200px;
`;

const RecruitList = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 50px;
`;

const RecruitImageContainer = styled.div`
  border: 2px solid #ffd700;
  border-radius: 30px;
  overflow: hidden;
  width:253px;
  height:347px;
  cursor: pointer;
`;

const RecruitImage = styled.img`
    width:100%;
    height: 100%;
    border-bottom: 1px solid #ccc;
    object-fit: cover;
`;

const RecruitInfo = styled.div`
    width:17rem;
    margin-bottom: 100px;
`;

const RecruitTitle = styled.h3`
    font-weight: bold;
    font-size:1.25rem;
`;

const RecruitDetails = styled.div`
    margin-top: 0.5rem;
    border-top: 1px solid #ccc;
    padding-top: 0.5rem;
    font-size:1.1rem;
    display: flex;
    justify-content: space-between;
`;
const RecruitExplain = styled.div`
    margin-top: 0.5rem;
    border-top: 1px solid #ccc;
    padding-top: 0.5rem;
    font-size:1.1rem;   
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    width: 17rem;
    display: -webkit-box;
    -webkit-line-clamp: 2; // 원하는 라인수
    -webkit-box-orient: vertical;
`
const BtnContainer = styled.div`
  position: fixed;
  top: 75%;
  right: -20px;
`;

const TitleBox = styled.div`
    margin-right: 2vw;
    margin-bottom: 23px;
    display: flex;
    align-items: center;
`;

const Title = styled.div`
    font-family: 'Pretendard';
    font-weight:bold;
    font-size: 1.6rem;
`

const ChallengeNumber = styled.div`
    margin-left: auto;
    margin-right: 2vw;
    font-family: 'Pretendard';
    font-size: 1.1rem;
`
const SeparateLine = styled.hr`
    border: none;
    border-top: 3px solid #000;
    margin-right: 3vw;
    margin-left:0px;
    margin-top:-10px;
`;

const Body = styled.div`
    margin-top: 4vw;
    margin-left: 0.5vw;
`;

const ImminentPage = () => {
    return (
        <div>
            
        </div>
    );
};

export default ImminentPage;