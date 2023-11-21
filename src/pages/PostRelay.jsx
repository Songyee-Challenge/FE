import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 30px;
  margin: 0 auto;
  width: 92vw;
  font-family: "Pretendard";
`;

const Relay = styled.div`
  display: flex;
  border-bottom: 3px solid black;
`;

const RelayTxt = styled.p`
  font-size: 1.4rem;
  font-weight: bolder;
`;

const Btn = styled.button`
  color: white;
  background-color: black;
  width: 80px;
  height: 40px;
  white-space: nowrap;
  font-size: 1rem;
  margin: auto 0px 10px auto;
  cursor: pointer;
`;

const Box = styled.div`
  width: 100%;
  border-radius: 10px;
  height: 250px;
`;

const FlexBox = styled.div`
  display: flex;
  margin-top: 40px;
`;

const Title = styled.input`
  border: none;
  outline: none;
  background-color: #f2f2f2;
  font-family: "Pretendard";
  font-size: 1.1rem;
  width: 55vw;
  height: 50px;
  padding-left: 20px;
`;

const Select = styled.select`
  border-radius: 10px;
  font-family: "Pretendard";
  width: 180px;
  height: 30px;
  margin-left: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const Contents = styled.textarea`
  border: none;
  outline: none;
  resize: none;
  background-color: #f2f2f2;
  font-family: "Pretendard";
  margin-top: 30px;
  font-size: 1.1rem;
  width: 90vw;
  padding: 20px;
  height: 250px;
`;

const Count = styled.div`
  margin: auto 10px 20px auto;
  width: 90px;
  color: #646464;
  padding-right: 0px;
  font-size: 1rem;
  margin-top: -40px;
`;

const PostRelay = () => {
  const [inputCount, setInputCount] = useState(0);

  const onInputHandler = (e) => {
    setInputCount(e.target.value.length);
  };

  return (
    <Wrapper>
      <Relay>
        <RelayTxt>소감 릴레이</RelayTxt>
        <Btn>업로드</Btn>
      </Relay>
      <Box>
        <form>
          <FlexBox>
            <Title type="text" placeholder="제목을 입력해주세요." />
            <Select>
              <option>챌린지 선택</option>
            </Select>
          </FlexBox>
          <div>
            <Contents
              id="input_contents"
              placeholder="내용을 입력해주세요."
              maxlength="255"
              onChange={onInputHandler}
            />
            <Count>
              <span>{inputCount}</span>
              <span>/255 자</span>
            </Count>
          </div>
        </form>
      </Box>
    </Wrapper>
  );
};

export default PostRelay;
