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
    max-width: 100%;
    max-height: 100%;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #FFFFFF;
    border-radius: 0;
    position: relative;
    min-height: 75vh;
  `;

  const Title = styled.h1`
    font-size: 30px;
    color: #95DDFF;
    margin-left: 525px;
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