import {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import EstimateRequestList from "../components/Estimates/EstimateRequestList";
import EstimateRequestListNumbers from "../components/Estimates/EstimateRequestListNumbers";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const StyledEstimateRequestListPage = styled.div`
    display: flex;
    flex-direction: column;
`;
const StyledTitle = styled.div`
    display: flex;
    justify-content: center;
`;
const StyledLine = styled.div`
    display: flex;
    justify-content: space-between;
    width: 700px;
    padding: 0px 50px 0px 20px;
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
            const response = await axios.get("");
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

    return (
        <>
            <Header/>
            <Nav/>

            <div> {/* display: flex, justify-content: center */}
                <div> {/* 안에 있는거 다 묶은 하나의 아이템, 사이즈 조절 시도해보기 || <span>사용해보기
                            display: flex, flex-direction: column */}
                    <StyledTitle>
                        <StyledLine>
                            드롭다운메뉴
                            <button>견적 작성</button>
                        </StyledLine>
                    </StyledTitle>
                    <EstimateRequestList posts={posts} loading={loading}/>
                    <EstimateRequestListNumbers postsPerPage={postsPerPage} totalPosts={posts.length} paginate={setCurrentPage}/>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default EstimateRequestListPage;