import styled from "styled-components";

const LoginBox = styled.div`
height:170px;
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
.line {
    margin:10px auto;
    width:30px;
}
.LoginBtn {
    width: 332px;
    height: 50px;
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
    width: 360px;
    height: 505px;
    float: right;
    border: 1px solid grey;
    margin: -8px 2px 3px -20px;
`;



const ScrollAlarmContainer = styled.div`
    height: 317px; 
    border-top: 1px solid lightgrey;   
    padding: 0px 10px 3px;
    overflow-y: auto;

    .MainContent {
        font-weight: bold;
        font-size:18px;
    }

    .SubContent {
        font-size:16px;
    }

    .text {
        line-height: 40%;
    }

`;

const Scrollbar = styled.div`
    overflow: scroll;
    &::-wdbkit-scrollbar {
        width:300px;
        height:300px;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.4);
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(0,0,0,0.3);
        border-radius: 6px;
    }
`;

const ApplicationContainer = styled.div`
    width: 550px;
    height: 505px;
    float: left;
    margin: 20px 15px 15px 0px;
    border:1px solid grey;
`;

const SideBarContatiner = styled.div`
    width:100%;
    height:75vh;
    `;
    
const ProfilePicture = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    border: 2px solid #ccc;
    box-sizing: border-box;

    .profile-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .profile-icon {
        font-size: 36px;
        color: #ccc;
    }
`;


export {LoginBox, MyPageLogin, SideBarContatiner, ApplicationContainer,ScrollAlarmContainer, Scrollbar, ProfilePicture};