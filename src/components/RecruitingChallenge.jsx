import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import example from '../images/exampleimage.png';
import axios from 'axios';

const RecruitBox = styled.div`
    margin-left:3vw;
    margin-right: 3vw;
    margin-top:5vw;
    font-family:'Pretendard';
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

const RecruitingChallenge = ({challenges}) => {
    const navigate = useNavigate();
    const [recruit, setRecruit] = useState([]);
    const [total, setTotal] = useState("0");
    let ACCESS_TOKEN = localStorage.getItem("accessToken");

    const handleImageClick = (e) => {
        //console.log(e.target.id);
        navigate(`/songchallenge/recruitdetail`, { state: e.target.id });
    };

    const getRecruit = () => {
        axios.get('/api/v1/challenge/recruiting',  {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': ` Bearer ${ACCESS_TOKEN}`
            }
        })
        .then(response => {
            console.log(response.data);
            setRecruit(response.data);
            setTotal(response.data.length);
        })
    }

    useEffect(() => {
        getRecruit();
    }, []);

    return (
        <RecruitBox>
            <h3 style={{marginBottom:'70px'}}>총 {total}개의 챌린지</h3>
            <RecruitList>
            {recruit && recruit.map(challenge=>(
                <div>
                <RecruitImageContainer onClick={handleImageClick}>    
                    <RecruitImage id={challenge.challenge_id} src={`http://localhost:8080/api/v1/picture?pictureName=${challenge.picture}`}/>
                </RecruitImageContainer>
                <RecruitInfo>
                    <RecruitTitle>{challenge.challenge_title}</RecruitTitle>
                    <RecruitDetails>
                        <span>기간</span>
                        <span style={{fontWeight:'bold'}}>{challenge.startDate.substring(0, 4)}.{challenge.startDate.substring(4, 6)}.{challenge.startDate.substring(6, 8)}
                        &nbsp;~&nbsp;
                        {challenge.endDate.substring(0, 4)}.{challenge.endDate.substring(4, 6)}.{challenge.endDate.substring(6, 8)}</span></RecruitDetails>
                    <RecruitExplain>{challenge.explain}</RecruitExplain>
                </RecruitInfo>
                </div>
        ))}
        </RecruitList>
        </RecruitBox>
    );
};

export default RecruitingChallenge;