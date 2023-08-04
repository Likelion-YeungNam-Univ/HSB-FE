import React, {useState} from "react";
import { useEffect } from "react";
import styled from "styled-components";

const LoginForm = () => {
    const initData = Object.freeze({// freeze-객체를 동결하기 위해서
        nickname: '',
        password: '',
    });
    const [data, updataData] = useState(initData);
    const [color, updataColor] = useState("#4ac2f3");

    useEffect(() => {
        if(data.nickname.length > 0 && data.password.length > 0) {
            updataColor("#87e0ff");
        } else {
            updataColor("#94dbf8");
        }
    }, [data])

    const handleChange = e => {
        console.log(e.target.value);
        updataData({
            ...data, [e.target.name]: e.target.value.trim()
        })
    }

    const handleSubmit = e => {
        e.preventDefault(); //새로고침방지
        console.log(e.target.value);
    }

    const SignInForm = styled.form`
        background-color: #f8f8f8; 
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 16px;

        input {
            border: none;
            width: 275px;
            height: 48px;
            border-radius: 5px;
            padding-left: 20px;
        }

        .submitBtn {
            width: 295px;
            height: 56px;
            font-size: 16px;
            font-weight: 700;
            color: #ffffff;
            border: none;
            border-radius: 5px;
            background-color: ${(props) => props.color || "#C9C9C9"};
            box-shadow: 0px 2px 12px -3px rgba(0, 0, 0, 0.1);
            margin-top: 16px;    
        }
    `;

    return (
        <SignInForm color={color}>
            <input 
             type="text" 
             name="nickname" 
             placeholder="아이디" 
             required 
             onChange={handleChange}/>
            <input
             type="password" 
             name="password" 
             placeholder="비밀번호" 
             required 
             onChange={handleChange}/>
            <button className="submitBtn" type="submit" onClick={handleSubmit}>로그인하기</button>
        </SignInForm>
    );
}

export default LoginForm;

