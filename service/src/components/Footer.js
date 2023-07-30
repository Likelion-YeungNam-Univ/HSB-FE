import styled from "styled-components";

const Footer = () =>{
    const StyledFooter = styled.div`
        background-color: grey;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    `;
    const StyledTerms = styled.p`
        font-size: 1.3rem;
    `;


    return(
        <StyledFooter>
            <StyledTerms>이용약관         개인정보처리방침        사업자정보확인</StyledTerms>
            <p>Tel: 0000-0000   Email: speechless@gmail.com</p>
            <p>Copyright ©Speechless. All Rights Reserved.</p>
        </StyledFooter>
    )
}

export default Footer;