import React, { useState } from 'react';
import styled from 'styled-components';
import BtnInput from '../components/BtnInput';

const Wrapper = styled.div`
    text-align: center;
    font-family: 'Pretendard';
`;
const Box = styled.div`
    width: 400px;
    margin: auto;
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
`
const InputTxt = styled.span`
    color: #000;
    font-family: 'Pretendard';
    font-size: 20px;
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
    margin-top: 5px;
    margin-left: 10px;
`
const Emsg = styled.div`
    text-align: left;
    font-size: 0.8rem;
    font-weight: 500;
    margin-top: 5px;
`

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [emailMessage, setEmailMessage] = useState("");
    const [code, setCode] = useState("");
    const [codeMessage, setCodeMessage] = useState("");

    // 숙명 이메일 유효성 검사
    const onChangeEmail = (e) => {
        const currentEmail = e.target.value;
        setEmail(currentEmail);

        const emailRegExp = /^[A-Za-z0-9_\.\-]+@(sookmyung)\.(ac)\.(kr)/;

        if (!emailRegExp.test(currentEmail)) {
            setEmailMessage("숙명 이메일 계정을 입력해주세요.");
            console.log(emailMessage);

        } else {
            setEmailMessage("");
            console.log('유효 이메일');
        }
      };

    // 코드 작성
    const onChangeCode = (e) => {
        const currentCode = e.target.value;
        setCode(currentCode);
    };
    // 코드 검사
    const handleCode = (e) => {
        alert("인증이 완료되었습니다.");
    };


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
                    btntitle='인증코드 전송'/>
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
            </Box>
        </Wrapper>
    );
};

export default RegisterPage;