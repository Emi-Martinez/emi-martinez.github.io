import styled from "styled-components"

const H4 = styled.h4`
    font-family: 'Poppins' ;
    font-weight: bold;
    color: ${props => props.theme.black};
    font-size: 42px;
    line-height: 50%;

    margin: 0px;

    ${props => props}
`

export default H4