import {Link, useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import CardNews from '../components/Main/CardNews';
import styled from "styled-components"

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