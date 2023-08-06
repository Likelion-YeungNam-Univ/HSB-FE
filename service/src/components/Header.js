import { useState } from "react";
import {Link} from "react-router-dom"
import styled from "styled-components"
import {AiOutlineSearch, AiOutlineBell, AiOutlineSend, AiOutlineDown} from "react-icons/ai"

const Header = () => {
    const StyledHeader = styled.div`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: 20px 0px 0px 0px;
    `;
    const HeaderLink = styled(Link)`
        font-size: 3rem;
        display: inline;
        color: #95DDFF;
        text-decoration: none;
    `;
    const StyledSearch = styled.div`
        font-size: 2rem;
        display: inline;
    `;
    const StyledInput = styled.input`
        font-size: 2rem;
        border-color: #95DDFF;
        outline: none;
    `;
    const StyledIconButtons = styled.div`
        display: flex;
        justify-content: center;
        width: 300px;

    `;
    const StyledIcon = styled.span`
        height: 40px;
        width: 40px;
        color: #95DDFF;
    `;
    const StyledIcons = styled.button`
        height: 80px;
        width: 80px;
        font-size: 2rem;
        border-radius: 50%;
    `;


    const [search, setSearch] = useState('');

    const onChange = (e) => {
        setSearch(e.target.value);
    };


    
    return(
        <StyledHeader>
            <div>
                <HeaderLink to="/">HEAR AND SCRIBE</HeaderLink>
            </div>

            <StyledSearch>
                <StyledIcon><AiOutlineSearch/></StyledIcon>
                <StyledInput type="text" placeholder="검색어를 입력해주세요">{/*value={search} onChange={onChange}*/}</StyledInput>
            </StyledSearch>

            <StyledIconButtons>
                <StyledIcons><AiOutlineBell/></StyledIcons>
                <StyledIcons><AiOutlineSend/></StyledIcons>
                <StyledIcons><AiOutlineDown/></StyledIcons>
            </StyledIconButtons>
            
        </StyledHeader>
    )
}

export default Header;