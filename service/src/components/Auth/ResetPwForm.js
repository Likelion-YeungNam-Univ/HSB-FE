import React, {useState} from "react";
import { useEffect } from "react";
import { SignInForm } from "../../styles/Login.styled";
import { useNavigate } from "react-router-dom";

const ResetPwForm = () => {

    const navigate = useNavigate();
    const initData = Object.freeze({// freeze-객체를 동결하기 위해서
        password1: '',
        password2: '',
    });
    const [data, updataData] = useState(initData);
    const [color, updataColor] = useState("#b8e8ff")

    useEffect(() => {
        if(data.password1.length > 0 && data.password2.length > 0) {
            updataColor("95DDFF");
        } else {
            updataColor("#b8e8ff");
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

    return (
        <SignInForm color={color}>
            <input 
             type="password" 
             name="password1" 
             placeholder="새 비밀번호" 
             value={data.password1}
             required 
             onChange={handleChange}/>
            <input
             type="password" 
             name="password2" 
             placeholder="비밀번호" 
             value={data.password2}
             required 
             onChange={handleChange}/>
            <button className="submitBtn" type="submit" onClick={(_handleSubmit) => navigate("/LoginPage")}>로그인하기</button>
        </SignInForm>
    );
}

export default ResetPwForm;