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
    }], );

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


    // axios.get("/estimates/10/")
    // .then((res) => {
    //     console.log(res);
    // });


    const estimatesRequest = () => {
        axios.get("/estimates/10", {headers: {authorization: `Bearer ${getCookie("ACCESS_TOKEN")}`, 'ngrok-skip-browser-warning': '69420', 
        'Content-Type': 'application/json'}})
        .then((res) => {
            const requestData = {
                estimate_id: res.data.estimate_id,
                user_info: {
                    user_id: res.data.user_id,
                    user_name: res.data.user_name,
                    level: res.data.level
                },
                title: res.data.title,
                created_at: res.data.created_at,
                video: res.data.video,
                content: res.data.content,
                dead_line: res.data.dead_line,
                status: res.data.status
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