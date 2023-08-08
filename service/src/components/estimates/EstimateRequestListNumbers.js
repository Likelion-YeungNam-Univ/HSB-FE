import styled from "styled-components";

const EstimateRequestListNumbers = ({postsPerPage, totalPosts, paginate}) => {

    const pageNumbers = [];

    for(let i = 1; i<=Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <>
            <nav>
                <ul>
                    {pageNumbers.map((number) => (
                        <li key={number}>
                        <span onClick={() => paginate(number)}>
                            {number}
                        </span>
                    </li>
                    ))}
                </ul>
            </nav>
            
        </>
    )
}

export default EstimateRequestListNumbers;