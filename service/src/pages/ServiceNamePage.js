import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import img from "../img/HSB.png"


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