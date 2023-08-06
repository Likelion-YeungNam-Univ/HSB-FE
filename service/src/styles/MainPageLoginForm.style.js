import styled from "styled-components";

const LoginBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
.bottom-signup {
    font-size: 14px;
    display: flex;
    gap: 10px;
    margin-top: 130px;
}
.LoginBtn {
    width: 30vh;
    height: 40px;
    font-size: 16px;
    font-weight: 700;
    color: black;
    border: none;
    border-radius: 5px;
    background-color: #95ddff;
    box-shadow: 0px 2px 12px -3px rgba(0, 0, 0, 0.1);
    margin-top: 16px;    
}
    `;

const MyPageLogin = styled.div`
    width: 36vh;
    height: 35vh;
    float: right;
    border: 1px solid grey;
    margin: -3px 2px 3px -20px;
`;

const ApplicationContainer = styled.div`
    width: 60vh;
    height: 35vh;
    float: left;
    margin: 20px 15px 0px 0px;
    border: 1px solid grey;
`;

const SideBarContatiner = styled.div`
    width:100%;
    height:40vh;
    border: 0px solid black;
`;


export {LoginBox, MyPageLogin, SideBarContatiner, ApplicationContainer};