import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkButton = styled(Link)`
    text-decoration: none;
    background: linear-gradient(to right,${props => props.theme.secondaryColor}, ${props => props.theme.primaryColor});
    color: ${props => props.theme.black_5};
    
    padding: 24px 48px;

    border-radius: 100px;

    font-family: 'Nunito';

    box-shadow: 0px 16px 16px ${props => props.theme.black_25};
    
    transition: all .3s ease;

    &:hover{
        color: ${props => props.theme.black};
    }

    
`

export default LinkButton