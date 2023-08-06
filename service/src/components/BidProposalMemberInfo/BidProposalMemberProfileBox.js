import React from "react";
import styled from "styled-components";
import { AiOutlineSend } from "react-icons/ai";
import { Link } from "react-router-dom"; 

const StyledBidProposalMemberProfileBox = styled.div`
background-color: #fff;
padding: 10px;
border: 1px solid #000; 
border-radius: 0;
margin-bottom: 100px; 
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
max-height: 441px; 
position: relative;
width: 794px;
`;

const ProfilePicture = styled.img`
width: 100px;
height: 100px;
border-radius: 0;
position: absolute;
top: 10px;
left: 10px;
`;

const SendButton = styled.button`
position: absolute; 
top: 10px; 
right: 10px; 
`;

const ProfileInfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

const ProfileName = styled.p`
  font-size: 15px;
`;

const ProfileLevel = styled.p`
  font-size: 16px;
  font-color: #87ceeb; 
`;

const LevelBar = styled.div``

const ContractsReviewsDurationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  align-items: center;
`;

const ContractBox = styled.div`
  background-color: #f2f2f2;
  border-radius: 0;
  padding: 50px;
  
  text-align: center;
  margin-top: 5px;
  margin-bottom: 20px;
  max-width: 200px;
  max-height: 70px;
`;

const ReviewBox = styled.div`
  background-color: #f2f2f2;
  border-radius: 0;
  padding: 50px;
  
  text-align: center;
  margin-top: 5px;
  margin-bottom: 20px;
  max-width: 200px;
  max-height: 70px;
`;

const DurationBox = styled.div`
  background-color: #f2f2f2;
  border-radius: 0;
  padding: 50px;
  
  text-align: center;
  margin-top: 5px;
  margin-bottom: 20px;
  max-width: 200px;
  max-height: 70px;
  `;

const ReviewButton = styled.button`
`;

// 임시로 해둠
const BidProposalMemberProfileBox = () => {
    const profileData = {
      profilePicture: "프로필사진주소",
      name: "말문희막힘",
      level: "level15",
      introduction: "안녕하세요~!말문희막힘입니다. 000자격증이 있는 온라인 방송 통역 전문가 입니다.",
    };
  
    const contractData = {
      contractCount: 18,
      averageRating: 4.8,
      joinDuration: "1년",
    };
  
    return (
        <StyledBidProposalMemberProfileBox>
          <ProfilePicture src={profileData.profilePicture} alt="프로필사진" />
          <SendButton to="/SendNotePage">
            <AiOutlineSend />
          </SendButton>
          <ProfileInfoContainer>
            <ProfileName>{profileData.name}</ProfileName>
            <ProfileLevel>{profileData.level}</ProfileLevel>
            <LevelBar>{/* 레벨 게이지 바를 표시하는 부분 */}</LevelBar>
          </ProfileInfoContainer>
          <p>{profileData.introduction}</p>
          <ContractsReviewsDurationWrapper>
            <ContractBox>
              <p>계약 횟수: {contractData.contractCount}</p>
            </ContractBox>
            <ReviewBox>
              <Link to="/ReviewPage">
                <ReviewButton>리뷰 보기</ReviewButton>
              </Link>
              <p>리뷰 평균 별점: {contractData.averageRating}</p>
            </ReviewBox>
            <DurationBox>
              <p>가입 기간: {contractData.joinDuration}</p>
            </DurationBox>
          </ContractsReviewsDurationWrapper>
        </StyledBidProposalMemberProfileBox>
      );
    };
    
    export default BidProposalMemberProfileBox;