import styled from "styled-components";

const TextArea = styled.textarea`
    resize: none;
    height: 231px;

    font-family: 'Nunito';
    color: ${props => props.theme.black};
    font-size: ${props => props.device == "phone" ? "18px" : props.device == "tablet" ? "18px" : "21px"};
    line-height: ${props => props.device == "phone" ? "27px" : props.device == "tablet" ? "27px" : "30px"};
    margin: 0%;

    padding: 16px 24px;

    border: none;
    background-color: ${props => props.theme.black_10};
    border-radius: 16px;
`

export default TextArea