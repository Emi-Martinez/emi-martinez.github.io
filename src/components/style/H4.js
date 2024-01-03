import styled from "styled-components"

const H4 = styled.h4`
    font-family: 'Poppins' ;
    font-weight: bold;
    color: ${props => props.theme.black};
    font-size: ${props => props.device == "phone" ? "28px" : props.device == "tablet" ? "36px" : "42px"};
    line-height: ${props => props.device == "phone" ? "36px" : props.device == "tablet" ? "44px" : "50px"};

    margin: 0px;

    ${props => props}
`

export default H4