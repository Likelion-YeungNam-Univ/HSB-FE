import React from "react";
import {useNavigate} from 'react-router-dom';
import LoginForm from "../components/Auth/LoginForm";
import { SignInBox, MyPage, Container } from "../styles/Login.styled";


const LoginPage = () => {
    
    const navigate = useNavigate();

    return (
        <SignInBox>
            <h3 className="title">HEAR AND SCRIBE</h3>
            <LoginForm/>

            <div class="form-check">
                <input class="form-check-input" 
                        type="checkbox" 
                        value="" 
                        id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                로그인 상태 유지
                </label>
            </div>
            <br/>

            <MyPage>
                <button className="textBtn" onClick={() => navigate("/SearchIdPage")}>아이디 찾기</button>
                <button className="textBtn" onClick={() => navigate("/SearchPwPage")}>비밀번호 찾기</button>
                <button className="registerBtn" onClick={()=>navigate("/JoinPage")}>회원가입</button>
            </MyPage>
           

            <div className="bottom-signup">
                <p>이용약관 | 개인정보처리방침 | 책임의 한계와 법적고지 | 회원정보 고객센터</p>
            </div>
                 
        </SignInBox>
        
    );
}

export default LoginPage;