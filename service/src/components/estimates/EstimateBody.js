import { useState } from "react";
import axios from "axios"
import IconButton from "@mui/material/IconButton"
import {AiOutlineSend, AiOutlineCheckSquare} from "react-icons/ai"
import styled from "styled-components"

const EstimateBody = () => {
    const StyledBody = styled.div`
        border: line;
        border-radius: 3px;
        display: flex;
        flex-direction: column;
        padding: 0px 0px 0px 50px;
    `;

    const [bookmark, setBookmark] = useState(false);

    const onClick = () => {
        setBookmark(!bookmark);
    }

    return(
        <StyledBody>
            {/* 데이터 받아와야함 */}
            <div>
                <button>계약 진행중</button>
                <button>#실시간</button>
                <button>#문자</button>
                <button>#한글</button>

                <div>
                    <IconButton buttonName={AiOutlineSend}></IconButton>
                </div>
            </div>

            <p>안녕하세요.<br/>
            온라인 방송 통역 구합니다.<br/>
            한글로 통역 원합니다.<br/>
            많은 입찰 제안 부탁드려요!</p>

            <div>
                <IconButton buttonName={AiOutlineCheckSquare} onClick={setBookmark}>{bookmark}</IconButton>
                <div>
                    <p>기한: 2023-12-01까지</p>
                </div>
            </div>
            
        </StyledBody>
    )
}

export default EstimateBody;