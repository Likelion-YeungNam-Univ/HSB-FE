import styled from "styled-components";
import {AiOutlineSmile, AiOutlineSend} from "react-icons/ai"
import {Link, useNavigate} from "react-router-dom"
import { useCallback, useState } from "react";

const StyledList = styled.div`
    border: 1px solid;
    width: 940px;   
    display: flex;
    flex-direction: column;
`;
const StyledUser = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const StyledIcon = styled.span`
    height: 70px;
    width: 80px;
    color: #95DDFF;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const StyledBidState = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const StyledListHead = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;
const StyledBidStateP = styled.p`
    margin: 0px;
`;
const StyledBody = styled.p`
    padding: 0px 20px 20px 20px;
    margin: 0px;
`;
const StyledDiv = styled.div`
    display: flex;
`;
const StyledSendIcon = styled.button`
    font-size: 1.8rem;
    padding: 20px;
    background-color: transparent;
    border: none;
`;


const BidListItem = ({offer_id, user_id, user_name, price, content, status}) => {

    const state = [
        "미정",
        "계약 진행중",
        "견적 종료"
    ]

    const navigate = useNavigate();

    const navigateToNote = () => {
        navigate('/sendNotePage');
    };
    
    return(
        <>
            <StyledList>

                <StyledListHead>
                    <StyledDiv>
                        <StyledIcon>
                            <AiOutlineSmile/>
                        </StyledIcon>
                        <StyledUser>
                            <Link to="/BidProposalMemberInfoPage">Level.{user_id} {user_name}</Link>
                            <p>입찰 제안 가격: {price}원</p>
                        </StyledUser>
                    </StyledDiv>

                
                    <StyledDiv>
                        <StyledBidState>
                            <StyledBidStateP>계약 현황</StyledBidStateP>
                            <button>{state[status]}</button>
                        </StyledBidState>
                        <StyledSendIcon onClick={navigateToNote}><AiOutlineSend/></StyledSendIcon>
                    </StyledDiv>
                </StyledListHead>


                <StyledBody>{content}</StyledBody>


            </StyledList>
        </>
    )
}

export default BidListItem;