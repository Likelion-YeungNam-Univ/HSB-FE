import React, {useState} from "react";
import { useEffect } from "react";
import { SignInForm } from "../../styles/Login.styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getCookie } from "../../Cookies";

const FindIdForm = () => {

    const navigate = useNavigate();

    const initData = Object.freeze({// freeze-객체를 동결하기 위해서
        nickname: '',
    });
    const [data, updataData] = useState(initData);
    const [color, updataColor] = useState("#b8e8ff")
    const [users, setUsers] = useState();

    useEffect(()=>{
        axios.get('/users/login/auth/',
            {
                headers: {
                Authorization: `Bearer ${getCookie("ACCESS_TOKEN")}`,
                }
            })
            .then((response) => {
                console.log(response.data);
                setUsers(response.data); //받아온 데이터 저장
                
            })
            .catch((error)=>{
            console.log(error);
            alert("일치하는 정보가 없습니다.");
        })

    }, []);

    useEffect(() => {
        if(data.nickname.length > 0) {
            updataColor("#95ddff");
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

    return (
        <SignInForm color={color}>
            {users ? (
                <>
                    <p>{users.id.slice(0,4) + "*".repeat(users.id.length-4)}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
             
            <button className="submitBtn" type="submit" onClick={handleSubmit => navigate("/LoginPage")}>
                로그인하기</button> {/*비밀번호 일치할 경우 메인페이지로 이동하도록 수정*/}
        </SignInForm>
    );
}

export default FindIdForm;

