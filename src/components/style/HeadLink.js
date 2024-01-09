import { Link } from "react-router-dom";
import styled from "styled-components";

const HeadLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.black};
    border-bottom: ${props => props.act === "true" ? `4px solid ${props.theme.primaryColor};` : ""};

    transition: all 0.1s ease;

    &:hover{
        border-bottom: ${props => props.hoverAct === "true" ? `4px solid ${props.theme.primaryColor};` : ""};
    }
   
`

export default HeadLink