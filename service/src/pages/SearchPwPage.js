import React from 'react';
import SearchPwForm from '../components/Auth/SearchPwForm';
import { useNavigate } from 'react-router-dom';
import { SignInBox } from '../styles/Login.styled';

const SearchPwPage= () => {
    const navigate = useNavigate();

    return (
        <SignInBox>
            <h3 className='title'>HEAR AND SCRIPT</h3>
            <p>비밀번호를 찾고자하는 아이디와 이메일을 입력해주세요.
            </p>
            <SearchPwForm/>
            <div className="bottom-signup">
                <p>이용약관 | 개인정보처리방침 | 책임의 한계와 법적고지 | 회원정보 고객센터</p>
            </div>
        </SignInBox>
        
    );
};

export default SearchPwPage;