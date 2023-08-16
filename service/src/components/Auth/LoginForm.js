import React, {useState} from "react";
import { useEffect } from "react";
import { SignInForm } from "../../styles/Login.styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setCookie } from "../../Cookies";

const LoginForm = () => {

    const navigate = useNavigate();

    const initData = Object.freeze({// freeze-객체를 동결하기 위해서
        id: '',
        password: '',
    });
    const [data, updataData] = useState(initData);
    const [color, updataColor] = useState("#b8e8ff")

    useEffect(() => {
        if(data.id.length > 0 && data.password.length > 0) {
            updataColor("#95ddff");
        } else {
            updataColor("#b8e8ff");
        }
    }, [data])


    const loginDB = (e) => { //로그인 api 호출
        e.preventDefault();

        axios.post("/users/login/tokens/", {
            "id": data.id,
            "password": data.password 
        })      
        .then(res => {//요청 성공했을 경우
            const accessToken = res.data.access
            console.log(accessToken);

            setCookie("ACCESS_TOKEN", `${accessToken}`); 
            console.log(res.data.access);
            console.log(res.data.refresh);
            
            alert("로그인 되었습니다.");
            return navigate("/", {
                state: {
                    check: true,
                    id: "aaa",
                    name: "aaa",
                }
            });
        })
        .catch(err => {//요청 실패했을 경우
            console.log(err);
            alert("회원정보가 없습니다.");
        })
    }

    const estimateLogin = e => {
        axios.post("/estimates/", {
            "title": "세번째 게시글입니다!",
            "content": "저 자막필요해요~~~",
            "dead_line": "2023-08-20T13:36:30.413Z",
            "status": 0 },
        { 
            headers: {
                
            }
        })
        .then(res => {

        })
        .catch(err => {

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
             name="id" 
             placeholder="아이디" 
             value={data.id}
             required 
             onChange={handleChange}/>
            <input
             type="password" 
             name="password" 
             placeholder="비밀번호" 
             value={data.password}
             required 
             onChange={handleChange}/>
             
            <button className="submitBtn" type="submit" onClick={loginDB}>
                로그인</button> {/*비밀번호 일치할 경우 메인페이지로 이동하도록 수정*/}

                {/* handleSubmit => navigate("/AfterLoginPage") */}
        </SignInForm>
    );
}

export default LoginForm;