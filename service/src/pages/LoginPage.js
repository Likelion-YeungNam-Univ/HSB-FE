import styled from "styled-components";
import Login from "../components/Auth/Login"
import Terms from "../components/Auth/Terms"

const LoginPage = () => {
    const StyledLogin = styled.div`
        
    `;
    const StyledTerms = styled.div`
        
    `;

    return(
        <>
            <StyledLogin>
                <Login/>
            </StyledLogin>
            <StyledTerms>
                <Terms/>
            </StyledTerms>
        </>
    )
}

export default LoginPage;