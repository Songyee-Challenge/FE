import React, { useState } from 'react';
import styled from 'styled-components';
import BtnInput from '../components/BtnInput';
import RegInput from '../components/RegInput';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
    text-align: center;
    font-family: 'Pretendard';
`;
const Box = styled.div`
    width: 400px;
    margin: auto;
    margin-bottom: 200px;
`
const Title = styled.div`
    color: #000;
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    padding-top: 50px;
    padding-bottom: 30px;
`
const Line = styled.div`
    background: #000;
    height:4px;
    border:0;
    width: 400px;
`
const InviteTxt = styled.div`
    color: #000;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: left;
    margin-top: 30px;
    margin-bottom: 40px;
`
const InputTxt = styled.span`
    color: #000;
    font-family: 'Pretendard';
    font-size: 17px;
    font-weight: 700;
`
const FlexBox = styled.div`
    display: flex;
    line-height: 20px;
    margin: 20px 0 10px 0;
`
const SubTxt = styled.span`
    color: #838383;
    font-family: 'Pretendard';
    font-size: 10px;
    font-weight: 700;
    margin-top: 3px;
    margin-left: 10px;
`
const Emsg = styled.div`
    text-align: left;
    font-size: 0.8rem;
    font-weight: 500;
    margin-top: 5px;
`
const Container = styled.div`
    text-align: left;
`
const SubmitBtn = styled.div`
    height: 46px;
    background: #000;
    text-align: center;
    color: white;
    line-height: 46px;
    font-weight: 600;
    margin-top: 30px;
    cursor: pointer;
`

const RegisterPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [emailMessage, setEmailMessage] = useState("");
    const [code, setCode] = useState("");
    const [codeMessage, setCodeMessage] = useState("");
    const [pw1, setPw1] = useState("");
    const [pw1Message, setPw1Message] = useState("");
    const [pw2, setPw2] = useState("");
    const [pwMessage, setPwMessage] = useState("");
    const [username, setUsername] = useState("");
    const [major, setMajor] = useState("");
    const [stdID, setStdID] = useState("");


    // 숙명 이메일 유효성 검사
    const onChangeEmail = (e) => {
        const currentEmail = e.target.value;
        setEmail(currentEmail);

        const emailRegex = /^[A-Za-z0-9_\.\-]+@(sookmyung)\.(ac)\.(kr)/;

        if (!emailRegex.test(currentEmail)) {
            setEmailMessage("숙명 이메일 계정을 입력해주세요.");
            console.log(emailMessage);

        } else {
            setEmailMessage("");
            console.log('유효 이메일');
        }
      };

    // 코드 전송
    const sendCode = () => {
        alert("숙명 이메일로 인증코드가 전송되었습니다.")
    }

    // 코드 작성
    const onChangeCode = (e) => {
        const currentCode = e.target.value;
        setCode(currentCode);
    };
    // 코드 검사
    const handleCode = (e) => {
        alert("인증이 완료되었습니다.");
    };

    // 비밀번호1
    const onChangePw1 = (e) => {
        const currentPw = e.target.value;
        setPw1(currentPw);

        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;

        if (!passwordRegex.test(currentPw)) {
            setPw1Message("비밀번호는 8-16자, 영문, 숫자, 특수문자를 포함해야 합니다.");
        } else {
            setPw1Message("");
        }

    };

    // 비밀번호2
    const onChangePw2 = (e) => {
        const currentPw2 = e.target.value;
        setPw2(currentPw2);

        if (currentPw2 !== pw1) {
            setPwMessage("비밀번호가 일치하지 않습니다.");
        } else {
            setPwMessage("");
        }
    };

    // 이름
    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    // 전공
    const onChangeMajor = (e) => {
        setMajor(e.target.value);
    }

    // 학번
    const onChangeStdID = (e) => {
        setStdID(e.target.value);
    }

    const handleSubmit = () => {
        alert("회원가입이 완료되었습니다.");
        navigate('/login');
    }


    return (
        <Wrapper>
            <Box>
                <Title>회원가입</Title>
                <Line/>
                <InviteTxt>송이, 반갑습니다!<br/>바로 가입을 도와드릴게요.</InviteTxt>
                <FlexBox>
                    <InputTxt>이메일</InputTxt>
                    <SubTxt>실제 사용하시는 학교 이메일을 등록해 주세요.</SubTxt>
                </FlexBox>
                <BtnInput 
                    name="email"
                    type="email"
                    placeholder='학교 이메일을 입력해 주세요.'
                    value={email}
                    pattern= "^[A-Za-z0-9_\.\-]+@(sookmyung)\.(ac)\.(kr)"
                    onChange={onChangeEmail}
                    btntitle='인증코드 전송'
                    onBtnClick={sendCode}/>
                <Emsg>{emailMessage}</Emsg>
                <FlexBox>
                    <InputTxt>인증코드 입력</InputTxt>
                </FlexBox>
                <BtnInput 
                    name="code"
                    type="text"
                    placeholder='이메일로 전송된 인증코드를 입력해주세요.'
                    value={code}
                    onChange={onChangeCode}
                    btntitle='인증하기'
                    onBtnClick={handleCode}/>
                <Emsg>{emailMessage}</Emsg>
                <FlexBox>
                    <InputTxt>비밀번호</InputTxt>
                    <SubTxt>비밀번호는 8-16자, 영문, 숫자, 특수문자를 포함해야 합니다.</SubTxt>
                </FlexBox>
                <RegInput
                    name="password1"
                    type="password"
                    placeholder='비밀번호를 입력해 주세요.'
                    value={pw1}
                    onChange={onChangePw1}/>
                <Emsg>{pw1Message}</Emsg>
                <FlexBox>
                    <InputTxt>비밀번호 확인</InputTxt>
                </FlexBox>
                <RegInput
                    name="password2"
                    type="password"
                    placeholder='비밀번호를 입력해 주세요.'
                    value={pw2}
                    onChange={onChangePw2}/>
                <Emsg>{pwMessage}</Emsg>
                <FlexBox>
                    <InputTxt>이름</InputTxt>
                </FlexBox>
                <RegInput
                    name="username"
                    type="text"
                    placeholder=''
                    value={username}
                    onChange={onChangeUsername}/>
                <FlexBox style={{justifyContent:"space-between"}}>
                    <Container>
                        <FlexBox>
                        <InputTxt>전공 입력</InputTxt>
                        </FlexBox>
                        <RegInput
                            width="170px"
                            name="major"
                            type="text"
                            placeholder=''
                            value={major}
                            onChange={onChangeMajor}/>
                    </Container>
                    <Container>
                        <FlexBox>
                        <InputTxt>학번 입력</InputTxt>
                        </FlexBox>
                        <RegInput
                            width="170px"
                            name="stdID"
                            type="number"
                            placeholder=''
                            value={stdID}
                            onChange={onChangeStdID}/>
                    </Container>
                </FlexBox>
                <SubmitBtn onClick={handleSubmit}>가입 완료</SubmitBtn>
            </Box>
        </Wrapper>
    );
};

export default RegisterPage;