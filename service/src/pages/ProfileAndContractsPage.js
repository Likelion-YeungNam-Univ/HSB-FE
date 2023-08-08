import styled from "styled-components"
import CompletedContracts from "../components/ProfileAndContracts/CompletedContracts";
import OngoingContracts from "../components/ProfileAndContracts/OngoingContracts";
import UserProfile from "../components/ProfileAndContracts/UserProfile";
import SavedPosts from "../components/ProfileAndContracts/SavedPosts";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProfilePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContractsContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 50px;
`;

const Title = styled.h1`
 font-size: 30px;
 color: #95DDFF;
 text-align: center;
 margin-right: 10px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start; 
  margin-left: 535px;
`;

const ProfileAndContractsPage = () =>{
 
    return (
      <ProfilePageContainer>
        <Header/>
        <TitleContainer>
        <Title>마이페이지</Title>
        </TitleContainer>
        <ContractsContainer>
        {/* UserProfile 컴포넌트를 여기에 렌더링 */}
        <UserProfile />
  
        {/* OngoingContracts 컴포넌트를 여기에 렌더링 */}
        <OngoingContracts />
  
        {/* CompletedContracts 컴포넌트를 여기에 렌더링 */}
        <CompletedContracts />
        </ContractsContainer>
        <Footer/>
      </ProfilePageContainer>
    )
}


export default ProfileAndContractsPage;