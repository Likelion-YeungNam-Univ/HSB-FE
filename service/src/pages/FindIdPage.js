import React from "react";
import {useNavigate} from 'react-router-dom';
import FindIdForm from "../components/Auth/FindIdForm";
import { SignInBox} from "../styles/Login.styled";
import axios from "axios";

const FindIdPage = () => {
    const navigate = useNavigate();

    axios("/users/recover/id", {
        "email" : "qwer1234@naver.com"
    })
    .then(res => {
        console.log(res.data.email);
    })
    .catch(err => {
        console.log(err);
    })

    return (
        <SignInBox>
            <h2 className="title">HEAR AND SCRIBE</h2>
            <h3>아이디 찾기</h3>
            <p>고객님의 정보와 일치하는 아이디 입니다.</p>
            <FindIdForm/>
                 
        </SignInBox>
    );
}

export default FindIdPage;