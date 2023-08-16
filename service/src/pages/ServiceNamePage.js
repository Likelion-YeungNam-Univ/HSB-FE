import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import img from "../img/HSB.png"
import { styled } from "styled-components";

const StyledCenter = styled.div`
    display: flex;
    justify-content: center;
`;
const StyledImg = styled.img`
    height: 1850px;
    width: 940px;
    background-size: contain;
`;

const ServiceNamePage = () => {

    return (
        <>
        <Header/>
        <Nav/>

        <StyledCenter>
            <StyledImg src={img} alt="서비스 설명"/>
        </StyledCenter>

        <Footer/>
        </>
    )
}

export default ServiceNamePage;