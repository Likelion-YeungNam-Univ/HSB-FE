import styled from "styled-components";


const SignInBox = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    .bottom-signup {
        font-size: 14px;
        display: flex;
        gap: 10px;
        margin-top: 130px;
    }
`;

const MyPage = styled.div`
    .bottom-signup {
        font-size :14px;
        gap: 10px;
    }

    .LoginBtn {
        display: flex;
        backgroundcolor: #94dbf8;
        fontcolor: white;
    }

    .FindIdBtn {
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    .FindPwBtn {
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    .registerBtn {
        color: #87e0ff;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
`;

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

export {Wrapper, Container, NoticeContainer, ApplicationContainer, CardNewsContainer, TitleText,Vline, ContentText, SignInBox, MyPage};
