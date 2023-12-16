import styled from "styled-components"

const H7 = styled.h6`
    font-family: 'Nunito' ;
    font-weight: bold;
    /* color: ${props => props.theme.black}; */
    font-size: 15px;
    line-height: 24%;
    margin: 0px 0px ;
    ${props => props}
    color: ${props => props.color == "primary" ? props.theme.primaryColor : props.theme.black}

    
`

export default H7