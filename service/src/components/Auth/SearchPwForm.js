import React, {useState} from "react";
import axios from "axios";
import { useEffect } from "react";
import { SignInForm } from "../../styles/Login.styled";
import { useNavigate } from "react-router-dom";

const SearchPwForm = () => {

    const navigate = useNavigate();
    
    const initData = Object.freeze({// freeze-객체를 동결하기 위해서
        nickname: '',
        email: '',
    });
    const [data, updataData] = useState(initData);
    const [color, updataColor] = useState("#b8e8ff")

    useEffect(() => {
        if(data.nickname.length > 0 && data.email.length > 0) {
            updataColor("#94ddff");
        } else {
            updataColor("#b8e8ff");
        }
    }, [data])

    axios("/users/recover/password",{

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
    })


    

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

    return (
        <SignInForm color={color}>
            <input 
             type="text" 
             name="nickname" 
             placeholder="아이디" 
             value={data.nickname}
             required 
             onChange={handleChange}/>
            <input
             type="email" 
             name="email" 
             placeholder="이메일" 
             value={data.email}
             required 
             onChange={handleChange}/>
            <button className="submitBtn" type="submit" onClick={handleSubmit => navigate("/ResetPwPage")}>다음</button>
        </SignInForm>
    );
}

export default SearchPwForm;

