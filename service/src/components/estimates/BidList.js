import styled from "styled-components";
import BidListItem from "./BidListItem";


const BidList = () => {
    const StyledTitle = styled.p`
        font-size: 1.35rem;
        padding-left:395px;
    `;
    const StyledBidList = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `;

    return(
        <>
            <StyledTitle>입찰 제안 목록</StyledTitle>
            
            <StyledBidList>
                <BidListItem/>
            </StyledBidList>
        </>
    )
}

export default BidList;