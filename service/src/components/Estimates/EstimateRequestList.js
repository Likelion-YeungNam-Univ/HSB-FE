import {Link} from "react-router-dom";
import styled from "styled-components";
import { axios } from "axios";

const StyledListTitle = styled.div`
    display: flex;
    width: 700px;
`;
const StyledListLine = styled.div`
    display: flex;
    width: 700px;
`;
const StyledListTitleNum = styled.h5`
    flex: 2;
`;
const StyledListTitleTitle = styled.h5`
    flex: 8;
`;
const StyledListTitleAuthor = styled.h5`
    flex: 4;
`;
const StyledListTitleDate = styled.h5`
    flex: 4;
`;
const StyledCenter = styled.div`
    display: flex;
    justify-content: center;
`;
const StyledListNum = styled.h6`
    flex: 2;
`;
const StyledListLink = styled(Link)`
    flex: 8;
`;
const StyledListAuthor = styled.h6`
    flex: 4;
`;
const StyledListDate = styled.h6`
    flex: 4;
`;

const EstimateRequestList = ({posts, loading}) => {

    {/*
    axiois.get("estimates").then((res) => {
        console.log(res);
    })

     axios.post("users", {"id": "id", "pw": "pw"}).then((res) => {
         console.log(res);
     })
    
    axios.get("users/").then((res) => {
        console.log(res);
    })
    */}

    return (
        <>

            {loading && <div> Loading... </div>}
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>

            <StyledCenter>
            <StyledListTitle> {/*display: flex, 가중치 매겨주기 */}
                <StyledListTitleNum>번호</StyledListTitleNum> {/*flex: 2 */}
                <StyledListTitleTitle>제목</StyledListTitleTitle> {/*flex: 8 */}
                <StyledListTitleAuthor>작성자</StyledListTitleAuthor> {/*flex: 4 */}
                <StyledListTitleDate>작성일</StyledListTitleDate> {/*flex: 4 */}
            </StyledListTitle>
            </StyledCenter>
            
            <StyledCenter>
            <StyledListLine> {/*display: flex, 가중치 매겨주기 */}
                <StyledListNum>3</StyledListNum>
                <StyledListLink to="/EstimatePage">온라인 방송 통역 구합니다!</StyledListLink>
                <StyledListAuthor>나문희</StyledListAuthor>
                <StyledListDate>2023-08-25</StyledListDate>
            </StyledListLine>
            </StyledCenter>

            
        </>
    )
}

export default EstimateRequestList;