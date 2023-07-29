import {Link} from 'react-router-dom';
import styled from "styled-components"

const Nav = () =>{
    const StyledLink = styled(Link)`
        font-size: 2rem;
        color: blue;
        margin: 0px 30px 0px 0px;
        text-decoration: none;
    `;

    return(
        <>
            <StyledLink to="/"> 홈</StyledLink>
            <StyledLink to="/EstimatePage"> 견적 요청</StyledLink>
            <StyledLink to="/GuestBookPage"> 방명록</StyledLink>
        </>
    )
}

export default Nav;