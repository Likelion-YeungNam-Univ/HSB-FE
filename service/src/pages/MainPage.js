import {Link, useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import styled from "styled-components";
import { Wrapper, Container, NoticeContainer,TitleText, CardNewsContainer, MyPage } from '../styles/Login.styled';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import MainPageLoginForm from '../components/Auth/MainPageLoginForm';
import { MyPageLogin, SideBarContatiner, ApplicationContainer, ScrollAlarm } from '../styles/MainPageLoginForm.style';
import ApplicationForm from '../components/Auth/ApplicationForm';
import Alarm from '../components/Auth/AlarmForm';
import Banner from "../img/Banner.png"

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
                    {/*<img className="img" src={Banner} alt="Banner"></img>*/}
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

            </Container>
        </Wrapper>

        <Footer/>
        </>
    );
};

export default MainPage;