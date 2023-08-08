import React, { useState } from "react";
import styled from "styled-components";

const InformationModification = ({ userAvatar, onAvatarChange }) => {
  // 이렇게 만들어도 괜찮은 걸까요
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [bio, setBio] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleSaveChanges = () => {
     // API 호출 (이 부분에 백엔드 통신 코드 추가)
  };

  const handleAvatarClick = () => {
    
    document.getElementById("profilePictureInput").click();
  };

  return (
    <Container>
      <Form>
        <Row>
        <ProfilePictureBox onClick={handleAvatarClick}>
          <ProfilePicture src={userAvatar} />
          <input
            type="file"
            id="profilePictureInput"
            onChange={onAvatarChange}
            style={{ display: "none" }}
          />
        </ProfilePictureBox>
        </Row>
        <Row>
          <Label htmlFor="name">이름</Label>
          <Input type="text" id="name" value={name} onChange={handleNameChange} />
        </Row>
        <Row>
          <Label htmlFor="username">아이디</Label>
          <Input type="text" id="username" value={username} onChange={handleUsernameChange} />
        </Row>
        <Row>
          <Label htmlFor="password">비밀번호</Label>
          <Input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </Row>
        <Row>
          <Label htmlFor="confirmPassword">비밀번호 확인</Label>
          <Input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </Row>
        <Row>
          <Label htmlFor="bio">자기소개</Label>
          <Textarea id="bio" value={bio} onChange={handleBioChange} />
        </Row>
      </Form>
      <FloatingSaveButton onClick={handleSaveChanges}>변경사항 저장</FloatingSaveButton>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1199px;
  max-height: 720px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #BCBCBC;
  border-radius: 0;
  position: relative;
`;

const Form = styled.form`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 width: 100%; 
 height: 100%;
`;

const Row = styled.div`
 display: flex;
 flex-direction: column;
 margin-bottom: 15px;
 max-width: 800px;
`;

const Input = styled.input`
 width: 100%;
 padding: 5px;
 border: 1px solid #AEAEAE;
 border-radius: 0;
 font-size: 14px;
 width: 800px;
 height: 36px;

`;

const Textarea = styled.textarea`
 width: 100%;
 padding: 5px;
 border: 1px solid #AEAEAE;
 border-radius: 0;
 font-size: 14px;
 width: 800px;
 height: 131px;
 margin-bottom: 20px;

 resize: vertical;
`;

const Label = styled.label`
 font-size: 15px;
 text-align: left;
 margin-bottom: 5px;
`;

const ProfilePictureBox = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid #AEAEAE;
  border-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;

  &:hover {
    border-color: #95DDFF;
  }
`;

const ProfilePicture = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const FloatingSaveButton = styled.button`
 display: block;
 width: 100%;
 padding: 10px;
 background-color: #95DDFF;
 color: #212121;
 border: none;
 border-radius: 5px;
 cursor: pointer;
 max-width: 170px;
 max-height: 40px;
 margin-top: 10px;
 margin-left: auto;
 margin-right: auto;
 display: block;
 float: right;
 position: absolute;
 right: 200px; 
 bottom: 7px;

  &:hover {
  background-color: #0056b3;
 }

`;

export default InformationModification;