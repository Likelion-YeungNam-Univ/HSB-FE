import {Link, useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import styled from "styled-components";
import { Wrapper, Container, NoticeContainer,TitleText, CardNewsContainer, MyPage } from '../styles/Login.styled';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import MainPageLoginForm from '../components/Auth/MainPageLoginForm';
import { MyPageLogin, SideBarContatiner, ApplicationContainer } from '../styles/MainPageLoginForm.style';
import ApplicationForm from '../components/Auth/ApplicationForm';

const MainPage = () => {
    
    const navigate = useNavigate();


    const [comment, setComment] = useState("");
    return (
        <>
        <Header/>
        <Nav/>

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
                <br/>

            </Container>
        </Wrapper>

        <Footer/>
        </>
    );
};

export default MainPage;