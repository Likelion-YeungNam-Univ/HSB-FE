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

    const FindPw = e => {
        e.preventDefault();

        axios.post("/users/recover/password/",{
            "user_email": data.email,
            "id": data.nickname
        })
        .then(res => {
            console.log(res.data)
            if(res.status === 200) {
                alert("비밀번호 변경 창으로 넘어가겠습니다.") 
                console.log(res.data.email);
                console.log(res.data.id);
                return navigate("/ResetPwPage")
            } else if(res.status === 400) {
                alert("사용자 정보가 없습니다.")
            }
            
        })
        .catch(err => {
            console.log(err);
            console.log("Error status:", err.response.status);
                console.log("Error data:", err.response.data);
            alert("정보가 일치하지 않습니다.");
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
            <input
             type="email" 
             name="email" 
             placeholder="이메일" 
             value={data.email}
             required 
             onChange={handleChange}/>
            <button className="submitBtn" type="submit" onClick={FindPw}>다음</button>
        </SignInForm>
    );
}

export default SearchPwForm;

