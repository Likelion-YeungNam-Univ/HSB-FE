import React from "react";
import { LoginBox } from "../../styles/MainPageLoginForm.style";
import { useNavigate } from "react-router-dom";
import { MyPage } from "../../styles/Login.styled";


const AfterLoginForm = () => {
    const navigate = useNavigate();

    return (
        <LoginBox>
            <MyPage>   
            
            <h3>{/*data.id*/}</h3>
            <p>sleepless@icloud.com</p>
            <button type="submit" className="textBtn" onClick={() => navigate("/ProfileAndContractsPage")}>마이페이지</button>

            <button type="submit" className="btn btn-outline-secondary btn-sm" onClick={() => navigate("/")}>로그아웃</button>

        </MyPage>
        </LoginBox>
       
    );
}

export default AfterLoginForm;