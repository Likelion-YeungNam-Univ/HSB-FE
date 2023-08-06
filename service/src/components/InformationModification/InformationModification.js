import React from "react";
import styled from "styled-components";

const InformationModification = () => {
  return (
    <Container>
      <Form>
        <Row>
          <Label htmlFor="profilePictureInput"></Label>
          <Input type="file" id="profilePictureInput" />
        </Row>
        <Row>
          <Label htmlFor="name">이름</Label>
          <Input type="text" id="name"  />
        </Row>
        <Row>
          <Label htmlFor="username">아이디</Label>
          <Input type="text" id="username"  />
        </Row>
        <Row>
          <Label htmlFor="password">비밀번호</Label>
          <Input type="password" id="password"  />
        </Row>
        <Row>
          <Label htmlFor="confirmPassword">비밀번호 확인</Label>
          <Input type="password" id="confirmPassword"  />
        </Row>
        <Row>
          <Label htmlFor="bio">자기소개</Label>
          <Textarea id="bio"></Textarea>
        </Row>
        </Form>
        <SaveButton>변경사항 저장</SaveButton>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1199px;
  max-height: 720px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #BCBCBC;
  border-radius: 0;
  position: relative;
`;

const Form = styled.form`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 width: 100%; 
 height: 100%;
`;

const Row = styled.div`
 display: flex;
 flex-direction: column;
 margin-bottom: 15px;
 max-width: 800px;
`;

const Input = styled.input`
 width: 100%;
 padding: 5px;
 border: 1px solid #AEAEAE;
 border-radius: 0;
 font-size: 14px;
 width: 800px;
 height: 36px;

`;

const Textarea = styled.textarea`
 width: 100%;
 padding: 5px;
 border: 1px solid #AEAEAE;
 border-radius: 0;
 font-size: 14px;
 width: 800px;
 height: 131px;
 margin-bottom: 20px;

 resize: vertical;
`;

const Label = styled.label`
 font-size: 15px;
 text-align: left;
 margin-bottom: 5px;
`;

const SaveButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #95DDFF;
  color: #212121;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  max-width: 170px;
  max-height: 40px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  float: right;
  position: absolute;
  right: 200px; 
  bottom: 7px;

  &:hover {
    background-color: #0056b3;
  }

`;

export default InformationModification;