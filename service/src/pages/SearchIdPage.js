import React from "react";
import {useNavigate} from 'react-router-dom';
import SearchIdForm from "../components/Auth/SearchIdForm";
import { SignInBox} from "../styles/Login.styled";

const SearchIdPage = () => {
    const navigate = useNavigate();

    return (
        <SignInBox>
            <h3>HEAR AND SCRIBE</h3>
            <p>아이디를 찾고자 하는 이메일을 입력해주세요.</p>
            <SearchIdForm/>
                 
        </SignInBox>
    );
}

export default SearchIdPage;