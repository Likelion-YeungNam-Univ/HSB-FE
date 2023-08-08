import styled from "styled-components";
import BidProposalMemberProfileBox from "../components/BidProposalMemberInfo/BidProposalMemberProfileBox";
import QuoteRequestBox from "../components/BidProposalMemberInfo/QuoteRequestBox";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const BidProposalMemberInfoPage = () => {
  const Container = styled.div`
  display: flex;
  justify-content: center; 
  gap: 20px; 
  padding: 0 250px; 
  `;

return (
    <Container>
      <Header/>
      <Nav/>
      <BidProposalMemberProfileBox />
      <QuoteRequestBox />
      <Footer/>
    </Container>
  )
}

export default BidProposalMemberInfoPage;
