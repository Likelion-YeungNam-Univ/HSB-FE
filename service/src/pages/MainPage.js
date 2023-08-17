import {Link, useNavigate} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import { Wrapper, Container, NoticeContainer,TitleText, CardNewsContainer, MyPage } from '../styles/Login.styled';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import MainPageLoginForm from '../components/Auth/MainPageLoginForm';
import { MyPageLogin, SideBarContatiner, ApplicationContainer, ScrollAlarm } from '../styles/MainPageLoginForm.style';
import ApplicationForm from '../components/Auth/ApplicationForm';
import Banner1 from "../img/Banner1.png"
import AfterLoginPage from './AfterLoginPage';
import AfterLoginForm from '../components/Auth/AfterLoginForm';
import Alarm from '../components/Auth/AlarmForm';
import {useLocation} from 'react-router-dom';
import axios from 'axios';
import { getCookie } from '../Cookies';

const MainPage = () => {
    
    const navigate = useNavigate();
    const [check, setCheck] = useState(false);
    const [name, setName] = useState("");
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.check !== undefined) {
            setCheck(location.state.check);
            setName(location.state.name);
        }
    }, [location.state]);

    

    const [comment, setComment] = useState("");


    const [posts, setPosts] = useState([]);

    const estimateData = useEffect(() => {
        axios.get("/estimates/")
        .then((res) => {
            console.log(res);
            setPosts(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    
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
                    <ApplicationForm posts={posts}/>
                </ApplicationContainer>
                <br></br>

                <MyPageLogin>
                    {check ?
                    <>
                    <AfterLoginForm/>
                    <Alarm/>
                    </>
                    :
                    <>
                    <MainPageLoginForm/>
                    <hr/>
                    </>
                    }
                </MyPageLogin>
                
            </SideBarContatiner>
            <br></br>

            </Container>
        </Wrapper>

        <Footer/>
        </>
    )
}

export default MainPage;