import styled from "styled-components"

const H1 = styled.h1`
    font-family: 'Poppins' ;
    font-weight: bold;
    color: ${props => props.theme.black};
    font-size: ${props => props.device == "phone" ? "55px" : props.device == "tablet" ? "102px" : "119px"};
    line-height: ${props => props.device == "phone" ? "80px" : props.device == "tablet" ? "127px" : "144px"};
    margin: 0px;

    text-align: center;

    ${props => props}
`

export default H1