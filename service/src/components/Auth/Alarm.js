import React from "react";
import { ContentText } from "../../styles/Login.styled";
import { MyPage } from "../../styles/Login.styled";
import { MyPageLogin } from "../../styles/MainPageLoginForm.style";

const Alarm = () => {

    return (
            <MyPage>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" fill="currentColor" class="bi bi-bell" viewBox="-3 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                </svg> 알림
                <p className="MainContent">녹취록 의뢰합니다.</p>
                <p className="SubContent">견적이 종료되었습니다.</p>
                <p className="MainContent">말문희 막힘님이 온라인 방송 통역 구합니다! 입찰을 제안하셨습니다.</p>
            </MyPage>
        
        
    )
}

export default Alarm;