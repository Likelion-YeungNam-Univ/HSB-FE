import React from "react";
import { useNavigate } from "react-router-dom";
import { MyPage } from "../../styles/Login.styled";
import { LoginBox, MyPageLogin } from "../../styles/MainPageLoginForm.style";

const MainPageLoginForm = () => {

    const navigate = useNavigate();


    return (
        <LoginBox>
            <p> 000을 통해서 원하는 영상의 소리를 볼 수 있습니다.</p>
            <button className="LoginBtn" type="submit" onClick={() => navigate("/LoginPage")}>
                로그인</button> {/*비밀번호 일치할 경우 메인페이지로 이동하도록 수정*/}
            <MyPage>
                <button className="textBtn" onClick={() => navigate("/SearchIdPage")}>아이디 찾기</button>
                <button className="textBtn" onClick={() => navigate("/SearchPwPage")}>비밀번호 찾기</button>
                <button className="registerBtn" onClick={()=>navigate("/JoinPage")}>회원가입</button>
            </MyPage>
        </LoginBox>

    );

}

export default MainPageLoginForm;