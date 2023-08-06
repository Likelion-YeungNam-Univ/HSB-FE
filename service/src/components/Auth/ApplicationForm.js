import React from "react";
import { useNavigate } from "react-router-dom";
import { ContentText, MyPage } from "../../styles/Login.styled";

const ApplicationForm = () => {
    const navigate = useNavigate();

    
    return (
        <MyPage>
            <ContentText>
                <p> 견적신청서</p>
                <hr/>
                <button className="ApplicationBtn" onClick={() => navigate("/EstimatePage")}>
                    온라인 방송 통역 구합니다!
                </button>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                </svg>
                <br/>
                <button className="ApplicationBtn" onClick={() => navigate("/EstimatePage")}>
                    2시간 가량의 다큐멘터리 자막 의뢰합니다.
                </button>
                <i class="bi bi-card-list"></i>
                <br/>
                <button className="ApplicationBtn" onClick={() => navigate("/EstimatePage")}>
                    녹취록 의뢰합니다.
                </button>
                
                <br/>
            </ContentText>  
        </MyPage>
    )
}

export default ApplicationForm;