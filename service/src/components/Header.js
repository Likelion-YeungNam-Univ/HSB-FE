import { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import styled from "styled-components"
import {AiOutlineSearch, AiOutlineBell, AiOutlineSend, AiOutlineDown} from "react-icons/ai"
import logo from "../img/LogoHSB.png"

const StyledCenter = styled.div`
    display: flex;
    justify-content: center;
`;
const StyledHeader = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px;
    width: 1100px;
`;
const StyledLogo = styled.img`
    margin-top: 15px;
    height: 50px;
    width: 210px;
    background-size: contain;
`;
const StyledSearch = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 2rem;
    display: inline;
`;
const StyledIcon = styled.div`
    display: inline;
    color: #95DDFF;
`;
const StyledInput = styled.input`
    font-size: 1.3rem;
    width: 350px;
    border-color: #95DDFF;
    outline: none;
`;
const StyledIconButtons = styled.div`
    display: flex;
    justify-content: center;
    width: 180px;
`;
const StyledIcons = styled.button`
    font-size: 2rem;
    background-color: transparent;
    border: none;
    margin-right: 10px;
`;

const Header = () => {
    const navigate = useNavigate();

    const navigateToMain = () => {
        navigate('/');
    };


    const [search, setSearch] = useState('');

    const onChange = (e) => {
        setSearch(e.target.value);
    };


    return(
        <StyledCenter>
            <StyledHeader>
                
                <StyledLogo src={logo} alt="로고" onClick={navigateToMain}/>
                
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
        </StyledCenter>
    )
}

export default Header;