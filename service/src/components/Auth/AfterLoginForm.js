import React from "react";
import { LoginBox } from "../../styles/MainPageLoginForm.style";
import { useNavigate } from "react-router-dom";
import { MyPage } from "../../styles/Login.styled";

const AfterLoginForm = () => {
    const navigate = useNavigate();

    return (
        <LoginBox>
        <h3>나문희님</h3>
        <MyPage>
            <button type="button" class="btn btn-outline-secondary btn-sm">작성글</button>
            <button type="button" class="btn btn-outline-secondary btn-sm">마이페이지</button>
            <button type="submit" class="btn btn-outline-secondary btn-sm" onClick={() => navigate("/")}>로그아웃</button>
        </MyPage>
        </LoginBox>
            
    
          
       
    );
}

export default AfterLoginForm;