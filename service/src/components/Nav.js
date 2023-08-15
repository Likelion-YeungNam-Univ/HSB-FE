import {Link} from 'react-router-dom';
import styled from "styled-components"

const StyledCenter = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #A0A0A0;
    margin: 30px 0px;
`;
const StyledNav = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 940px;
`;
const StyledLink = styled(Link)`
    font-size: 1.3rem;
    color: black;
    line-height: 2;
    margin: 0px 20px 0px 0px;
    text-decoration: none;
`;

const Nav = () =>{
    
    return(
        <StyledCenter>
            <StyledNav>

                <StyledLink to="/ServiceNamePage">HSB란?</StyledLink>
                <StyledLink to="/EstimateRequestListPage">견적요청</StyledLink>
                <StyledLink to="/CommunityListPage">커뮤니티</StyledLink>
                <StyledLink to="/EstimatePage">FAQ</StyledLink>
                
            </StyledNav>
        </StyledCenter>
    )
}

export default Nav;