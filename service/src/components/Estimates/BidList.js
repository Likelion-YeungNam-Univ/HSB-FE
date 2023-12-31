import styled from "styled-components";
import BidListItem from "./BidListItem";

const StyledCenter = styled.div`
    display: flex;
    justify-content: center;
`;
const StyledDirection = styled.div`
    display: flex;
    flex-direction: column;
`;
const StyledTitle = styled.p`
    font-size: 1.35rem;
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
        <StyledCenter>
        <StyledDirection>
        
            <StyledTitle>입찰 제안 목록</StyledTitle>
            
            <StyledBidList>
                {requests.map((request) => {
                    return (
                    <BidListItem offer_id={request.offer_id} user_id = {request.user.user_id} user_name = {request.user.user_name} price={request.price} content={request.content} status={request.status}/>
                )})}
            </StyledBidList>

        </StyledDirection>
        </StyledCenter>
        </>
    )
}

export default BidList;