import React from "react";
import {useNavigate} from 'react-router-dom';
import LoginForm from "../components/Auth/LoginForm";
import { SignInBox, MyPage } from "../styles/Login.styled";
import axios from "axios";


const LoginPage = () => {
    const [id, setId] = React.useState("");
    const [password, setpassword] = React.useState("");


    const navigate = useNavigate();
    const JWT_EXPIRY_TIME = 24 * 3600 * 1000;//토큰 만료 시간

    const loginDB = (id, password) => {
        const data = {
            id:"string",
            password:"string",
        };
        axios.post('http://127.0.0.1:8000/api/estimates/').then(response => {
            const {accessToken} = response.data;
            //api요청하는 콜마다 헤더에 accesstoken을 담아 보내도록 설정
            axios.defaults.headers.common['Authorization']=`Bearer ${accessToken}`;

        }).catch(error => {
            //에러처리
        });
    }

    const onSilentRefresh = () => {
        axios.post('/silent-refresh')
        .then(onLoginSuccess)
        .catch(error => {

        });
    }

    const onLoginSuccess = response => {
        const {accessToken} = response.data;

        // accessToken 설정
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

        // accessToken 만료하기 1분 전에 로그인 연장
        setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
    }

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