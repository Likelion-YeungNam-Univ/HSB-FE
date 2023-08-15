import React from "react";
import {useNavigate} from 'react-router-dom';
import { SignInBox} from "../styles/Login.styled";
import JoinForm from "../components/Auth/JoinForm";
import axios from "axios";

const JoinPage = () => {
    const navigate = useNavigate();
    /*axios("/users",{

        "user_name": "string",
        "email": "useaar@example.com",
        "id": "string",
        "password": "string"
    })
    .then(res => { //요청 성공했을 때
        console.log(res.data.user_name);
        console.log(res.data.email);
        console.log(res.data.id);
    })
    .catch(err => {//요청 실패 했을 경우
        console.log(err);
    })*/


    return (
        <SignInBox>
            <h2 className="title">HEAR AND SCRIBE</h2>
            <h3>회원가입</h3>
            <JoinForm/>
            <div className="bottom-signup">
                <p>이용약관 | 개인정보처리방침 | 책임의 한계와 법적고지 | 회원정보 고객센터</p>
            </div>
                 
        </SignInBox>
    );
}

export default JoinPage;