import { Link } from "react-router-dom";
import styled from "styled-components";

const HeadLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.black};
    border-bottom: ${props => props.act === "true" ? `3px solid ${props.theme.primaryColor}` : ""};
    margin-right: 16px;
`

export default HeadLink