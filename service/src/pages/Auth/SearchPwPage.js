import React from 'react';
import {SearchPwForm} from"componets/Auth";
import { useNavigate } from 'react-router-dom';

const SearchPwPage= () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>말문희막힘</h1>
            <h2>아이디 찾기</h2> 
            <p>고객님의 정보와 일치하는 아이디입니다.</p>   
            <SearchPwForm />        
        </div>
        
    );
};

export default SearchPwPage;