import React from "react";
import {useNavigate} from 'react-router-dom';
import SearchIdForm from "../components/Auth/SearchIdForm";
import { SignInBox} from "../styles/Login.styled";

const SearchIdPage = () => {
    const navigate = useNavigate();

    return (
        <SignInBox>
            <h3 className="title">HEAR AND SCRIBE</h3>
            <p>아이디를 찾고자 하는 이메일을 입력해주세요.</p>
            <SearchIdForm/>

            <div className="bottom-signup">
                <p>이용약관 | 개인정보처리방침 | 책임의 한계와 법적고지 | 회원정보 고객센터</p>
            </div>
                 
        </SignInBox>
    );
}

export default SearchIdPage;