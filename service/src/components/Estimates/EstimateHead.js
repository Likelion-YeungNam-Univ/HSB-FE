import styled from "styled-components";

const StyledHead = styled.div` 
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    width: 450px;
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

const EstimateHead = ({title, created_at, user_name}) => {
    const modifiedTime = created_at.substring(0,10);

    return(
        <StyledHead>

            <StyledTitle>
                <StyledDetail>{title}</StyledDetail>
            </StyledTitle>
            <StyledDetails>
                <StyledDetail>작성자: {user_name}</StyledDetail>
                <StyledDetail>작성일: {modifiedTime}</StyledDetail>
            </StyledDetails>
            <video width="430" height="250" controls="controls">
                <source src={require("../../videos/ex.mp4")}/>
            </video>

        </StyledHead>
    )
}

export default EstimateHead;