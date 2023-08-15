import {Link, useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import { Wrapper, Container, NoticeContainer,TitleText, CardNewsContainer, MyPage } from '../styles/Login.styled';
import { MyPageLogin, SideBarContatiner, ApplicationContainer } from '../styles/MainPageLoginForm.style';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ApplicationForm from '../components/Auth/ApplicationForm';
import AfterLoginForm from '../components/Auth/AfterLoginForm';
import Alarm from '../components/Auth/AlarmForm';
import Banner1 from '../img/Banner1.png';

const AfterLoginPage = () => {
    
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
                    <AfterLoginForm/> 
                    <Alarm/>       
                </MyPageLogin>
                
            </SideBarContatiner>
            <br></br>
                
            </Container>
        </Wrapper>
        
        <Footer/>
        </>
    );
};

export default AfterLoginPage;