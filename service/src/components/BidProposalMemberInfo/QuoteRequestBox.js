import React from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import {Link} from "react-router-dom";

const QuoteRequestBox = () => {
  const Container = styled.div`
   background-color: #fff;
   padding: 10px;
   border: 1px solid #000; 
   border-radius: 0;
   margin-bottom: 100px; 
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   width: 387px;
   height: 441px; 
  `;

  const Description = styled.p`
   font-size: 16px;
   margin-bottom: 20px;
   `;

  const HeartIcon = styled(AiFillHeart)`
   font-size: 41px;
   color: white;
   cursor: pointer;
   
   `;

  const HeartIconBackground = styled.div`
   background-color: #444444;
   border-radius: 12px;
   padding: 5px;
   margin-right: 10px;
   width: 52px;
   height: 52px;
  
   `;

  const RequestButton = styled.button`
   background-color: #95DDFF; 
   color: #000; 
   border: none;
   padding: 10px 50px;
   border-radius: 8px; 
   cursor: pointer;
   width: 235px;
   height: 52px;
   font-size: 20px;
   `;

  const ButtonWrapper = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 10px;
   `;
  
  const Divider = styled.div`
   border-bottom: 1px solid #ccc;
   width: 100%;
   margin-top: 30px;
   margin-bottom: 20px;
   `;
 
   // const handleHeartClick = () => {
   // setIsLiked(!isLiked);
    //찜 목록에 추가하는 로직을 작성해야함onClick={handleHeartClick}
 // };

  return (
    <Container>
      <Description>
        000님에게 원하는 영상의 자막 제작 견적을 받아보세요.
      </Description>
      <ButtonWrapper>
      <HeartIconBackground>
      <HeartIcon />
      </HeartIconBackground>
      <Link to="/MainPage">
        <RequestButton>견적요청</RequestButton>
        </Link>
        </ButtonWrapper>
        <Divider /><p>평균 2일 내에 응답하는 회원입니다.</p>
    </Container>
  );
};

export default QuoteRequestBox;
