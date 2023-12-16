import styled from "styled-components"

const Paragraph = styled.p`
    color: ${props => props.theme.black_75};
    font-size: 21px;
    line-height: 30px;
    margin: 0%;
    /* font-family: 'Nunito'; */
    ${props => props}
`

export default Paragraph