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

const EstimatePage = ({estimate_id}) =>{
    const [requestData, setrequestData] = useState({
        estimate_id: 10,
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
    });
    const [bidDatas, setBidDatas] = useState([
        {
          offer_id: 1,
          user: {
            user_id: 14,
            user_name: "나문희"
          },
          content: "반갑습니다! 50000원에 하시죠!ㅋ",
          price: 50000,
          status: 0
        },
        {
          offer_id: 2,
          user: {
            user_id: 13,
            user_name: ""
          },
          content: "string",
          price: 0,
          status: 0
        }
      ]);

    // const [title, setTitle] = useState("");
    
     const nextId = useRef(1);


    const estimatesRequest = () => {
        axios.get("/estimates/10/")
        .then((res) => {
            const data = {
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
        axios.get("/estimates/offers/10/")
        .then((res) => {
            const bidData = {
                offer_id: 1,
                user: {
                  user_id: 14,
                  user_name: "나문희"
                },
                content: "반갑습니다! 50000원에 하시죠!ㅋ",
                price: 50000,
                status: 0
              };
            console.log(res.data);
            setBidDatas((bidDatas) => bidDatas.concat(bidData));
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
            console.log(price);
            console.log(content);
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
                <EstimateHead title={requestData.title}/>
                <EstimateBody/>
            </StyledBody>
            
            <BidList requests={requestData}/>
            
            <OfferBid onInsert={onInsert}/>
            
            
        </StyledEstimatePage>
            <Footer/>
        </>
    )
}

export default EstimatePage;