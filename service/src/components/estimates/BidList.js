import styled from "styled-components";
import {AiOutlineSmile} from "react-icons/ai"
import {Link} from "react-router-dom"


const BidList = () => {
    const StyledHead = styled.div`
        display: flex;
        flex-direction: column;
        padding: 0px 50px 0px 0px;
    `;
    const StyledTitle = styled.div`
        font-size: 1.5rem;
    `;
    const StyledDetails = styled.div`
        display: flex;
    `;
    const StyledDetail = styled.p`
        margin: 0px 30px 10px 0px;
        padding: 0px;
    `;

    return(
        <>
            <p>입찰 제안 목록</p>
            <div>
                <AiOutlineSmile/>
            </div>
            <div>
                <Link to="/">Level.15 나문희</Link>
                <p>입찰 제안 가격: 30,000원</p>
            </div>



            <p>안녕하세요 나문희입니다. 온라인 방송 통역은 이러한 기술과 이러한 서비스를 제공하기 때문에 입찰 제안 가격을 30,000
                원으로 책정하였습니다. 믿고 맡겨 주세요!</p>

        </>
    )
}

export default BidList;