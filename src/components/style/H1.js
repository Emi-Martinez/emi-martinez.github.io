import styled from "styled-components"

const H1 = styled.h1`
    font-family: 'Poppins' ;
    font-weight: bold;
    color: ${props => props.theme.black};
    font-size: 119px;
    line-height: 144px;
    margin: 0px;

    text-align: center;

    ${props => props}
`

export default H1