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
import { useParams } from "react-router-dom";

const StyledEstimatePage = styled.div`
    display: flex;
    flex-direction: column;
`;
const StyledBody = styled.div`
    display: flex;
    justify-content: center;
`;

const EstimatePage = () =>{

    const [requestData, setrequestData] = useState({
        estimate_id: 10,
        user_info: {
            user_id: 0,
            user_name: "",
            level: 0
        },
        title: "",
        created_at: "",
        video: "",
        content: "",
        dead_line: "",
        status: 0
    });
    const [bidDatas, setBidDatas] = useState([]);
    
    const nextId = useRef(1);

    const {id} =useParams();

    const estimatesRequest = () => {
        axios.get(`/estimates/${id}`)
        .then((res) => {
            const data = {
                estimate_id: res.data.estimate_id,
                user_info: {
                    user_id: res.data.user_info.user_id,
                    user_name: res.data.user_info.user_name,
                    level: res.data.user_info.level
                },
                title: res.data.title,
                created_at: res.data.created_at,
                video: res.data.video,
                content: res.data.content,
                dead_line: res.data.dead_line,
                status: res.data.status
            };
            //console.log(res.data);
            setrequestData(data);
        })
        .catch((err) => {
            console.log(err);
        })
    };
    useEffect(() => {
        estimatesRequest();
    }, []);

    const offerBid = () => {
        axios.get(`/offers/${id}`)
        .then((res) => {
            const bidData = res.data.map(item => ({
                offer_id: item.offer_id,
                user: {
                    user_id: item.user.user_id,
                    user_name: item.user.user_name,
                    level: item.user.level
                },
                content: item.content,
                price: item.price,
                status: item.status
            }));

            setBidDatas((prevBidDatas) => [...prevBidDatas, ...bidData]);
            //console.log(bidData);
        })
        .catch((err) => {
            console.log(err);
        })
    };
    useEffect(() => {
        offerBid();
    }, []);


    const onInsert = useCallback(
        (price, content) => {
            const request = {
                id: nextId.current + 1,
                price,
                content,

            };
            //console.log(price);
            //console.log(content);
            setBidDatas(requests => requests.concat(request));
        },
        [bidDatas],
    );



    return(
        <>
            <Header/>
            <Nav/>
        <StyledEstimatePage>

            <StyledBody>
                <EstimateHead title={requestData.title} created_at={requestData.created_at} user_name={requestData.user_info.user_name}/>
                <EstimateBody status={requestData.status} content={requestData.content} dead_line={requestData.dead_line}/>
            </StyledBody>
            
            <BidList requests={bidDatas}/>
            
            <OfferBid onInsert={onInsert}/>
            
            
        </StyledEstimatePage>
            <Footer/>
        </>
    )
}

export default EstimatePage;