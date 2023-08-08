import React, { useState } from "react";
import styled from "styled-components";

const SendNoteContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const ReceiverName = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const NoteForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TextArea = styled.textarea`
 padding: 5px;
 width: 1160px;
 height: 526px;
 border: 1px solid #BCBCBC;
`;

const SendButton = styled.button`
  background-color: #95DDFF;
  color: #212121;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  align-self: flex-end; 
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const SearchInput = styled.input`
  padding: 5px;
`;

const SendNote = () => {
  const [receiver, setReceiver] = useState("");
  const [content, setContent] = useState(""); 

  const handleSubmit = (event) => {
    event.preventDefault();
    // 쪽지 보내기 로직 구현
    console.log("Sending note to:", receiver);
    console.log("Content:", content);
  };

  const handleSearchClick = () => {
    // 검색 버튼 클릭 시 아이디로 받는 사람 설정
    // 여기서는 예시로 간단하게 받는 사람을 설정하도록 했습니다.
    setReceiver("검색한_아이디");
  };

  return (
    <SendNoteContainer>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="아이디 검색"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
        />
        <SendButton onClick={handleSearchClick}>검색</SendButton>
      </SearchContainer>
      <NoteForm onSubmit={handleSubmit}>
        <ReceiverName>받는 사람: {receiver}</ReceiverName>
        <TextArea
          placeholder="말문희막힘"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <SendButton type="submit">보내기</SendButton>
      </NoteForm>
    </SendNoteContainer>
  )
}

export default SendNote;



