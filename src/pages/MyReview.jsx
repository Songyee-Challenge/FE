import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  padding-top: 37px;
  font-family: "Pretendard";
`;

const Review = styled.div`
  font-size: 1.4rem;
  border-bottom: 6px solid black;
  font-weight: bolder;
  height: 45px;
  width: 160px;
`;

const ReviewBox = styled.div`
  border-top: 1px solid black;
  width: 75vw;
  display: flex;
  margin-bottom: 30px;
`;

const Container = styled.div`
  border-radius: 10px;
  box-shadow: 0cm 0.1cm 0.05cm 0.05cm #dddddd;
  width: 65vw;
  margin-top: 60px;
`;

const Date = styled.p`
  font-family: "Dongle-regular", sans-serif;
  font-size: 2rem;
  font-weight: 900;
  margin-left: 30px;
  margin-bottom: 5px;
  padding-top: 20px;
`;

const TxtDiv = styled.div`
  width: 100%;
  border-top: 0.01cm solid #dddddd;
  display: flex;
`;

const Txt = styled.textarea`
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0px 30px;
  resize: none;
  width: 100%;
  border-top: 0.01cm solid #dddddd;
  border: none;
  outline: none;
  resize: none;
  font-family: "Pretendard";
  padding-top: 30px;
`;

const BtnBox = styled.div`
  margin: 100px 50px 20px auto;
  display: flex;
  gap: 30px;
`;

const Btn = styled.button`
  font-size: 1.1rem;
  border: 2px solid black;
  background-color: white;
  width: 75px;
  height: 45px;
  font-weight: bolder;
  cursor: pointer;
`;

const Num = styled.p`
  font-family: "Dongle-regular", sans-serif;
  font-size: 2rem;
  font-weight: 900;
  margin: 20px 50px;
  white-space: nowrap;
`;

const MyReview = () => {
  const [reviews, setReviews] = useState([]);
  let ACCESS_TOKEN = localStorage.getItem("accessToken");

  const getReview = () => {
    axios
      .get("/api/v1/mypage/review", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      })
      .then((response) => {
        console.log(response);
        setReviews(response.data);
      });
  };

  useEffect(() => {
    getReview();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("삭제하시겠습니까?")) {
      axios
        .delete(`/api/v1/mypage/review/delete/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error("삭제 실패", error);
        });
    }
  };

  const handleEdit = () => {
    alert("변경사항이 저장되었습니다.");
  };

  return (
    <Wrapper>
      <Review>챌린지 소감</Review>
      <ReviewBox>
        <div>
          {reviews.map((review) => (
            <Container key={review.review_id}>
              <Date>{review.writtenDate}</Date>
              <TxtDiv>
                <Txt value={review.content}></Txt>
                <BtnBox>
                  <Btn onClick={handleEdit}>수정</Btn>
                  <Btn onClick={() => handleDelete(review.review_id)}>삭제</Btn>
                </BtnBox>
              </TxtDiv>
            </Container>
          ))}
        </div>
        <Num>총 {reviews.length}개</Num>
      </ReviewBox>
    </Wrapper>
  );
};

export default MyReview;
