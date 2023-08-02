import styled from "styled-components";
import MyProfile from "../components/ProfileAndContracts/MyProfile";
import OngoingContracts from "../components/ProfileAndContracts/OngoingContracts";
import CompletedContracts from "../components/ProfileAndContracts/CompletedContracts";

const StyledBody = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
`;

const ProfileAndContractsPage = () => {
  return (
    <>
      <StyledBody>
        <div>마이페이지</div> {/* "마이페이지" 글씨 추가 */}
      </StyledBody>
      <MyProfile />
      <OngoingContracts />
      <CompletedContracts />
    </>
  );
};

export default ProfileAndContractsPage;
