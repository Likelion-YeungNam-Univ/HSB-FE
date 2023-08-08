import React from "react";
import styled from "styled-components";

const CompletedContractsContainer = styled.div`
  width: 387px;
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

const CompletedContracts = () => {
  const contractsData = [
    {
      id: 1,
      name: "녹취록 의뢰합니다.",
      bidPrice: "100,000원",
      completionDate: "2023-11-15",
    },
    {
      id: 2,
      name: "드라마 자막 의뢰합니다.",
      bidPrice: "250,000원",
      completionDate: "2023-06-19",
    },
    // 계약데이터 추후 연동
  ];

  return (
    <CompletedContractsContainer>
      <TitleContainer>
        <Title>종료된 계약</Title>
      </TitleContainer>
      <ContractsListContainer>
        {contractsData.map((contract, index) => (
          <ContractItem key={contract.id}>
            <h3>{contract.name}</h3>
            <p>입찰가: {contract.bidPrice}</p>
            <p>기한: {contract.completionDate}</p>
            {index !== contractsData.length - 1 && <hr />}
          </ContractItem>
        ))}
      </ContractsListContainer>
    </CompletedContractsContainer>
  )
}

export default CompletedContracts;
