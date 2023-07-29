import styled from "styled-components"
import Nav from "../components/Nav";


const EstimatePage = () =>{
    const StyledBody = styled.div`
        display: flex;
        flex-direction: row;
    `;

    return(
        <>
            <Nav/>
{/* 
            <StyledBody>
                <EstimateHead/>
                <EstimateBody/>
            </StyledBody>

            <BidList/>
            <OfferBid/>

            <Footer/>*/}
        </>
    )
}

export default EstimatePage;