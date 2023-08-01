import styled from "styled-components";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Profile from "../components/Profile";
import OngoingContracts from "../components/OngoingContracts";
import CompletedContracts from "../components/CompletedContracts";
import Footer from "../components/Footer";

const StyledBody = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProfileAndContractsPage = () => {
  return (
    <>
      <Nav />
      <Head />

      <StyledBody>
        <Profile />
        <OngoingContracts />
        <CompletedContracts />
      </StyledBody>

      <Footer />
    </>
  );
};

export default ProfileAndContractsPage;
