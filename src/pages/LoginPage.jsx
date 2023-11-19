import React, { useState } from 'react';
import styled from 'styled-components';
import RegInput from '../components/RegInput';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
    text-align: center;
    font-family: 'Pretendard';
`;
const Box = styled.div`
    width: 577px;
    margin: auto;
    margin-bottom: 200px;
`;
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
    width: 577px;
    margin-bottom: 50px;
`
const LoginBtn = styled.div`
    width: 577px;
    height: 56px;
    border-radius: 2px;
    background: #222;
    text-align: center;
    color: white;
    line-height: 56px;
    margin-top: 25px;
`
const RegBtn = styled.div`
    width: 560px;
    border-radius: 28px;
    border: 1px solid #5D5D5D;
    color: #1D1D1D;
    text-align: center;
    font-weight: 700;
    line-height: 56px;
    margin: auto;
    margin-top: 65px;
`

const LoginPage = () => {
    const [email, setEamil] = useState("");
    const [pw, setPw] = useState("");
    const navigate = useNavigate();
    
    const onChangeEmail = (e) => {
        setEamil(e.target.value);
    }

    const onChangePw = (e) => {
        setPw(e.target.value);
    }
 
    return (
        <Wrapper>
            <Box>
                <Title>로그인</Title>
                <Line/>
                <RegInput
                    marginbottom="15px"
                    name="email"
                    type="email"
                    placeholder='이메일'
                    value={email}
                    onChange={onChangeEmail}/>
                <RegInput
                    name="password"
                    type="password"
                    placeholder='비밀번호'
                    value={pw}
                    onChange={onChangePw}/>
                <LoginBtn>로그인</LoginBtn>
                <RegBtn onClick={() => {
                    navigate('/signup')
                }}>간편 회원가입하기</RegBtn>
            </Box>
        </Wrapper>
    );
};

export default LoginPage;