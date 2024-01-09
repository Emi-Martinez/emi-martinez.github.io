import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkButton = styled(Link)`
    display: flex;
    justify-content: center;
    text-align: center;
    
    text-decoration: none;
    background: linear-gradient(to right,${props => props.theme.secondaryColor}, ${props => props.theme.primaryColor});

    color: ${props => props.theme.black_5};
    
    margin-top: ${props => props.device == "phone" ? "40px" : props.device == "tablet" ? "56px" : "64px"};
    padding: 24px 0px;

    border-radius: 100px;

    font-family: 'Nunito';

    box-shadow: 0px 16px 16px rgba(${props => props.theme.black_RGB}, 0.25);
    
    transition: all .3s ease;

    &:hover{
        color: ${props => props.theme.black};
    }
`

export default LinkButton