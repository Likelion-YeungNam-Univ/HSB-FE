import styled from "styled-components";

const EstimateHead = () => {
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
        <StyledHead>
            {/* 데이터 받아와야함 */}
            <StyledTitle>
                <StyledDetail>온라인 방송 통역 구합니다.</StyledDetail>
            </StyledTitle>
            <StyledDetails>
                <StyledDetail>작성자: 나문희</StyledDetail>
                <StyledDetail>작성일: 2023-08-25</StyledDetail>
            </StyledDetails>
            <video width="360" height="220" controls="controls">
                <source src={require("../../videos/ex.mp4")}/>
            </video>
        </StyledHead>
    )
}

export default EstimateHead;