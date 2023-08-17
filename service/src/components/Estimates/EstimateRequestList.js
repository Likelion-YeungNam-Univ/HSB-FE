import styled from "styled-components";
import { axios } from "axios";
import EstimateRequestListItem from "./EstimateRequestListItem";

const StyledDirection = styled.div`
    display: flex;
    flex-direction: column;
`;
const StyledListTitle = styled.div`
    display: flex;
    width: 940px;
    border-top: 3px solid #808080;
    padding-top: 10px;
    border-bottom: 2px solid #E0E0E0;
`;
const StyledListTitleNum = styled.h5`
    flex: 2;
`;
const StyledListTitleTitle = styled.h5`
    flex: 10;
`;
const StyledListTitleAuthor = styled.h5`
    flex: 3;
`;
const StyledListTitleDate = styled.h5`
    flex: 4;
`;

const EstimateRequestList = ({posts}) => {
    console.log("post");
    console.log(posts);

    return (
        <>
            <StyledDirection>

            <StyledListTitle>
                <StyledListTitleNum>번호</StyledListTitleNum>
                <StyledListTitleTitle>제목</StyledListTitleTitle>
                <StyledListTitleAuthor>작성자</StyledListTitleAuthor>
                <StyledListTitleDate>작성일</StyledListTitleDate>
            </StyledListTitle>

            {posts.map((post) => {
                return (
                <EstimateRequestListItem estimate_id={post.estimate_id} title={post.title} created_at={post.created_at} user_name={post.user_info.user_name}/>
            )})}
            
            
            </StyledDirection>
        </>
    )
}

export default EstimateRequestList;