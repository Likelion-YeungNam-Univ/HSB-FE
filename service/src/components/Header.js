import { useState } from "react";
import {Link} from "react-router-dom"
import styled from "styled-components"

const Header = () =>{
    const StyledHeader = styled.div`
        display: flex;
        justify-content: space-between;
    `;
    const HeaderLink = styled(Link)`
        font-size: 3rem;
        display: inline;
        color: blue;
        text-decoration: none;
    `;
    const StyledSearch = styled.input`
        font-size: 3rem;
        display: inline;
    `;

    const [text, setText] = useState('');
    
    return(
        <>
            <StyledHeader>
                <HeaderLink to="/MainPage">말문희막힘</HeaderLink>
                <StyledSearch type="text" value={text} onChange={(e)=>{
                    setText(e.target.value);
                }}></StyledSearch>
            </StyledHeader>
        </>
    )
}

export default Header;