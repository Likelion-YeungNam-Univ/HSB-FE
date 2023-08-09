import styled from "styled-components";
import BidListItem from "./BidListItem";

const StyledTitle = styled.p`
    font-size: 1.35rem;
    padding-left:395px;
    margin: 20px 0px 0px 0px;
`;
const StyledBidList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BidList = ({requests}) => {
    
    return(
        <>
            <StyledTitle>입찰 제안 목록</StyledTitle>
            
            <StyledBidList>
                {requests.map((request) => {
                    return (
                    <BidListItem id={request.id}/>
                )})}
            </StyledBidList>
        </>
    )
}

export default BidList;