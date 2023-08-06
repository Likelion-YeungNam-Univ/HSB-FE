import React from "react";
import {useNavigate} from 'react-router-dom';
import { SignInBox} from "../styles/Login.styled";
import ResetPwForm from "../components/Auth/ResetPwForm";
const ResetPwPage = () => {
    const navigate = useNavigate();

    return (
        <SignInBox>
            <h2>HEAR AND SCRIBE</h2>
            <h3>비밀번호 재설정</h3>
            <p>비밀번호를 변경해 주세요.</p>
            <ResetPwForm/>
                 
        </SignInBox>
    );
}

export default ResetPwPage;