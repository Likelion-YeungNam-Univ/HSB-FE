import {Link} from "react-router-dom";
import styled from "styled-components";
import { axios } from "axios";

const StyledListLine = styled.div`
    display: flex;
    width: 940px;
    padding-top: 10px;
    border-bottom: 2px solid #E0E0E0;
`;
const StyledListNum = styled.h6`
    flex: 2;
`;
const StyledListLink = styled(Link)`
    flex: 10;
    text-decoration: none;
    color: black;
    margin: -2px 0px 8px 0px;
`;
const StyledListAuthor = styled.h6`
    flex: 3;
`;
const StyledListDate = styled.h6`
    flex: 4;
`;

const EstimateRequestListItem = () => {

    

    return (
        <>
            
            <StyledListLine>
                <StyledListNum>3</StyledListNum>
                <StyledListLink to="/EstimatePage">온라인 방송 통역 구합니다!</StyledListLink>
                <StyledListAuthor>나문희</StyledListAuthor>
                <StyledListDate>2023-08-25</StyledListDate>
            </StyledListLine>
            <StyledListLine>
                <StyledListNum>3</StyledListNum>
                <StyledListLink to="/EstimatePage">온라인 방송 통역 구합니다!</StyledListLink>
                <StyledListAuthor>나문희</StyledListAuthor>
                <StyledListDate>2023-08-25</StyledListDate>
            </StyledListLine>
            <StyledListLine>
                <StyledListNum>3</StyledListNum>
                <StyledListLink to="/EstimatePage">온라인 방송 통역 구합니다!</StyledListLink>
                <StyledListAuthor>나문희</StyledListAuthor>
                <StyledListDate>2023-08-25</StyledListDate>
            </StyledListLine>
            <StyledListLine>
                <StyledListNum>3</StyledListNum>
                <StyledListLink to="/EstimatePage">온라인 방송 통역 구합니다!</StyledListLink>
                <StyledListAuthor>나문희</StyledListAuthor>
                <StyledListDate>2023-08-25</StyledListDate>
            </StyledListLine>
            <StyledListLine>
                <StyledListNum>3</StyledListNum>
                <StyledListLink to="/EstimatePage">온라인 방송 통역 구합니다!</StyledListLink>
                <StyledListAuthor>나문희</StyledListAuthor>
                <StyledListDate>2023-08-25</StyledListDate>
            </StyledListLine>
            <StyledListLine>
                <StyledListNum>3</StyledListNum>
                <StyledListLink to="/EstimatePage">온라인 방송 통역 구합니다!</StyledListLink>
                <StyledListAuthor>나문희</StyledListAuthor>
                <StyledListDate>2023-08-25</StyledListDate>
            </StyledListLine>
            <StyledListLine>
                <StyledListNum>3</StyledListNum>
                <StyledListLink to="/EstimatePage">온라인 방송 통역 구합니다!</StyledListLink>
                <StyledListAuthor>나문희</StyledListAuthor>
                <StyledListDate>2023-08-25</StyledListDate>
            </StyledListLine>
            <StyledListLine>
                <StyledListNum>3</StyledListNum>
                <StyledListLink to="/EstimatePage">온라인 방송 통역 구합니다!</StyledListLink>
                <StyledListAuthor>나문희</StyledListAuthor>
                <StyledListDate>2023-08-25</StyledListDate>
            </StyledListLine>
            <StyledListLine>
                <StyledListNum>3</StyledListNum>
                <StyledListLink to="/EstimatePage">온라인 방송 통역 구합니다!</StyledListLink>
                <StyledListAuthor>나문희</StyledListAuthor>
                <StyledListDate>2023-08-25</StyledListDate>
            </StyledListLine>
            
            
        </>
    )
}

export default EstimateRequestListItem;