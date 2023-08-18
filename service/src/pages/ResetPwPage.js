import React from "react";
import {useNavigate} from 'react-router-dom';
import { SignInBox} from "../styles/Login.styled";
import ResetPwForm from "../components/Auth/ResetPwForm";
import axios from "axios";
import { useEffect } from "react";
import { getCookie } from "../Cookies";
import { useState } from "react";

const ResetPwPage = () => {
    
    const navigate = useNavigate();
    

    return (
        <SignInBox>
            <h2 className="title">HEAR AND SCRIBE</h2>
            <h3>비밀번호 재설정</h3>
            <p>비밀번호를 변경해 주세요.</p>
            <ResetPwForm/>
            <div className="bottom-signup">
                <p>이용약관 | 개인정보처리방침 | 책임의 한계와 법적고지 | 회원정보 고객센터</p>
            </div>
                 
        </SignInBox>
    );
}

export default ResetPwPage;