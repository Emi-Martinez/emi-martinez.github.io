import styled from "styled-components"

const InputContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.device == "phone" ? "column" : props.device == "tablet" ? "" : ""};
    column-gap: 32px;
    row-gap: ${props => props.device == "phone" ? "24px" : ""};

    ${props => props}
`
export default InputContainer