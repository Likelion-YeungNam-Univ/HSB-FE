import React from "react";
import styled from "styled-components";

const OngoingContractsContainer = styled.div`
 width: 300px;
 height: 667px;
 border: 1px solid #BCBCBC;
 display: flex;
 flex-direction: column;

 overflow-y: auto; 
 `;

const TitleContainer = styled.div`
 padding: 32px;
 border-bottom: 1px solid #BCBCBC;
 text-align: center;
`;

const Title = styled.h2`
 font-size: 30px;
 color: #333;
 margin: 0;
`;

const ContractsListContainer = styled.div`
 flex: 1;
 padding: 10px;
 overflow-y: auto;
`;


const ContractItem = styled.div`
 padding: 10px;
 border-bottom: 1px solid #BCBCBC;
 
  &:last-child {
   border-bottom: none;
 }

  h3 {
   font-size: 20px; 
   color: #212121;
 }

`;

const OngoingContracts = () => {
  const contractsData = [
    {
      id: 1,
      name: "2시간 가량의 다큐멘터리 제작",
      bidPrice: "100,000원",
      deadline: "2023-11-15",
    },
    {
      id: 2,
      name: "영화 자막 의뢰합니다.",
      bidPrice: "150,000원",
      deadline: "2023-12-25",
    },
    {
      id: 2,
      name: "영화 자막 의뢰합니다.",
      bidPrice: "150,000원",
      deadline: "2023-12-25",
    },
    {
      id: 2,
      name: "영화 자막 의뢰합니다.",
      bidPrice: "150,000원",
      deadline: "2023-12-25",
    },
    {
      id: 2,
      name: "영화 자막 의뢰합니다.",
      bidPrice: "150,000원",
      deadline: "2023-12-25",
    },
    {
      id: 2,
      name: "영화 자막 의뢰합니다.",
      bidPrice: "150,000원",
      deadline: "2023-12-25",
    },

    

    // 계약데이터 추후 연동
  ]

  return (
    <OngoingContractsContainer>
      <TitleContainer>
        <Title>진행중인 계약</Title>
      </TitleContainer>
      <ContractsListContainer>
        {contractsData.map((contract, index) => ( 
          <ContractItem key={contract.id}>
            <h3>{contract.name}</h3>
            <p>입찰가: {contract.bidPrice}</p>
            <p>기한: {contract.deadline}</p>
            {index !== contractsData.length - 1 && <hr />}
          </ContractItem>
        ))}
      </ContractsListContainer>
    </OngoingContractsContainer>
  )
}

export default OngoingContracts;