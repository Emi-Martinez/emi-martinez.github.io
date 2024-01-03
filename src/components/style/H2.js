import styled from "styled-components"

const H2 = styled.h2`
    font-family: 'Poppins' ;
    font-weight: bold;
    color: ${props => props.theme.black};
    font-size: ${props => props.device == "phone" ? "44px" :  props.device == "tablet" ? "72px" : "84px"};
    line-height: ${props => props.device == "phone" ? "61px" :  props.device == "tablet" ? "89px" : "101px"};;
`

export default H2