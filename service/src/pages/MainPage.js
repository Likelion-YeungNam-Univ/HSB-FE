import {Link, useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import styled from "styled-components";
import { Wrapper, Container, NoticeContainer,TitleText, CardNewsContainer, MyPage } from '../styles/Login.styled';
import App from '../App';
import MainPageLoginForm from '../components/Auth/MainPageLoginForm';
import { MyPageLogin, SideBarContatiner, ApplicationContainer } from '../styles/MainPageLoginForm.style';
import ApplicationForm from '../components/Auth/ApplicationForm';

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
            <SideBarContatiner>
                <ApplicationContainer> 
                    <ApplicationForm/>
                </ApplicationContainer>
                <br></br>

                <MyPageLogin>
                    <MainPageLoginForm/>                    
                    <hr></hr>
                </MyPageLogin>
                
            </SideBarContatiner>
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