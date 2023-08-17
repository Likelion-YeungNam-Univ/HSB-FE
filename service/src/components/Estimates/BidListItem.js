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


const BidListItem = ({estimate_id}) => {
    {/*const [id, price, content] = request;*/}

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
                            <Link to="/BidProposalMemberInfoPage">Level.15 나문희{estimate_id}</Link>
                            <p>입찰 제안 가격: {'price'}원</p>
                        </StyledUser>
                    </StyledDiv>

                
                    <StyledDiv>
                        <StyledBidState>
                            <StyledBidStateP>계약 현황</StyledBidStateP>
                            <button>미정</button>
                        </StyledBidState>
                        <StyledSendIcon onClick={navigateToNote}><AiOutlineSend/></StyledSendIcon>
                    </StyledDiv>
                </StyledListHead>


                <StyledBody>안녕하세요 나문희입니다. 온라인 방송 통역은 이러한 기술과 이러한 서비스를 제공하기 때문에 입찰 제안 가격을 30,000
                    원으로 책정하였습니다. 믿고 맡겨 주세요!{'content'}</StyledBody>


            </StyledList>
        </>
    )
}

export default BidListItem;