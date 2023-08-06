import React from "react";
import {useNavigate} from 'react-router-dom';
import LoginForm from "../components/Auth/LoginForm";
import { SignInBox, MyPage } from "../styles/Login.styled";

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <SignInBox>
            <h3>HEAR AND SCRIBE</h3>

            <LoginForm/>

            <MyPage>
                <button className="FindIdBtn" onClick={() => navigate("/SearchIdPage")}>아이디 찾기</button>
                <button className="FindPwBtn" onClick={() => navigate("/SearchPwPage")}>비밀번호 찾기</button>
                <button className="registerBtn" onClick={()=>navigate("/JoinPage")}>회원가입</button>
            </MyPage>
                 
        </SignInBox>
    );
}

export default LoginPage;