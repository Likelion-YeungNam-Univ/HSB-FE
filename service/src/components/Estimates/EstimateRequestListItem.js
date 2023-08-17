import { useState } from "react";
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

const EstimateRequestListItem = ({estimate_id, title, created_at, user_name}) => {
    
    const modifiedTime = created_at.substring(0,10);

    return (
        <>
            
            <StyledListLine>
                <StyledListNum>{estimate_id}</StyledListNum>
                <StyledListLink to="/EstimatePage">{title}</StyledListLink>
                <StyledListAuthor>{user_name}</StyledListAuthor>
                <StyledListDate>{modifiedTime}</StyledListDate>
            </StyledListLine>
            
            
        </>
    )
}

export default EstimateRequestListItem;