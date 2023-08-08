import styled from "styled-components";

const StyledCenter = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;
const StyledFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 940px;
    height: 120px;
    background-color: #F4F4F4; {/*#C0C0C0*/}
    padding-left: 5px;
`;
const StyledTerms = styled.p`
    margin: 0px;
    word-spacing: 30px;
    font-weight: bold;
    padding-bottom: 5px;
`;
const StyledFlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 350px;
    padding-bottom: 5px;
`;
const StyledP = styled.p`
    margin: 0px;
`;
    
const Footer = () =>{
    

    return(
        <StyledCenter>
            <StyledFooter>

                <StyledTerms>이용약관         개인정보처리방침        사업자정보확인</StyledTerms>
                <StyledFlexDiv>
                    <StyledP>Tel: 0000-0000</StyledP>
                    <StyledP>Email: speechless@gmail.com</StyledP>
                </StyledFlexDiv>
                <StyledP>Copyright ©Speechless. All Rights Reserved.</StyledP>
                
            </StyledFooter>
        </StyledCenter>
    )
}

export default Footer;