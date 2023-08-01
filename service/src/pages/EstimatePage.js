import styled from "styled-components"
import EstimateHead from "../components/Estimates/EstimateHead";
import EstimateBody from "../components/Estimates/EstimateBody";
import BidList from "../components/Estimates/BidList";
import OfferBid from "../components/Estimates/OfferBid";


const EstimatePage = () =>{
    const StyledEstimatePage = styled.div`
        display: flex;
        flex-direction: column;
    `;
    const StyledBody = styled.div`
        display: flex;
        justify-content: center;
    `;

    return(
        <StyledEstimatePage>

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