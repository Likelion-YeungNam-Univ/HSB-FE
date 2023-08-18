import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContentText, MyPage } from "../../styles/Login.styled";
import ApplicationFormItem from "./ApplicationFormItem";
import styled from "styled-components"

const StyledDiv = styled.div`
    overflow: hidden;
    flex-wrap: nowrap;

`;
const StyledText = styled.div`
flex-direction: row;

`;

const StyledWrap = styled.div`
display: flex;
flex-direction: column;
`;


const ApplicationForm = ({posts}) => {

    // console.log("post");
    // console.log(posts);
    const [cnt, setCnt] = useState(0);
    
    return (
    <StyledDiv>
        <MyPage>
        <StyledText>
            <ContentText>
                <p> 견적신청서</p>
                <hr/>
                {posts.map((post) => {
                
                if(post.estimate_id<13){
                    return <ApplicationFormItem estimate_id={post.estimate_id} title={post.title}/>
                }
                    
                })}
            </ContentText>
    
            </StyledText>
        </MyPage>
    </StyledDiv>
    )
}

export default ApplicationForm;