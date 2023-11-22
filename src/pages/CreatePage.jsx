import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import CustomDatePicker from '../components/DatePicker';
import photo from '../images/photo.png';
import camera from '../images/camera.svg';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
    padding: 50px 100px;
    font-family: 'Pretendard';
`
const Title = styled.div`
    font-family: 'Pretendard';
    font-weight: 900;
    font-size: 2rem;
    margin-bottom: 50px;
`
const Txt = styled.div`
    font-family: 'Pretendard';
    font-weight: 800;
    font-size: 1.7rem;
    margin-bottom: 10px;
    margin-top: 50px;
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
    font-family: 'Pretendard-regular';
    font-size: 1.2rem;
    margin-top: 5px;
    color: #CECECE;
`
const SubTxt = styled.div`
    font-size: 1rem;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 10px;
    font-family: 'Pretendard';
`
const PlusTxt = styled.div`
    font-weight: 600;
    font-family: 'Pretendard-regular';
    font-size: 1.2rem;
    margin-bottom: 20px;
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
const ExplainArea = styled.textarea`
    width: 1000px;
    height: 130px;
    border-radius: 10px;
    outline: 2px solid #D9D9D9;
    border: none;
    background: #FFF;
    font-family: 'Pretendard';
    font-size: 1.2rem;
    font-weight: 500;
    padding: 10px;
    &:focus {
        outline: 2px solid #42AF53;
        border: none;
    }
`
const FileInput = styled.input`
    display: none;
    width: 253px;
`
const Label = styled.label`
    width: 253px;
`
const Box = styled.div`
    width: 200px;
    height: 194px;
    border-radius: 10px;
    border: 3px solid #D9D9D9;
    z-index: 3;
    cursor: pointer;
    > img {
        position: relative;
        z-index: 0;
        object-fit: cover
    }
`
const PhotoTxt = styled.div`
    width: 100%;
    height: 50px;
    background: rgba(153, 153, 153, 0.30);
    margin-top: -50px;
    position: relative;
    z-index: 98;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    color: white;
    font-size: 1.2rem;
    text-align: center;
    font-weight: 800;
    line-height: 50px;
    display: flex;
`
const Photodiv = styled.div`
    display: flex;
    justify-content: center;
    > img {
        display: flex;
        justify-content: center;
        width: 30px;
        margin-right: 5px;
    }
    margin: auto;
`
const RadioBtn = styled.input`
    appearance: none;
`
const RadioLabel = styled.label`
    margin-right: 20px;
    cursor: pointer;
`
const LabelBox = styled.div`
    width: 150px;
    height: 70px;
    border-radius: 30px;
    background-color: white;
    font-family: 'Pretendard';
    text-align: center;
    line-height: 70px;
    border: 3px solid #D9D9D9;
    font-weight: 600;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
        background: #000;
        color: white;
        border: 3px solid #000;
        
    }
`
const AgreeTxt = styled.div`
    color: #646464;
    font-weight: 700;
    font-family: 'Pretendard';
    font-size: 1.2rem;
    margin-top: 90px;
`
const CreateBtn = styled.div`
    width: 222px;
    height: 90px;
    border-radius: 10px;
    background: #000;
    color: white;
    text-align: center;
    line-height: 90px;
    font-family: 'Pretendard';
    font-size: 1.5rem;
    font-weight: 600;
    cursor: pointer;
    margin-top: 80px;
`

