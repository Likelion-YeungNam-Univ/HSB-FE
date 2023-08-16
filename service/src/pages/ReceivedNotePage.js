import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReceivedNote from "../components/ReceivedNote/ReceivedNote";
import { useNavigate } from "react-router-dom"; 

const ReceivedNotesContainer = styled.div`
  max-width: 1000px;
  margin: 20px auto 0;
`;

const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 0;
  color: #95DDFF;
  margin-left: 20px;
`;

const ReceivedNotesPage = () => {
  const navigate = useNavigate(); 

  const noteData = {
    sender: "보낸이 이름",
    content: "말문희막힘 쪽지 내용입니다!",
    receivedTime: "2023-08-06 10:00",
  };

  const handleReplyClick = () => {
    navigate("/SendNotePage"); 
  };

  return (
    <>
      <Header />

      <ReceivedNotesContainer>
        <Title>받은 쪽지</Title>
        <ReceivedNote
          sender={noteData.sender}
          content={noteData.content}
          receivedTime={noteData.receivedTime}
          onReply={handleReplyClick}
        />
      </ReceivedNotesContainer>

      <Footer />
    </>
  )
}

export default ReceivedNotesPage;

