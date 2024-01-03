import styled from "styled-components"

const H3 = styled.h3`
    font-family: 'Poppins' ;
    ${props => props.gradiant ?  `background: linear-gradient(to right,${props.theme.secondaryColor}, ${props.theme.primaryColor});-webkit-background-clip: text; -webkit-text-fill-color: transparent; display: inline-block;`
    : `color: ${props.theme.black};`}
    
    font-weight: ${props => props.bold == 'true' ? `bold` : `lighter`};
    font-size: ${props => props.device == "phone" ? "35px" : props.device == "tablet" ? "51px" : "60px"};
    line-height:${props => props.device == "phone" ? "47px" : props.device == "tablet" ? "63px" : "72px"};
    margin: 0px;

    ${props => props}
    
`

export default H3