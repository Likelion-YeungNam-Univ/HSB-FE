import React, {useState} from "react";
import { useEffect } from "react";
import { SignInForm } from "../../styles/Login.styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FindIdForm = () => {

    const navigate = useNavigate();

    const initData = Object.freeze({// freeze-객체를 동결하기 위해서
        nickname: '',
    });
    const [data, updataData] = useState(initData);
    const [color, updataColor] = useState("#b8e8ff")

    useEffect(() => {
        if(data.nickname.length > 0) {
            updataColor("#95ddff");
        } else {
            updataColor("#b8e8ff");
        }
    }, [data])

    const FindId = () => { //아이디를 찾기 위해 이메일 요청 api
        axios("/users/recover/id", {
            "email" : "qwer1234@naver.com"
        })
        .then(res => {
            console.log(res.data.username);
        })
        .catch(err => {
            console.log(err);
        })
    }

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
             {/*<div>
                {data ? `ID는 ${
                    data.data.username.slice(0,4) + "*".repeat(data.data.username.length-4)
                }입니다` : null }
            </div>*/}
             
            <button className="submitBtn" type="submit" onClick={handleSubmit => navigate("/LoginPage")}>
                로그인하기</button> {/*비밀번호 일치할 경우 메인페이지로 이동하도록 수정*/}
        </SignInForm>
    );
}

export default FindIdForm;

