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
 width: 940px;
 height: 526px;
 border: 1px solid #BCBCBC;
`;

const SendButton = styled.button`
  background-color: #95DDFF;
  color: #212121;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  align-self: flex-start;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const SearchButton = styled.button`
  background-color: #95ddff;
  color: #212121;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

const SearchInput = styled.input`
  padding: 5px;
`;

const Divider = styled.div`
  border-top: 1px solid #BCBCBC;
  margin: 3px 0;
`;

const SendNote = () => {
  const [receiver, setReceiver] = useState("");
  const [content, setContent] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false); // 추가

  const handleSubmit = (event) => {
    event.preventDefault();

    if (receiver.trim() === "") {
      window.alert("받는 사람을 입력해 주세요.");
      return;
    }

    if (content.trim() === "") {
      // 쪽지 내용이 비어있는 경우 경고 팝업창 표시
      window.alert("쪽지 내용을 입력해주세요.");
      return;
    }

    // 쪽지 보내기 로직 구현
    console.log("Sending note to:", receiver);
    console.log("Content:", content);

    // 보내기 완료 후 안내 메시지를 경고창으로 표시
    window.alert("쪽지를 성공적으로 보냈습니다.");

    // 입력 필드 초기화
    setReceiver("");
    setContent("");
  };

  const handleSearchClick = () => {
    // 검색 버튼 클릭 시 아이디로 받는 사람 설정
    // 여기서는 예시로 간단하게 받는 사람을 설정해둠.
    setReceiver("검색한_아이디");
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
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
        <SearchButton onClick={handleSearchClick}>검색</SearchButton>
      </SearchContainer>
      <NoteForm onSubmit={handleSubmit}>
        <Divider />
        <SendButton type="submit">보내기</SendButton>
        <Divider />
        <ReceiverName>받는 사람: {receiver}</ReceiverName>
        <TextArea
          placeholder="말문희막힘"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </NoteForm>
    </SendNoteContainer>
  )
}

export default SendNote;