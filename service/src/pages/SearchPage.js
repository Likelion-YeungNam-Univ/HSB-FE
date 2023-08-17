import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
import EstimateRequestList from "../components/Estimates/EstimateRequestList";
import EstimateRequestListNumbers from "../components/Estimates/EstimateRequestListNumbers";
import Footer from "../components/Footer";
import StateBox from "../components/Estimates/StateBox";

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
    margin-bottom: 20px;
`;
const StyledBox = styled.div`
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

const SearchPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = (posts) => {
        let currentPosts = 0;
        currentPosts = posts.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    };


    const titles = [
        {id: 0, current: "제목"},
        {id: 1, current: "게시글"},
        {id: 2, current: "글작성자"}
    ];
    const estimates = [
        {id: 0, current: "견적요청"},
        {id: 1, current: "커뮤니티"},
        {id: 2, current: "FAQ"}
    ];


    const fetchData = useEffect(() => {
        axios.get("/estimates/")
        .then((res) => {
            console.log(res);
            setPosts(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);


    return (
        <>
            <Header/>
            <Nav/>

            <StyledCenter>
                <StyledEstimateRequestListPage>

                    <StyledLine>
                        <StateBox states={titles}/>
                        <StateBox states={estimates}/>
                    </StyledLine>

                    <StyledWidth>
                        <EstimateRequestList posts={posts}/>
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

export default SearchPage;