import styled from "styled-components"
import Nav from "../components/Nav";
import EstimateHead from "../components/Estimates/EstimateHead";
import EstimateBody from "../components/Estimates/EstimateBody";
import BidList from "../components/Estimates/BidList";
import OfferBid from "../components/Estimates/OfferBid";


const EstimatePage = () =>{
    const StyledEstimatePage = styled.div`
        display: flex;
        flex-direction: column;
    `;
    const StyledNav = styled.div`
        display: flex;
        flex-direction: row;
    `;
    const StyledBody = styled.div`
        display: flex;
        justify-content: center;
    `;

    return(
        <StyledEstimatePage>
            <StyledNav>
                <Nav/>
            </StyledNav>

            <StyledBody>
                <EstimateHead/>
                <EstimateBody/>
            </StyledBody>

            <BidList/>
            <OfferBid/>

            
        </StyledEstimatePage>
    )
}

export default EstimatePage;