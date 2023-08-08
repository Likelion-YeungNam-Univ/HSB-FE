import React, {useCallback, useState} from "react";
import { useEffect } from "react";
import { SignInForm } from "../../styles/Login.styled";
import { useNavigate } from "react-router-dom";

const JoinForm = () => {

    const navigate = useNavigate();
    const initData = Object.freeze({// freeze-객체를 동결하기 위해서
        name:'',
        email: '',
        nickname: '',
        password1: '',
        password2: '',
    });
    const [data, updataData] = useState(initData);
    const [email, updataEmail] = useState(initData);
    const [nickname, updataNickname] = useState(initData);
    const [password1, updataPassWord] = useState(initData);
    const [password2, setPassWordConfirm] = useState(initData);
    //const[isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false) //유효성 검사
    const [color, updataColor] = useState("#b8e8ff")

    useEffect(() => {
        if( data.name.length > 0 && data.email.length > 0 &&
            data.nickname.length > 0 && data.password1.length > 0 &&
            data.password2.length > 0) {
            updataColor("#95DDFF");
        } else {
            updataColor("#b8e8ff");
        }
    }, [data])

    /*const onSubmit = useCallback(
        async () => {
            e.preventDefault();
            try {
                await axios
                    .post(REGISTER_USERS_URL ,{
                        "user_name": "string",
                        "email": "useaar@example.com",
                        "id": "string",
                        "password": "string",
                    })
                    .then( (res)=> {
                        console.log('response:', res)
                        if(res.status === 200) {
                            Router.push('/LoginPage');
                        }
                    })
            } catch (err) {
                console.error(err)
            }
        }, [email, nickname, password1, password2]
    )

    const onChangePasswordConfirm = useCallback(
        () => {
            const PassWordConfirmCurrent = e.target.value
            setPassWordConfirm(PassWordConfirmCurrent)

            if(password1 === PassWordConfirmCurrent) {
                setPasswordConfirm("비밀번호가 일치합니다.")
                setIsPasswordConfirm(true)
                } else {
                    setPassWordConfirm('비밀번호가 일치하지 않습니다.')
                    setIsPasswordConfirm(false)
                }
        }, [password1]
    )*/

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
             name="name" 
             placeholder="이름" 
             value={data.name}
             required 
             onChange={handleChange}/>
            <input
             type="email" 
             name="email" 
             placeholder="이메일" 
             value={data.email}
             required 
             onChange={handleChange}/>
            <input 
             type="text" 
             name="nickname" 
             placeholder="아이디" 
             value={data.nickname}
             required 
             onChange={handleChange}/>
            <input
             type="password" 
             name="password1" 
             placeholder="비밀번호" 
             value={data.password1}
             required 
             onChange={handleChange}/>
             
             <input
             type="password" 
             name="password2" 
             placeholder="비밀번호 확인" 
             value={data.password2}
             required 
             onChange={handleChange}
            />
             {/*{password2.length > 0 && (
            <span className={`message ${isPasswordConfirm ? 'success' : 'error'}`}>{passwordConfirmMessage}</span>
                )}
             */}
            <button className="submitBtn" type="submit" onClick={handleSubmit => navigate("/")}>회원가입</button>
        </SignInForm>
    );
}

export default JoinForm;

