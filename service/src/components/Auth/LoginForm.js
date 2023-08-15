import React, {useState} from "react";
import { useEffect } from "react";
import { SignInForm } from "../../styles/Login.styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";


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
            updataColor("#95DDFF");
        } else {
            updataColor("#b8e8ff");
        }
    }, [data])

    const loginDB = (id, password) => { //로그인 api 호출
        axios.post("/users/login/tokens/", {
            "id": "qwer1234",
            "password": "qwer1234"  
        })
        .then(res => {//요청 성공했을 경우
            //window.alert(res.data.result);
            console.log(res.data.refresh);
            console.log(res.data.access);
            //console.log(res.data.code);
            if(res.success) {
                //console.log(res);
                navigate('/MainPage');
            } 
        })
        .catch(err => {//요청 실패했을 경우
            console.log(err);
            alert("회원정보가 없습니다.");
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


    };


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
             
            <button className="submitBtn" type="submit" onClick={loginDB}> 로그인</button>
                {/*handleSubmit => navigate("/AfterLoginPage")}>*/}
                 {/*비밀번호 일치할 경우 메인페이지로 이동하도록 수정*/}
        </SignInForm>
        
    );
}
    


export default LoginForm;

