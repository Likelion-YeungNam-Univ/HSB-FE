import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import img from "../img/HSB.png"
import { styled } from "styled-components";

const StyledCenter = styled.div`
    display: flex;
    justify-content: center;
`;

const ServiceNamePage = (props) => {



    return (
        <>
        <Header/>
        <Nav/>

        <div>
            <img src={img} alt="서비스 설명"></img>
        </div>

        <Footer/>
        </>
    )
}

export default ServiceNamePage;