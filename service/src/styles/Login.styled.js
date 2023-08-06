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
    .ApplicationBtn {
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

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
        color: #95ddff;
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
`;

const CardNewsContainer = styled.div`
    padding: 10px 16px;
    border: 0px solid grey;
    background-color: lightgrey;
`;

const TitleText = styled.p`
    font-size:28px;
    font-weight: 500;
`;


const ContentText = styled.p`
    font-size: 17px;
    line-height: normal;
    white-space: pre-wrap;
`;

const SignInForm = styled.form`
        background-color: #f8f8f8; 
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 16px;

        input {
            border: none;
            width: 275px;
            height: 48px;
            border-radius: 3px;
            padding-left: 20px;
        }

        .submitBtn {
            width: 295px;
            height: 56px;
            font-size: 16px;
            font-weight: 700;
            color: #ffffff;
            border: none;
            border-radius: 3px;
            background-color: ${(props) => props.color  || "#C9C9C9"};

            box-shadow: 0px 2px 12px -3px rgba(0, 0, 0, 0.1);
            margin-top: 16px;    
        }
    `;

export {Wrapper, Container, NoticeContainer, CardNewsContainer, TitleText, ContentText, SignInBox, MyPage, SignInForm};
