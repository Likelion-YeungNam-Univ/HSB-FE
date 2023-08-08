import { useState, useRef, useCallback } from "react";
import styled from "styled-components"
import EstimateHead from "../components/Estimates/EstimateHead";
import EstimateBody from "../components/Estimates/EstimateBody";
import BidList from "../components/Estimates/BidList";
import OfferBid from "../components/Estimates/OfferBid";

const StyledEstimatePage = styled.div`
    display: flex;
    flex-direction: column;
`;
const StyledBody = styled.div`
    display: flex;
    justify-content: center;
`;

const EstimatePage = () =>{
    

    const [requests, setrequests] = useState([
        {id: 1, level: 15, name: "나문희", price: 30000, status: "미정", content: "", },
    ]);

    const nextId = useRef(1);

    const onInsert = useCallback(
        (price, content) => {
            const request = {
                id: nextId.current,
                price,
                content,
            };
            console.log(price);
            console.log(content);

            setrequests(requests => requests.concat(request));
            nextId.current+=1;
        },
        [requests],
    );

    return(
        <StyledEstimatePage>

            <StyledBody>
                <EstimateHead/>
                <EstimateBody/>
            </StyledBody>

            <OfferBid onInsert={onInsert}/>
            <BidList requests={requests}/>

            
        </StyledEstimatePage>
    )
}

export default EstimatePage;