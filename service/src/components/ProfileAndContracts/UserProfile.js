import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SavedPosts from "../ProfileAndContracts/SavedPosts";

const UserProfileContainer = styled.div`
  width: 300px;
  height: 667px;
  border: 1px solid #BCBCBC;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileInfo = styled.div`
  padding: 20px;
  text-align: center;
`;

const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const NoProfilePicture = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #CCCCCC;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
`;

const LevelText = styled.p`
  font-weight: bold;
  margin-top: 10px; /* Adjust the margin to give space between bio and level */
`;

const UserProfile = ({ avatar, userInfo, level }) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    // 내 정보 수정 페이지로 이동
    navigate("/InformationModificationPage"); // 원하는 페이지 경로로 수정
  };

  const { name = "이름 없음", username = "아이디 없음", bio = "자기소개 없음" } = userInfo || "";
  const avatarSrc = avatar || "";

  return (
    <UserProfileContainer>
      {avatarSrc ? (
        <ProfilePicture src={avatarSrc} alt="프로필 사진" />
      ) : (
        <NoProfilePicture>👤</NoProfilePicture>
      )}
      <ProfileInfo>
        <p>{name}</p>
        <p>아이디: {username}</p>
        <p>자기소개: {bio}</p>
        {level && <LevelText>레벨: {level}</LevelText>}
      </ProfileInfo>
      <SavedPosts />
      <div onClick={handleEditClick}>내 정보 수정</div>
    </UserProfileContainer>
  );
};

export default UserProfile;
