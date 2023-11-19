import React, { useState } from 'react';
import styled from 'styled-components';
import RegInput from '../components/RegInput';

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

const LoginPage = () => {
    const [email, setEamil] = useState("");
    const [pw, setPw] = useState("");
    
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
            </Box>
        </Wrapper>
    );
};

export default LoginPage;