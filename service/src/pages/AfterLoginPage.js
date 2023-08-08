import {Link, useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import { Wrapper, Container, NoticeContainer,TitleText, CardNewsContainer, MyPage } from '../styles/Login.styled';
import { MyPageLogin, SideBarContatiner, ApplicationContainer } from '../styles/MainPageLoginForm.style';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ApplicationForm from '../components/Auth/ApplicationForm';
import AfterLoginForm from '../components/Auth/AfterLoginForm';
import Alarm from '../components/Auth/Alarm';

const AfterLoginPage = () => {
    
    const navigate = useNavigate();

    const [comment, setComment] = useState("");
    return (
        <Wrapper>
            <Container>
                <Header/>
                <Nav/>
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
                    <AfterLoginForm/>  
                    <hr></hr>
                    <Alarm/>       
                </MyPageLogin>
                
            </SideBarContatiner>
            <br></br>
           
                <CardNewsContainer>
                    <TitleText>
                    배너광고 및 장애인 광고
                    </TitleText>
                </CardNewsContainer>
                <Footer/>
            </Container>
        </Wrapper>

    );
};

export default AfterLoginPage;