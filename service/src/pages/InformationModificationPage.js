import React, { useState } from "react";
import styled from "styled-components";
import InformationModification from "../components/InformationModification/InformationModification";
import Header from "../components/Header";
import Footer from "../components/Footer";

const InformationModificationPage = () => {
  const [userAvatar, setUserAvatar] = useState(null);
  const [userInfo, setUserInfo] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
    bio: "",
  });

  const Container = styled.div`
    max-width: 1199px;
    max-height: 720px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #FFFFFF;
    border-radius: 0;
    position: relative;
  `;

  const Title = styled.h1`
    font-size: 30px;
    color: #95DDFF;
    text-align: center;
    margin-right: 950px;
  `;

  const handleAvatarChange = (avatar) => {
    setUserAvatar(avatar);
  };

  const handleUserInfoChange = (e) => {
    const { id, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [id]: value,
    }));
  };

  return (
    <>
    <Header/>

    <Container>
      <Title>내 정보 수정</Title>
      <InformationModification
        userAvatar={userAvatar}
        onAvatarChange={handleAvatarChange}
        onUserInfoChange={handleUserInfoChange}
      />
    </Container>
    
    <Footer/>
    </>
  )
}

export default InformationModificationPage;