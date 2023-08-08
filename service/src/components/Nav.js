import {Link} from 'react-router-dom';
import styled from "styled-components"

const Nav = () =>{
    const StyledLink = styled(Link)`
        font-size: 1.3rem;
        color: black;
        line-height:7;
        margin: 0px 20px 0px 0px;
        text-decoration: none;
    `;

    return(
        <>
            <StyledLink to="/ServiceNamePage">HSB란?</StyledLink>
            <StyledLink to="/EstimateRequestListPage">견적요청</StyledLink>
            <StyledLink to="/GuestBookPage">커뮤니티</StyledLink>
            <StyledLink to="/EstimatePage">FAQ</StyledLink>
        </>
    )
}

export default Nav;