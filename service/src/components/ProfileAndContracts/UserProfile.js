import React from "react";
import styled from "styled-components";
import SavedPosts from "../ProfileAndContracts/SavedPosts";


const UserProfileContainer = styled.div`
  width: 387px;
  height: 667px;
  border: 1px solid #BCBCBC;
`;

const ProfileInfo = styled.div`
  padding: 20px;
`;

const ProfilePicture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const UserProfile = ({ avatar, userInfo }) => {
  // avatar가 존재하지 않는 경우에 대한 처리
  const avatarSrc = avatar ? avatar : ""; 

  // userInfo의 속성이 존재하지 않는 경우에 대한 처리
  const { name, username, bio } = userInfo || {};

  return (
    <UserProfileContainer>
      <ProfilePicture src={avatarSrc} alt="Profile Picture" />
      <ProfileInfo>
        <h2>{name ? name : "이름 없음"}</h2>
        <p>아이디: {username ? username : "아이디 없음"}</p>
        <p>자기소개: {bio ? bio : "자기소개 없음"}</p>
      </ProfileInfo>
      <SavedPosts/>
      내 정보 수정 자리
    </UserProfileContainer>
  )
}

export default UserProfile;





