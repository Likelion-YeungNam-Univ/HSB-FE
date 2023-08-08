import React from "react";
import styled from "styled-components";

const ConfirmationBox = styled.div`
  width: 650px;
  height: 185px;
  background-color: #fff;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

const ConfirmationText = styled.p`
  font-size: 18px;
  text-align: center;
`;

const CloseButton = styled.button`
  background-color: #95DDFF;
  color: #212121;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 10px;
  width: 103px;
  height: 43px;
  font-size: 18px;
  border-radius: 5px;
`;

const NoteSentConfirmation = ({ onClose }) => {
  return (
    <ConfirmationBox>
      <ConfirmationText>쪽지를 성공적으로 보냈습니다.</ConfirmationText>
      <CloseButton onClick={onClose}>확인</CloseButton>
    </ConfirmationBox>
  )
}

export default NoteSentConfirmation;
