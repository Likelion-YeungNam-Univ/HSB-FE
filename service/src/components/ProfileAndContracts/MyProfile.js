import React, { useState } from "react";
import styled from "styled-components";

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const MyProfile = () => {
 
  const [user, setUser] = useState({
    profileImage: "https://example.com/profile-image.jpg", // 사용자 프로필 이미지 URL
    name: "나문희",
    level: "Gold",
    aboutMe: "반가워요~",
    
  });

  const handleAboutMeChange = (e) => {
    setUser({
      ...user,
      aboutMe: e.target.value,
    });
  };

  return (
    <StyledProfile>
      <h2>프로필</h2>
      <ProfileImage src={user.profileImage} alt="프로필 이미지" />
      <div>
        <strong>이름: </strong> {user.name}
      </div>
      <div>
        <strong>레벨: </strong> {user.level}
      </div>
      <div>
        <strong>자기소개: </strong>{" "}
        <input
          type="text"
          value={user.aboutMe}
          onChange={handleAboutMeChange}
        />
      </div>
      <button>내 정보 수정</button>
      
    </StyledProfile>
  );
}

export default MyProfile;

