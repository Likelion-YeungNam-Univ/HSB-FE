import { useState } from "react";
import styled from "styled-components";

const OfferBid = () => {
    const StyledHead = styled.div`
        display: flex;
        flex-direction: column;
        padding: 0px 50px 0px 0px;
    `;
    const StyledTitle = styled.div`
        font-size: 1.5rem;
    `;
    const StyledInputs = styled.div`
        display: flex;
    `;
    const StyledDetail = styled.p`
        margin: 0px 30px 10px 0px;
        padding: 0px;
    `;

    const [bid, setBid] = useState({
        price: '',
        text: ''
    })

    return(
        <>
            <p>입찰 제안서 작성하기</p>

            <StyledInputs>
                <span>
                    <p>가격</p>
                </span>
                <input></input>
            </StyledInputs>

            <StyledInputs>
                <span>
                    <p>본문</p>
                </span>
                <input></input>
            </StyledInputs>
            
            <div>
                <button>업로드</button>
            </div>
        </>
    )
}

export default OfferBid;