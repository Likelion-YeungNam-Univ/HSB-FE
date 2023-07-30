import React from 'react';
import {FindPwForm} from"componets/Auth";
import { useNavigate } from 'react-router-dom';

const FindPwPage= () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>말문희막힘</h1>
            <h2>비밀번호 찾기</h2> 
            <p>고객님의 정보와 일치하는 비밀번호 입니다.</p>   
            <FindPwForm />        
        </div>
        
    );
};

export default FindPwPage;