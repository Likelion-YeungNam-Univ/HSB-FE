import React from "react";
import {useNavigate, } from 'react-router-dom';
import FindIdForm from "../components/Auth/FindIdForm";
import { SignInBox} from "../styles/Login.styled";

const FindIdPage = () => {
    const navigate = useNavigate();

    return (
        <SignInBox>
            <h2 className="title">HEAR AND SCRIBE</h2>
            <h3>아이디 찾기</h3>
            <p>고객님의 정보와 일치하는 아이디 입니다.</p>
            <FindIdForm/>
                 
        </SignInBox>
    );
}

export default FindIdPage;