import {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import EstimateRequestList from "../components/Estimates/EstimateRequestList";
import EstimateRequestListNumbers from "../components/Estimates/EstimateRequestListNumbers";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { getCookie } from "../Cookies";

const StyledCenter = styled.div`
    display: flex;
    justify-content: center;
`;
const StyledEstimateRequestListPage = styled.div`
    width: 940px;
    display: flex;
    flex-direction: column;
`;
const StyledLine = styled.div`
    width: 940px;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
`;
const StyledButton = styled.button`
    background-color: #95DDFF;
    border: 1px solid #95DDFF;
    border-radius: 5px;
    font-size: 17px;
    font-weight: bold;
    padding: 5px 10px;
`;
const StyledWidth = styled.div`
    width: 940px;
    display: flex;
    justify-content: center;
`;
const StyledListNumbersWidth = styled.div`
    width: 940px;
    display: flex;
    justify-content: center;
    {/*margin: 10px 0px -10px 0px;*/}
    margin-top: 20px;
`;

const EstimateRequestListPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    

    {/*
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await axios.get("/estimates/");
            setPosts(response.data);
            setLoading(false);
        };
        fetchData();
    }, []);
    */}

    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = (posts) => {
        let currentPosts = 0;
        currentPosts = posts.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    };


    const fetchData = () => {
        axios.get("/estimates/", {/*{headers: {authorization: `Bearer ${getCookie("ACCESS_TOKEN")}`,}}*/})
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    };
    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            <Header/>
            <Nav/>

            <StyledCenter>
                <StyledEstimateRequestListPage>

                    <StyledLine>
                        <StyledButton>견적 작성</StyledButton>
                    </StyledLine>

                    <StyledWidth>
                        <EstimateRequestList posts={posts} loading={loading}/>
                    </StyledWidth>

                    <StyledListNumbersWidth>
                        <EstimateRequestListNumbers postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage}/>
                    </StyledListNumbersWidth>
                
                </StyledEstimateRequestListPage>
            </StyledCenter>

            <Footer/>
        </>
    )
}

export default EstimateRequestListPage;