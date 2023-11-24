import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import example from '../images/exampleimage.png';
import axios from 'axios';

const RecruitBox = styled.div`
    margin-left:3vw;
    margin-top:5vw;
    font-family:'Pretendard';
`;

const RecruitList = styled.div`
  width: calc(25% - 2vw); /* 4개의 챌린지를 한 줄에 표시하기 위한 너비 */
  margin: 0.5vw;
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
    height: auto;
    border-bottom: 1px solid #ccc;
`;

const RecruitInfo = styled.div`
    width:17rem;
`;

const RecruitTitle = styled.h3`
    font-weight: bold;
    font-size:1.25rem;
`;

const RecruitDetails = styled.p`
    margin-top: 0.5rem;
    border-top: 1px solid #ccc;
    padding-top: 0.5rem;
    font-size:1.1rem;
    display: flex;
    justify-content: space-between;
`;

const RecruitingChallenge = ({challenges}) => {
    const [challenges, setChallenges] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/v1/challenge/recruiting')
            .then((response)=>{
                setChallenges(response.data);
            })
            .catch((error) => {
                console.error('데이터 가져오기 실패:', error);
            });
    }, []);

    const handleImageClick = () => {
        navigate('/songchallenge/recruitdetail');
    };

    return (
        <RecruitBox>
            <h3 style={{marginBottom:'70px'}}>총 1개의 챌린지</h3>
            {challenges.map(challenge=>(
            <RecruitList key={challenge.challenge_id}>
                <RecruitImageContainer onClick={handleImageClick}>    
                    <RecruitImage src={example}/>
                    {/* <RecruitImage src={challenge.filePath} alt="Challenge Image" /> */}
                </RecruitImageContainer>
                <RecruitInfo>
                    <RecruitTitle>KBS 한국어능력시험(자격증/시험)</RecruitTitle>
                    {/* <RecruitTitle>{challenge.title}</RecruitTitle> */}
                    <RecruitDetails>
                        <span>기간</span>
                        <span style={{fontWeight:'bold'}}>2023.10.16~2023.10.22</span></RecruitDetails>
                        {/* <sapn style={{ fontWeight: 'bold'}}>{`$challenge.startDate} ~ ${challenge.endDate}`}</sapn> */}
                    <RecruitDetails>한국어문학부 송이의 챌린지!</RecruitDetails>
                    {/* <RecruitDetails>{challenge.explain}</RecruitDetails> */}
                </RecruitInfo>
            </RecruitList>
        ))}
        </RecruitBox>
    );
};

export default RecruitingChallenge;