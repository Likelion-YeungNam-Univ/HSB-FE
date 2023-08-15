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
    justify-content: center;
    width: 1519px;
`;
const StyledWidth = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px;
    width: 1100px;
`;
const StyledLogo = styled.div`
    display: flex;
    margin-top: 5px;
`;
const StyledImg = styled.img`
    height: 40px;
    width: 40px;
    background-size: contain;
    margin-right: 3px;
`;
const StyledLogoName = styled.h5`
    font-weight: bold;
    font-size: 1.7rem;
    color: #95DDFF;
    letter-spacing: -1px;
`;
const StyledSearch = styled.div`
    display: flex;
    align-items: center;
    font-size: 2rem;
`;
const StyledSearchButton = styled.button`
    background-color: #95DDFF;
    border: 1px solid #95DDFF;
    width: 50px;
    height: 37px;
    font-size: 15px;
    font-weight: bold;
`;
const StyledInput = styled.input`
    font-size: 1.3rem;
    width: 330px;
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
    padding-bottom: 10px;
`;

const Header = () => {
    const navigate = useNavigate();

    const navigateToMain = () => {
        navigate('/');
    };
    const navigateToSearch = () => {
        navigate('/SearchPage');
    }


    const [search, setSearch] = useState('');

    const onChange = (e) => {
        setSearch(e.target.value);
    };


    return(
        <StyledCenter>
            <StyledHeader>
                <StyledWidth>
                
                <StyledLogo onClick={navigateToMain}>
                    <StyledImg src={logo} alt="로고"/>
                    <StyledLogoName>HEAR AND SCRIBE</StyledLogoName>
                </StyledLogo>
                
                <StyledSearch>
                    <StyledInput type="text" placeholder="검색어를 입력해주세요">{/*value={search} onChange={onChange}*/}</StyledInput>
                    <StyledSearchButton onClick={navigateToSearch}>검색</StyledSearchButton>
                </StyledSearch>

                <StyledIconButtons>
                    <StyledIcons><AiOutlineBell/></StyledIcons>
                    <StyledIcons><AiOutlineSend/></StyledIcons>
                    <StyledIcons><AiOutlineDown/></StyledIcons>
                </StyledIconButtons>
                
                </StyledWidth>
            </StyledHeader>
        </StyledCenter>
    )
}

export default Header;