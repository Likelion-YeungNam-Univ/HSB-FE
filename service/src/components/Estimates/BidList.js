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
    
{/* 이거 사용자가 쓰는 데이터인데?? estimate_id={request.estimate_id} level = {request.user_info.level} user_name={request.user_info.user_name}*/}

    return(
        <>
        <StyledCenter>
        <StyledDirection>
        
            <StyledTitle>입찰 제안 목록</StyledTitle>
            
            <StyledBidList>
                {requests.map((request) => {
                    return (
                    <BidListItem estimate_id={request.estimate_id}/>
                )})}
            </StyledBidList>

        </StyledDirection>
        </StyledCenter>
        </>
    )
}

export default BidList;