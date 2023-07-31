import styled from "styled-components";
import {AiOutlineSmile} from "react-icons/ai"
import {Link} from "react-router-dom"


const BidListItem = () => {
    const StyledList = styled.div`
        border: 1px solid;
        width: 700px;   
        display: flex;
        flex-direction: column;
    `;
    const StyledUsers = styled.div`
        display: flex;
    `;
    const StyledUser = styled.div`
        display: flex;
        flex-direction: column;
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
        justify-content: space-around;
    `;
    const StyledBidStateP = styled.p`
        margin: 0px;
    `;
    const StyledBody = styled.p`
        padding: 20px;
        margin: 0px;
    `;

    return(
        <>
            <StyledList>

                <StyledListHead>
                    <StyledUsers>
                        <StyledIcon>
                            <AiOutlineSmile/>
                        </StyledIcon>
                        <StyledUser>
                            <Link to="/">Level.15 나문희</Link>
                            <p>입찰 제안 가격: 30,000원</p>
                        </StyledUser>
                    </StyledUsers>

                
                    <StyledBidState>
                        <StyledBidStateP>계약 현황</StyledBidStateP>
                        <button>미정</button>
                    </StyledBidState>
                </StyledListHead>


                <StyledBody>안녕하세요 나문희입니다. 온라인 방송 통역은 이러한 기술과 이러한 서비스를 제공하기 때문에 입찰 제안 가격을 30,000
                    원으로 책정하였습니다. 믿고 맡겨 주세요!</StyledBody>


            </StyledList>
        </>
    )
}

export default BidListItem;