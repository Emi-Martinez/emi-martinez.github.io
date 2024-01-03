import styled from "styled-components";

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background: linear-gradient(to right,${props => props.theme.secondaryColor}, ${props => props.theme.primaryColor});
    color: ${props => props.theme.black_5};
    
    padding: 24px 48px;

    border: none;
    border-radius: 100px;

    font-family: 'Nunito';
    font-size: ${props => props.device == "phone" ? "18px" : props.device == "tablet" ? "18px" : "21px"};
    font-weight: bold;

    width: 100%;

    box-shadow: 0px 16px 16px rgba(${props => props.theme.black_RGB}, 0.25);
    
    transition: all .3s ease;

    &:hover{
        color: ${props => props.theme.black};
    }
`

export default Button