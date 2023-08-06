import { useState } from "react";
import axios from "axios"
import {AiOutlineSend, AiOutlineCheckSquare} from "react-icons/ai"
import styled from "styled-components"

const EstimateBody = () => {
    const StyledBody = styled.div`
        border: 1px solid;
        border-radius: 3px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 50px;
        padding: 20px;
        width: 350px;
    `;
    const StyledTags = styled.div`
        display: flex;
        justify-content: space-between;
    `;
    const StyledTerms = styled.div`
        display: flex;
        justify-content: space-between;
    `;

    const [bookmark, setBookmark] = useState(false);

    const onClick = () => {
        setBookmark(!bookmark);
    }

    return(
        <StyledBody>
            <StyledTags>
                <div>
                    <button>계약 진행중</button>
                    <button>#실시간</button>
                    <button>#문자</button>
                    <button>#한글</button>
                </div>

                <div>
                    <button><AiOutlineSend/></button>
                </div>
            </StyledTags>

            <div>
                <p>안녕하세요.<br/>
                온라인 방송 통역 구합니다.<br/>
                한글로 통역 원합니다.<br/>
                많은 입찰 제안 부탁드려요!</p>
            </div>

            <StyledTerms>
                <div>
                    <button onClick={setBookmark}><AiOutlineCheckSquare/></button> 3{bookmark}
                </div>
                <div>
                    <p>기한: 2023-12-01까지</p>
                </div>
            </StyledTerms>
            
        </StyledBody>
    )
}

export default EstimateBody;