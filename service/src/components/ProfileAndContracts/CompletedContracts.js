import React from "react";
import styled from "styled-components";

const CompletedContracts = () => {
  // 여기에 현재 진행 중인 계약 목록, API 호출할 예정

  // 가상의 완료된 계약 목록 데이터 
  const completedContracts = [
    { id: 1, title: "입찰가", description: "계약 1에 대한 설명" },
    // 추가적인 계약 데이터들
  ];

  return (
    <div>
      <h2>종료된 계약</h2>
      <hr style={{marginBottom: "20px" }} />
      <div style={{ maxHeight: "200px", overflowY: "auto" }}>
      {ongoingContracts.map((contract) => (
        <div key={contract.id}>
          <h3>{contract.title}</h3>
          <p>{contract.description}</p>
      </div>
       ))}
     </div>
    </div>
  );
};

export default CompletedContracts;
