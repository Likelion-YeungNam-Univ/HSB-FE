import {Link, useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import CardNews from '../components/Main/CardNews';
import styled from "styled-components"
import App from '../App';
import { Cardlist } from 'react-icons/fa';

const MainPage = () => {

    const Wrapper = styled.div`
        padding: 16px;
        width: calc(100% - 32px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;

    const Container = styled.div`
        width: 100%;
        max-width: 720px;
        & > * {
            :not(:last-child) {
                margin-bottom: 16px;
            }
        }
    `;

    const NoticeContainer = styled.div`
        padding: 10px 16px;
        border: 1px solid grey;
        border-radius: 3px;
    `;

    const ApplicationContainer = styled.div`
        
        padding: 10px 16px;
        border: 1px solid grey;
        border-radius: 3px;
    `;


    const CardNewsContainer = styled.div`
        padding: 10px 16px;
        border: 0px solid grey;
        border-radius: 3px;
        background-color: lightgrey;
    `;

    const TitleText = styled.p`
        font-size:28px;
        font-weight: 500;
    `;

    const Vline = styled.p`
        border-right: solid black;
        height: 25vh;
        
    `;


    const ContentText = styled.p`
        font-size: 20px;
        line-height: 32px;
        white-space: pre-wrap;
    `;
    

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