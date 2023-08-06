import styled from "styled-components";
import BidProposalMemberProfileBox from "../components/BidProposalMemberInfo/BidProposalMemberProfileBox";
import QuoteRequestBox from "../components/BidProposalMemberInfo/QuoteRequestBox";

const BidProposalMemberInfoPage = () => {
  const Container = styled.div`
  display: flex;
  justify-content: center; 
  gap: 20px; 
  padding: 0 250px; 
  `;

return (
    <Container>
      <BidProposalMemberProfileBox />
      <QuoteRequestBox />
    </Container>
  )
}

export default BidProposalMemberInfoPage;
