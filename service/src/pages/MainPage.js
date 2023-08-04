import {Link, useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import styled from "styled-components";
import { Wrapper, Container, NoticeContainer, ApplicationContainer,TitleText, Vline, CardNewsContainer, MyPage } from '../styles/Login.styled';
import App from '../App';

const MainPage = () => {
    
    const navigate = useNavigate();


    const [comment, setComment] = useState("");
    return (
        <Wrapper>
            <Container>
                <NoticeContainer>
                    <TitleText>
                        공지사항
                    </TitleText>
                </NoticeContainer>
                <br></br>
                <ApplicationContainer>
                    <Vline>
                        <p>견적신청서</p><hr></hr>
                        <p>온라인 방송 통역 구합니다!</p>
                        <i class="bi bi-card-list"></i> {/* 수정해볼것 */}
                        <p>2시간 가량의 다큐멘터리 자막 의뢰합니다.</p>
                        <p>녹취록 의뢰합니다.</p>
                    </Vline>
                    
                </ApplicationContainer>
                <br></br>

                <MyPage>
                    <NoticeContainer>
                    <p>000을 통해서 원하는 영상의 소리를 볼 수 있습니다.</p>
                    
                    <div className="bottom-signup">
                        <button className="LoginBtn" onClick={() => navigate("/LoginPage")}>로그인하기</button> 
                        <button className="FindIdBtn" onClick={() => navigate("/SearchIdPage")}>아이디 찾기</button>
                        <button className="FindPwBtn" onClick={() => navigate("/SearchPwPage")}>비밀번호 찾기</button>
                        <button className="registerBtn" onClick={()=>navigate("/JoinPage")}>회원가입</button>
                    </div>
                    <hr></hr>
                    </NoticeContainer>
                    

                    
                </MyPage>

                <br></br>
                <CardNewsContainer>
                    <TitleText>
                    배너광고 및 장애인 광고
                    </TitleText>
                </CardNewsContainer>
            </Container>
        </Wrapper>

    );
};

export default MainPage;