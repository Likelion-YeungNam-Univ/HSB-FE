import {Link} from 'react-router-dom';
import styled from "styled-components"

const Nav = () =>{
    const StyledLink = styled(Link)`
        font-size: 1.3rem;
        color: blue;
        line-height:7;
        margin: 0px 20px 0px 0px;
        text-decoration: none;
    `;

    return(
        <>
            <StyledLink to="/">서비스 이름 이란?</StyledLink>
            <StyledLink to="/EstimatePage">견적 요청</StyledLink>
            <StyledLink to="/GuestBookPage">커뮤니티</StyledLink>
            <StyledLink to="/GuestBookPage">FAQ</StyledLink>
        </>
    )
}

export default Nav;