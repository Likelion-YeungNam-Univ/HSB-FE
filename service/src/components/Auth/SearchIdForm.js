import React, {useState} from "react";
import { useEffect } from "react";
import { SignInForm } from "../../styles/Login.styled";
import { useNavigate } from "react-router-dom";

const SearchIdForm = () => {

    const navigate = useNavigate();
    
    const initData = Object.freeze({// freeze-객체를 동결하기 위해서
        email: ''
    });

    const [data, updataData] = useState(initData);
    const [color, updataColor] = useState("#b8e8ff")

    useEffect(() => {
        if(data.email.length > 0) {
            updataColor("#94ddff");
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
             type="text" 
             name="email" 
             placeholder="이메일" 
             value={data.email}
             required 
             onChange={handleChange}/>
            <button className="submitBtn" type="submit" onClick={handleSubmit => navigate("/FindIdPage")}>로그인하기</button>
        </SignInForm>
    );
}

export default SearchIdForm;

