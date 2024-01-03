import styled from "styled-components"

const TechContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: ${props => props.device == "phone" ? "42px 32px" : props.device == "tablet" ? "72px 136px" : "72px 208px"};
    flex-wrap: wrap;
    column-gap: ${props => props.device == "phone" ? "35px" : "40px"};
`

export default TechContainer