const CreatePage = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [inputcount, setInputCount] = useState(0);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [explain, setExplain] = useState("");
    const [expcount, setExpcount] = useState(0);
    const [imgname, setImgname] = useState("");
    const [imgFile, setImgFile] = useState("");
    const imgRef = useRef();
    const [category, setCategory] = useState("");

    const handleTitle = (e) => {
        setTitle(e.target.value);
        if (e.target.value.length > 30) {
            return
          }
        setInputCount(
            e.target.value.length
        );
    }
    const handleExplain = (e) => {
        setExplain(e.target.value);
        if (e.target.value.length > 255) {
            return
        }
        setExpcount(
            e.target.value.length
        );
    }
    // 이미지 업로드 input의 onChange
    const saveImgFile = () => {
        const file = imgRef.current.files[0];
        setImgname(file.name)
        const reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImgFile(reader.result);
            };
            console.log("제목:",)
            console.log(dateToString(startDate), "-", dateToString(endDate));
            console.log(file);
        }
    };

    const dateToString = (date) => {
        return date.getFullYear() + (date.getMonth() + 1).toString().padStart(2, '0') + date.getDate().toString().padStart(2, '0')
    }

    const handleRadio = (e) => {
        setCategory(e.target.value);
    }

    const handleCreate = () => {
        alert('챌린지 개설 완료!');
        navigate('/songchallenge');
        console.log(
            '제목: ', title,
            '시작일: ', dateToString(startDate),
            '마감일: ', dateToString(endDate),
            '미션',
            '소개: ', explain,
            '대표사진: ', imgFile,
            '카테고리: ', category
        )
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
            <div style={{width:"1020px"}}>
            <Txt>챌린지 소개</Txt>
            <PlusTxt>글을 추가해 챌린지를 소개해보세요.</PlusTxt>
            <ExplainArea
                maxLength="255"
                rows="2" 
                style={{resize: 'none'}}
                onChange={handleExplain}/>
            <InputCount>{expcount}/255</InputCount>
            </div>
            <Txt>대표사진</Txt>
            <PlusTxt>챌린지를 잘 설명할 수 있는 사진으로 선택해주세요. 멋진 썸네일은 인기의 비결!</PlusTxt>
            <Label for="profileImg">
                <Box>
                    <img src={imgFile ? imgFile : photo} style={{width:"100%", height:"100%", borderRadius:'10px'}}/>
                    <PhotoTxt><Photodiv><img src={camera}/>사진 선택</Photodiv></PhotoTxt>
                </Box>
            </Label>
            <FileInput
            type="file"
            accept="image/*"
            id="profileImg"
            onChange={saveImgFile}
            ref={imgRef}
            />
            <Txt>카테고리 선택</Txt>
            <PlusTxt>어느 카테고리에 챌린지를 노출할까요?</PlusTxt>
            <div style={{display:"flex"}}>
            <RadioBtn
                type='radio'
                value="자격증/시험" 
                id="test"
                name='category'
                onChange={handleRadio}
            /><RadioLabel for="test"><LabelBox>자격증/시험</LabelBox></RadioLabel>
            <RadioBtn
                type='radio'
                value="공채" 
                id="gong"
                name='category'
                onChange={handleRadio}
            /><RadioLabel for="gong"><LabelBox>공채</LabelBox></RadioLabel>
            <RadioBtn
                type='radio'
                value="자유스터디" 
                id="study"
                name='category'
                onChange={handleRadio}
            /><RadioLabel for="study"><LabelBox>자유스터디</LabelBox></RadioLabel>
            <RadioBtn
                type='radio'
                value="취미" 
                id="hobby"
                name='category'
                onChange={handleRadio}
            /><RadioLabel for="hobby"><LabelBox>취미</LabelBox></RadioLabel>
            <RadioBtn
                type='radio'
                value="운동" 
                id="exc"
                name='category'
                onChange={handleRadio}
            /><RadioLabel for="exc"><LabelBox>운동</LabelBox></RadioLabel></div>
            <div style={{display:"flex", justifyContent:"space-between"}}>
            <AgreeTxt><u>챌린지 개설 약관</u>에 동의하며 챌린지를 개설합니다.</AgreeTxt>
            <CreateBtn onClick={handleCreate}>챌린지 개설하기</CreateBtn>
            </div>
        </Wrapper>
    );
};

export default CreatePage;