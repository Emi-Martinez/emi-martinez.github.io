import styled from "styled-components"

const H6 = styled.h6`
    font-family: 'Poppins' ;
    font-weight: bold;
    color: ${props => props.theme.black};
    font-size: ${props => props.device == "phone" ? "18px" : props.device == "tablet" ? "18px" : "21px"};
    line-height: ${props => props.device == "phone" ? "15px" : props.device == "tablet" ? "15px" : "18px"};
    margin: 0;

    ${props => props}
`

export default H6