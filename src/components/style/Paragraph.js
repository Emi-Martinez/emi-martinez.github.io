import styled from "styled-components"

const Paragraph = styled.p`
    color: ${props => props.theme.black_75};
    font-size: ${props => props.device == "phone" ? "18px" : props.device == "tablet" ? "18px" : "21px"};
    line-height: ${props => props.device == "phone" ? "27px" : props.device == "tablet" ? "27px" : "30px"};
    margin: 0%;
    
    ${props => props}
`

export default Paragraph