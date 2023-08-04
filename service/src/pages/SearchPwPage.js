import React from 'react';
import SearchPwForm from '../components/Auth/SearchPwForm';
import { useNavigate } from 'react-router-dom';
import { SignInBox } from '../styles/Login.styled';

const SearchPwPage= () => {
    const navigate = useNavigate();

    return (
        <SignInBox>
            <h3>HEAR AND SCRIPT</h3>
            <p>비밀번호를 찾고자하는 아이디와 이메일을 입력해주세요.
            </p>
            <SearchPwForm/>
        </SignInBox>
        
    );
};

export default SearchPwPage;