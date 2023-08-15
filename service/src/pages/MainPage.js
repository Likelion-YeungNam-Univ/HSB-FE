import {Link, useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import { Wrapper, Container, NoticeContainer,TitleText, CardNewsContainer, MyPage } from '../styles/Login.styled';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import MainPageLoginForm from '../components/Auth/MainPageLoginForm';
import { MyPageLogin, SideBarContatiner, ApplicationContainer, ScrollAlarm } from '../styles/MainPageLoginForm.style';
import ApplicationForm from '../components/Auth/ApplicationForm';
import Banner1 from "../img/Banner1.png"

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
                    <img className="img" src={Banner1} alt="Banner1"></img>
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