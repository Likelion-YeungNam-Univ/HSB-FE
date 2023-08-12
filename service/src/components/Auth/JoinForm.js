import React, {useCallback, useState} from "react";
import { useEffect } from "react";
import { SignInForm } from "../../styles/Login.styled";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const JoinForm = () => {

    const navigate = useNavigate();
    const initData = Object.freeze({// freeze-객체를 동결하기 위해서
        name:'',
        email: '',
        nickname: '',
        pswd: '',
        checkPswd: '',
    });
    const [data, updataData] = useState(initData);
    const [email, updataEmail] = useState(initData);
    const [nickname, updataNickname] = useState(initData);
    const [pswd, setPswd] = useState(initData);//비밀번호
    const [checkPswd, setCheckPswd] = useState(initData);

    const [pswdMessage, setPswdMessage] = useState("");
    const [checkPswdMessage, setCheckPswdMessage] = useState("");//비밀번호오류메세지 상태

    const [isPswd, setIsPswd] = useState(false);
    const [isCheckPswd, setIsCheckPswd] = useState(false);//비밀번호 유효성 검사
    const [color, updataColor] = useState("#b8e8ff")

    useEffect(() => {
        if( data.name.length > 0 && data.email.length > 0 &&
            data.nickname.length > 0 && data.pswd.length > 0 &&
            data.checkPswd.length > 0) {
            updataColor("#95DDFF");
        } else {
            updataColor("#b8e8ff");
        }
    }, [data])

    const onChangePwConfirm = (e) => {
        const currentPw = e.target.value;
        setCheckPswd(currentPw);

        if(pswd !== currentPw) {
            setCheckPswdMessage("비밀번호가 일치하지 않습니다.");
            setIsCheckPswd(false);
        } else {
            setCheckPswdMessage("비밀번호 일치");
            setIsCheckPswd(true);
        }

    };

    {/*const onSubmit = useCallback(
        async (e) => {
            e.preventDefault();
            try {
                await axios
                    .post('/users',{
                        user_name: data.name,
                        email: data.email,
                        id: data.nickname,
                        password: data.password1
                    })
                    .then((res)=> {
                        console.log('response:', res)
                        // if(res.status === 200) {
                        //     Router.push('/LoginPage');
                        // }
                    })
            } catch (err) {
                console.error(err)
            }
        }, [email, nickname, checkPswd, pswd]
    )

    const onChangePswd = (e) => {
        setPswd(e.target.value);
      };

      useEffect(() => {
        // pswd의 길이가 0을 넘어갔을 때부터 실행되게 함
        // 그렇지 않으면 첫 랜더링때부터 pswdMessage가 보이게됨.
        if (pswd.length > 0) {
          // onChangePwsd에서 나왔으므로 e.target.value로 state를 업데이트할 수 없음
          // 따라서 다음과 같은 방식으로 state를 업데이트 함
          setPswd((currentValue) => currentValue);
    
          const pswdRegEx = '/^(?=.*[a-zA-Z])(?=.*[!@#$%^])(?=.*[0-9]).{8,25}$/';
    
          if (!pswdRegEx.test(pswd)) {
            setPswdMessage(
              "숫자+영문+특수문자(!,@,#,$,%,^) 조합으로 입력해주세요."
            );
            setIsPswd(false);
          } else {
            setPswdMessage("비밀번호가 정상적으로 입력되었습니다.");
            setIsPswd(true);
          }
        }
      }, [pswd]);

    const onChangeCheckPswd = (e) => {
        setCheckPswd(e.target.value);
    };

    useEffect(() => {
        // checkPswd의 길이가 0을 넘어갔을 때부터 실행되게 함
        // 그렇지 않으면 첫 랜더링때부터 checkPswdMessage가 보이게됨.
        if (checkPswd.length > 0) {
          // onChangePwsd에서 나왔으므로 e.target.value로 state를 업데이트할 수 없음
          // 따라서 다음과 같은 방식으로 state를 업데이트 함
          setCheckPswd((currentValue) => currentValue);
    
          if (pswd !== checkPswd) {
            setCheckPswdMessage("맞게 입력했는지 다시 확인해주세요.");
            setIsCheckPswd(false);
          } else {
            setCheckPswdMessage("비밀번호 확인이 완료되었습니다.");
            setIsCheckPswd(true);
          }
        }
      }, [checkPswd]);*/}

    


    const handleChange = (e) => {
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
             name="pswd" 
             placeholder="비밀번호"
             onChange={handleChange} 
             value={data.pswd}
             required/>

             
             <input
             type="password" 
             name="checkPswd" 
             placeholder="비밀번호 확인" 
             value={data.checkPswd}
             onChange={onChangePwConfirm}
             required/>
             <p>{checkPswdMessage}</p>
             {/*비밀번호확인 입력안됨*/}

            <button className="submitBtn" type="submit" onClick={()=>navigate("/LoginPage")}>회원가입</button>
            {/* handleSubmit => navigate("/") */}
        </SignInForm>
    );
}

export default JoinForm;

