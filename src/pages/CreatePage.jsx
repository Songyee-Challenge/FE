import React, { useState } from 'react';
import styled from 'styled-components';
import CustomDatePicker from '../components/DatePicker';

const Wrapper = styled.div`
    padding: 50px 100px;
    font-family: 'Pretendard';
`
const Title = styled.div`
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 1.7rem;
    margin-bottom: 50px;
`
const Txt = styled.div`
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 1.3rem;
    margin-bottom: 10px;
`
const TitleInput = styled.input`
    width: 700px;
    height: 50px;
    border-radius: 10px;
    outline: 2px solid #D9D9D9;
    border: none;
    background: #FFF;
    font-family: 'Pretendard';
    font-size: 1.5rem;
    font-weight: 600;
    padding: 5px 10px;
    &:focus {
        outline: 2px solid #42AF53;
        border: none;
    }
`
const InputCount = styled.div`
    text-align: right;
    font-family: 'Pretendard';
    font-size: 1.2rem;
    margin-top: 5px;
    color: #42AF53;
`
const SubTxt = styled.div`
    font-size: 1rem;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 10px;
`
const Wave = styled.div`
    margin-top: 20px;   
    width: 100px;
    height: 100px;
    line-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.7rem;
    font-weight: 600;
`

const CreatePage = () => {
    const [title, setTitle] = useState("");
    const [inputcount, setInputCount] = useState(0);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleTitle = (e) => {
        setTitle(e.target.value);
        if (e.target.value.length > 30) {
            e.target.value = e.target.value.slice(0, 30);
          }
        setInputCount(
            e.target.value.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2").length
        );
        console.log(inputcount);
    }

    return (
        <Wrapper>
            <Title>챌린지를 만들어주세요!</Title>
            <Txt>챌린지 제목</Txt>
            <div style={{width:"720px"}}>
            <TitleInput
                name='title' id='title'
                value={title}
                onChange={handleTitle} 
                maxLength='30'/>
            <InputCount>{inputcount}/30</InputCount>
            </div>
            <Txt>챌린지 기간</Txt>
            <div style={{display:"flex"}}>
            <div>
            <SubTxt>챌린지 시작일</SubTxt>
            <CustomDatePicker
                selectedDate={startDate}
                setSelectedDate={setStartDate}
                minDate={new Date()}
            />
            </div>
            <Wave>-</Wave>
            <div>
            <SubTxt>챌린지 마감일</SubTxt>
            <CustomDatePicker
                selectedDate={endDate}
                setSelectedDate={setEndDate}
                minDate={startDate}
            />
            </div>
            </div>
            <Txt>미션 내용 입력</Txt>
            <Txt>챌린지 소개</Txt>
            <Txt>대표사진</Txt>
            <Txt>카테고리 선택</Txt>
        </Wrapper>
    );
};

export default CreatePage;