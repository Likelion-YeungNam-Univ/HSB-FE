import React, { useState } from "react";
import styled from "styled-components";

const InformationModification = ({ userAvatar, onAvatarChange }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [bio, setBio] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordMismatch(false);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordMismatch(false);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleSaveChanges = async () => {
    if (password !== confirmPassword) {
      setPasswordMismatch(true);
      return;
    }

    // API 호출 (이 부분에 백엔드 통신 코드 추가)
    try {
      const response = await fetch("API_URL_HERE", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          password,
          bio,
        }),
      });

      if (response.ok) {
        console.log("Changes saved successfully");
        // 여기에서 원하는 동작 수행 (예: 정보 업데이트, 페이지 이동 등)
      } else {
        console.error("Failed to save changes");
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
          <Input 
          type="password" 
          id="password" 
          value={password} 
          onChange={handlePasswordChange} 
          />
        </Row>
        {passwordMismatch && (
          <MismatchMessage>비밀번호가 일치하지 않습니다.</MismatchMessage>
        )}
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
  max-width: 940px;
  max-height: 725px;
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
 align-items: center; 
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
  margin-right: 50px;
  margin-bottom: 7px;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const MismatchMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: -10px;
  margin-bottom: -5px;
`;

export default InformationModification;

//api호출코드 추가 후 실제로 변경사항을 서버에 저장하는 로직을 구현