import React from 'react';
import {SearchIdForm} from"componets/Auth";
import { useNavigate } from 'react-router-dom';

const SearchIdPage= () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>말문희막힘</h1> 
            <p>아이디를 찾고자 하는 이메일을<br></br>
                 입력해주세요.</p>
            <SearchIdForm />        
        </div>
        
    );
};

export default SearchIdPage;