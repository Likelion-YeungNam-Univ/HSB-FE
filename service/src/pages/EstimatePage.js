import styled from "styled-components"
import EstimateHead from "../components/estimates/EstimateHead";
import EstimateBody from "../components/estimates/EstimateBody";
import BidList from "../components/estimates/BidList";
import OfferBid from "../components/estimates/OfferBid";


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