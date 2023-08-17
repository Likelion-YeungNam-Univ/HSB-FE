import React from "react";
import { LoginBox } from "../../styles/MainPageLoginForm.style";
import { useNavigate } from "react-router-dom";
import { MyPage } from "../../styles/Login.styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { getCookie } from "../../Cookies";


const AfterLoginForm = () => {
    const navigate = useNavigate();

    const [users, setUsers] = useState();

    useEffect(()=>{
        axios.get('/users/login/auth/',
            {
                headers: {
                Authorization: `Bearer ${getCookie("ACCESS_TOKEN")}`,
                }
            })
            .then((response) => {
                console.log(response.data);
                setUsers(response.data); //받아온 데이터 저장
                
            })
            .catch((error)=>{
            console.log(error);
        })

    }, []);

    return (
        <LoginBox>
            <MyPage>   
            
            {users ? (
                <>
                    <h3>{users.id}</h3>
                    <p>{users.email}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
            <button type="submit" className="textBtn" onClick={() => navigate("/ProfileAndContractsPage")}>마이페이지</button>

            <button type="submit" className="btn btn-outline-secondary btn-sm" onClick={() => {navigate('/LoginPage')}}>로그아웃</button>

        </MyPage>
        </LoginBox>
       
    );
}

export default AfterLoginForm;