import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SendNote from "../components/SendNote/SendNote"; 

const SendNotePageContainer = styled.div`
  max-width: 1200px;
  margin: 354px auto 0;
`;

const PageTitle = styled.h1`
  font-size: 30px;
  margin-bottom: 0;
  color: #95DDFF;
  margin-left: 20px;
`;

const SendNotePage = () => {
  return (
    <SendNotePageContainer>
      <Header />
      <PageTitle>쪽지쓰기</PageTitle>
      <SendNote /> 
      <Footer />
    </SendNotePageContainer>
  )
}

export default SendNotePage;


