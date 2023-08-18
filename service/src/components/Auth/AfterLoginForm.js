import React from "react";
import { LoginBox } from "../../styles/MainPageLoginForm.style";
import { useNavigate } from "react-router-dom";
import { MyPage } from "../../styles/Login.styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { getCookie } from "../../Cookies";
import { FaUserCircle } from "react-icons/fa";
import { ProfilePicture } from "../../styles/MainPageLoginForm.style"
import styled from "styled-components";

const ProfileSection = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 3px;
`;

const ProfileDetails = styled.div`
    margin-left: 10px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ButtonSection = styled.div`
display: flex;
align-items: center;
margin-top: 10px;
`;

const AfterLoginForm = () => {
    const navigate = useNavigate();

    const [users, setUsers] = useState();

    useEffect(()=>{
        axios.get('/users/login/auth/',
            {
                headers: {
                Authorization: `Bearer ${getCookie("ACCESS_TOKEN")}`,
                }
            })
            .then((response) => {
                console.log(response.data);
                setUsers(response.data); //받아온 데이터 저장
                
            })
            .catch((error)=>{
            console.log(error);
        })

    }, []);

    return (
        <LoginBox>
        <MyPage>
            <ProfileSection>
                <ProfilePicture imageUrl={users?.profileImage}>
                    {users?.profileImage ? (
                        <img className="profile-image" src={users.profileImage} alt="프로필 사진" />
                    ) : (
                        <FaUserCircle className="profile-icon" />
                    )}
                </ProfilePicture>
                <ProfileDetails>
                    <h3>{users?.id}</h3>
                    <p>{users?.email}</p>
                </ProfileDetails>
            </ProfileSection>
            <ButtonSection>
                <button type="submit" className="textBtn" onClick={() => navigate("/ProfileAndContractsPage")}>마이페이지</button>
                <button type="submit" className="btn btn-outline-secondary btn-sm" onClick={() => { navigate('/LoginPage') }}>로그아웃</button>
            </ButtonSection>
        </MyPage>
    </LoginBox>
       
    );
}

export default AfterLoginForm
