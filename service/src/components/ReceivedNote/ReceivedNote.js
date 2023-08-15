import React, { useState } from "react";
import styled from "styled-components";

const ReceivedNoteContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const SenderName = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const ReceivedTime = styled.p` 
  font-size: 16px;
  margin-bottom: 10px;
`;

const NoteContent = styled.div`
  padding: 5px;
  width: 940px;
  height: 526px;
  border: 1px solid #BCBCBC;
`;

const NoteActions = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
  align-items: center;
`;

const DeleteButton = styled.button`
  background-color: #FF9494;
  color: #212121;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 10px;
`;

const ReplyButton = styled.button`
  background-color: #95DDFF;
  color: #212121;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

const Divider = styled.div`
  border-top: 1px solid #BCBCBC;
  margin: 10px 0;
`;

const ReceivedNote = ({ sender, content, receivedTime, onReply }) => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteConfirmation(true);
  };

  const handleCloseConfirmation = () => {
    setShowDeleteConfirmation(false);
  };

  const handleConfirmDelete = () => {
    console.log("쪽지 삭제됨:", content);
    setShowDeleteConfirmation(false);
  };

  const handleReplyClick = () => {
    onReply(sender);
  };

  return (
    <ReceivedNoteContainer>
      <NoteActions>
        <DeleteButton onClick={handleDeleteClick}>삭제</DeleteButton>
        <ReplyButton onClick={handleReplyClick}>답장</ReplyButton>
      </NoteActions>
      {showDeleteConfirmation && (
        <div>
          <p>정말로 삭제하시겠습니까?</p>
          <button onClick={handleConfirmDelete}>예</button>
          <button onClick={handleCloseConfirmation}>아니오</button>
        </div>
      )}
      <Divider />
      <SenderName>보낸 사람: {sender}</SenderName>
      <ReceivedTime>받은 시간: {receivedTime}</ReceivedTime>
      <NoteContent>{content}</NoteContent>
    </ReceivedNoteContainer>
  )
}

export default ReceivedNote;
