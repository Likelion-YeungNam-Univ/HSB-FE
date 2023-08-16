import { useState, useRef, useCallback, useEffect } from "react";
import axios from "axios";
import { getCookie } from "../Cookies";
import styled from "styled-components"
import EstimateHead from "../components/Estimates/EstimateHead";
import EstimateBody from "../components/Estimates/EstimateBody";
import BidList from "../components/Estimates/BidList";
import OfferBid from "../components/Estimates/OfferBid";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const StyledEstimatePage = styled.div`
    display: flex;
    flex-direction: column;
`;
const StyledBody = styled.div`
    display: flex;
    justify-content: center;
`;

const EstimatePage = () =>{

    const [requestDatas, setrequestDatas] = useState([{
        estimate_id: 1,
        user_info: {
            user_id: 0,
            user_name: "나문희",
            level: 0
        },
        title: "string",
        created_at: "time",
        video: "string",
        content: "string",
        dead_line: "string",
        status: 0
    }]);

    const nextId = useRef(1);

    
    const onInsert = useCallback(
        (price, content) => {
            const request = {
                id: nextId.current + 1,
                price,
                content,
            };
            console.log(price);
            console.log(content);
            setrequestDatas(requests => requests.concat(request));
        },
        [requestDatas],
    );
    


    const estimatesRequest = () => {
        axios.get("/estimates/10/",)
        .then((res) => {
            const requestData = {
                estimate_id: 1,
                user_info: {
                    user_id: 0,
                    user_name: "나문희",
                    level: 0
                },
                title: "string",
                created_at: "time",
                video: "string",
                content: "string",
                dead_line: "string",
                status: 0
            };
            console.log(res.data);
            setrequestDatas((requestDatas) => requestDatas.concat(requestData));
        })
        .catch((err) => {
            console.log(err);
        })
    };
    useEffect(() => {
        estimatesRequest();
    }, []);

    

    return(
        <>
            <Header/>
            <Nav/>
        <StyledEstimatePage>

            <StyledBody>
                <EstimateHead/>
                <EstimateBody/>
            </StyledBody>
            
            <BidList requests={requestDatas}/>
            
            <OfferBid onInsert={onInsert}/>
            
            
        </StyledEstimatePage>
            <Footer/>
        </>
    )
}

export default EstimatePage;