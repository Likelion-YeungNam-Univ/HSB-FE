import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from "../components/Header";
import QuoteCreationForm from "../components/QuoteCreation/QuoteCreationForm";
import axios from 'axios';
import { getCookie } from '../Cookies';

const QuoteCreationPage = () => {
    const navigate = useNavigate(); 

    const handleSubmit = async (formData) => {
        try {
            const { year, month, day, ...rest } = formData;
            const dead_line = new Date(`${year}-${month}-${day}`).toISOString();

            const updatedFormData = { ...rest, dead_line };
            console.log(updatedFormData);
            // const validated_data = {
            //     title : "aaa" ,
            //     content: "aaa",                
            //     dead_line: "2000-01-01T00:00:00.000Z",
            //     status: 0
                
            // }

            await axios.post('estimates/',  updatedFormData,{
                headers: {
                Authorization: `Bearer ${getCookie("ACCESS_TOKEN")}`,
                },
                }
            );

            alert("견적요청이 제출되었습니다!");
            
            // useNavigate를 사용하여 EstimateRequestListPage로 이동 
            navigate("/EstimateRequestListPage");
        } catch (error) {
            console.error("견적 제출 중 오류:", error.response.data);
        }
    };

    return (
        <div>
            <Header />
            <main style={{ width: '900px', margin: '0 auto' }}>
                <QuoteCreationForm onSubmit={handleSubmit} />
            </main>
        </div>
    )
}

export default QuoteCreationPage;

