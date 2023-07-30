import styled from "styled-components";
import Join from "../components/Auth/Join"
import Terms from "../components/Auth/Terms"

const JoinPage = () => {
    const StyledJoin = styled.div`
        
    `;
    const StyledTerms = styled.div`
        
    `;

    return(
        <>
            <StyledJoin>
                <Join/>
            </StyledJoin>
            <StyledTerms>
                <Terms/>
            </StyledTerms>
        </>
    )
}

export default JoinPage;