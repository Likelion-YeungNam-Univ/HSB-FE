import React from "react";
import { LoginBox } from "../../styles/MainPageLoginForm.style";
import { useNavigate } from "react-router-dom";
import { MyPage } from "../../styles/Login.styled";
import axios from "axios";

const AfterLoginForm = () => {
    const navigate = useNavigate();

    /*const logout = () => {
        axios.post('/users/<user_id>')
        .then(res => {
                alert("로그아웃 완료되었습니다.");
                return navigate("/LoginPage", {
                    state: {
                        check: false
                    }
                });
            
            
                //console.log(props.history);
                //props.history.push('/login')
            }
        )
        .catch(err => {
            alert("err");
        })
    }*/

    return (
        <LoginBox>
            <MyPage>   
            
            <h3>{/*data.id*/}</h3>
            <p>sleepless@icloud.com</p>
            <button type="submit" className="textBtn" onClick={() => navigate("/ProfileAndContractsPage")}>마이페이지</button>

            <button type="submit" className="btn btn-outline-secondary btn-sm" onClick={() => {navigate('/LoginPage')}}>로그아웃</button>

        </MyPage>
        </LoginBox>
       
    );
}

export default AfterLoginForm;