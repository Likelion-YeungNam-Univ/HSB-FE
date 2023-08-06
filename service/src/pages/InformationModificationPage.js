import React from "react";
import styled from "styled-components";
import InformationModification from "../components/InformationModification/InformationModification";

const InformationModificationPage = () => {
    const Container = styled.div`
    
    `;
    const Title = styled.h1`
     font-size: 30px;
     color: #95DDFF;
     text-align: center;
     margin-right: 1000px;
    `;
    return(
      <Container>
          <Title>내 정보 수정</Title>
          <InformationModification />
      </Container>
    )
}

export default InformationModificationPage;

