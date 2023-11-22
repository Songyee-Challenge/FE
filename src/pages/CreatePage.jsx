import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import CustomDatePicker from '../components/DatePicker';
import photo from '../images/photo.png';
import camera from '../images/camera.svg';

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
    color: #CECECE;
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
const ExplainArea = styled.textarea`
    width: 700px;
    height: 130px;
    border-radius: 10px;
    outline: 2px solid #D9D9D9;
    border: none;
    background: #FFF;
    font-family: 'Pretendard';
    font-size: 1.2rem;
    font-weight: 500;
    padding: 5px 10px;
    &:focus {
        outline: 2px solid #42AF53;
        border: none;
    }
`
const FileInput = styled.input`
    display: none;
`
const Label = styled.label`
`
const Box = styled.div`
    width: 253px;
    height: 347px;
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

const CreatePage = () => {
    const [title, setTitle] = useState("");
    const [inputcount, setInputCount] = useState(0);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [explain, setExplain] = useState("");
    const [expcount, setExpcount] = useState(0);
    const [imgFile, setImgFile] = useState("");
    const imgRef = useRef();

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
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImgFile(reader.result);
        };
    };

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
            <div style={{width:"720px"}}>
            <Txt>챌린지 소개</Txt>
            <ExplainArea
                maxlength="255"
                rows="2" 
                style={{resize: 'none'}}
                onChange={handleExplain}/>
            <InputCount>{expcount}/255</InputCount>
            </div>
            <Txt>대표사진</Txt>
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
        </Wrapper>
    );
};

export default CreatePage;