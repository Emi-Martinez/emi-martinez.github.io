import styled from "styled-components"

const H5 = styled.h5`
    font-family: 'Poppins' ;
    font-weight: bold;
    color: ${props => props.theme.black};
    font-size: ${props => props.device == "phone" ? "22px" : props.device == "tablet" ? "25px" : "30px"};
    line-height: ${props => props.device == "phone" ? "28px" : props.device == "tablet" ? "31px" : "36px"};
    margin: 0;

    ${props => props}
`

export default H5