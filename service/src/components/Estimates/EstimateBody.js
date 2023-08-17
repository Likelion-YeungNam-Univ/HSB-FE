import { useState } from "react";
import axios from "axios"
import {AiOutlineSend} from "react-icons/ai"
import {BsBookmark, BsBookmarkFill} from "react-icons/bs"
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import StateBox from "./StateBox";

const StyledBody = styled.div`
    border: 1px solid;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
    padding: 20px;
    width: 450px;
`;
const StyledTags = styled.div`
    display: flex;
    justify-content: space-between;
`;
const StyledTerms = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.1rem;
`;
const StyledSendIcon = styled.button`
    background-color: transparent;
    border: none;
    font-size: 1.8rem;
`;

const EstimateBody = () => {
    const navigate = useNavigate();

    const navigateToNote = () => {
        navigate('/sendNotePage');
    };

    const states = [
        {id: 0, current: "진행중"},
        {id: 1, current: "계약 진행중"},
        {id: 2, current: "견적 종료"}
    ];

    const [bookmark, setBookmark] = useState(false);

    const handleBookmark = () => {
        setBookmark(!bookmark);
    }

    {/* 북마크 DB 연결
    useEffect(async () =>{
        const fetchData = async () => {
            const res = await axios.get(...)
            if(res.data.type === '...') setBookmark(true);
        }
        fetchData()
    }, []);

    const toggleBookmark = async (e) => {
        const res = await axios.post(...)
        setBookmark(!bookmark);
    }
    */}


    return(
        <StyledBody>
            <StyledTags>
                <div>
                    <StateBox states={states}/>
                </div>

                <div>
                    <StyledSendIcon onClick={navigateToNote}><AiOutlineSend/></StyledSendIcon>
                </div>
            </StyledTags>

            <div>
                <p>안녕하세요.<br/>
                온라인 방송 통역 구합니다.<br/>
                한글로 통역 원합니다.<br/>
                많은 입찰 제안 부탁드려요!</p>
            </div>

            <StyledTerms>
                <div onClick={handleBookmark}>
                    {bookmark ? ( <BsBookmarkFill/>) : ( <BsBookmark/>)} {bookmark ? 4:3}
                </div>
                <div>
                    <p>기한: 2023-12-01까지</p>
                </div>
            </StyledTerms>
            
        </StyledBody>
    )
}

export default EstimateBody;