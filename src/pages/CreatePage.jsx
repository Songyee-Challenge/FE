import React, { useState } from 'react';
import styled from 'styled-components';
import Select from "react-select";

const Wrapper = styled.div`
    padding: 50px 100px;
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
    border: 2px solid #D9D9D9;
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

const CreatePage = () => {
    const [title, setTitle] = useState("");
    const [inputcount, setInputCount] = useState(0);
    const [startYear, setStartYear] = useState("");

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
            <Txt>챌린지 시작일</Txt>
            
            <Txt>챌린지 마감일</Txt>
            <Txt>미션 내용 입력</Txt>
            <Txt>챌린지 소개</Txt>
        </Wrapper>
    );
};

export default CreatePage;