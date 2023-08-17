import React from "react";
import {useNavigate} from 'react-router-dom';
import { SignInBox} from "../styles/Login.styled";
import JoinForm from "../components/Auth/JoinForm";
import axios from "axios";

const JoinPage = () => {
    const navigate = useNavigate();

    return (
        <SignInBox>
            <h2 className="title">HEAR AND SCRIBE</h2>
            <h3>회원가입</h3>
            <JoinForm/>
            <div className="bottom-signup">
                <p>이용약관 | 개인정보처리방침 | 책임의 한계와 법적고지 | 회원정보 고객센터</p>
            </div>
                 
        </SignInBox>
    );
}

export default JoinPage;