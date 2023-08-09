import { useCallback, useState } from "react";
import styled from "styled-components";

const StyledTitle = styled.p`
    font-size: 1.35rem;
    padding-left:395px;
    margin: 20px 0px 0px 0px;
`;
const StyledBodys = styled.div`   
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;
const StyledBody = styled.div`
    border: 1px solid;
    width: 720px;   
    display: flex;
    flex-direction: column;
    padding: 15px 20px 20px 20px;
`;
const StyledButtonPart = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const StyledPrice = styled.div`
    font-size: 1.2rem;
    padding-bottom: 10px;
`;
const StyledInputPrice = styled.input`
    font-size: 1.2rem;
    width: 150px;
    margin-left: 10px;
`;
const StyledContent = styled.div`
    font-size: 1.2rem;
    padding-bottom: 10px;
    display: flex;
`;
const StyledTextareaContent = styled.textarea`
    font-size: 1.2rem;
    width: 605px;
    height: 70px;
    margin-left: 10px;
    resize: none;
`;
const StyledButton = styled.button`
    width: 70px;
    height: 30px;
`;

const OfferBid = ({onInsert}) => {
    

    const [value, setValue] = useState({
        price: '',
        content: '',
    });

    const onChangePrice = useCallback(
        (e) => {
            setValue({
                price: e.target.value,
                content: value.content,
            });
        },
        [value],
    );

    const onChangeContent = useCallback(
        (e) => {
            setValue({
                price: value.price,
                content: e.target.value,
            });
        },
        [value],
    );

    const onSubmit = useCallback(
        (e) => {
            onInsert(value.price, value.content);
            setValue({
                price: '',
                content: '',
            });

            e.preventDefault();
        },
        [onInsert, value],
    )

    return(
        <>
            <StyledTitle>입찰 제안서 작성하기</StyledTitle>

            <StyledBodys>
                <StyledBody>

                    <form onSubmit={onSubmit}>
                    <StyledPrice>
                        <span>가격</span>
                        <StyledInputPrice value={value.price} onChange={onChangePrice}/>
                    </StyledPrice>

                    <StyledContent>
                        <span>본문</span>
                        <StyledTextareaContent value={value.content} onChange={onChangeContent}/>
                    </StyledContent>
                    

                    <StyledButtonPart>
                        <StyledButton type="submit">업로드</StyledButton>
                    </StyledButtonPart>
                    </form>


                </StyledBody>
            </StyledBodys>
        </>
    )
}

export default OfferBid;