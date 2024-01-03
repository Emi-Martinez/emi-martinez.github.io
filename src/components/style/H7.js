import styled from "styled-components"

const H7 = styled.h6`
    font-family: 'Nunito' ;
    font-weight: bold;
    /* color: ${props => props.theme.black}; */
    font-size: ${props => props.device == "phone" ? "16px" : props.device == "tablet" ? "13px" : "15px"};
    line-height: ${props => props.device == "phone" ? "16px" : props.device == "tablet" ? "16px" : "24px"};
    margin: 0px 0px ;
    color: ${props => props.variant == "primary" ? props.theme.primaryColor : props.theme.black};
    ${props => props}
    
`

export default H7