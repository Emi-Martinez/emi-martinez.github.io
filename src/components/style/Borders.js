import styled from "styled-components"

const Borders = styled.div`
        width: 55%;
        display: flex;
        flex-direction: column;

        align-items: center;
        border-top: 1px solid ${props => props.theme.black_25};
        border-bottom: 1px solid ${props => props.theme.black_25};

        &::before{
            margin-top: 16px;
            content: '';
            border-top: 1px solid ${props => props.theme.black_25};
            display: block;
            width: 100%;
        }
        &::after{
            margin-bottom: 16px;
            content: '';
            border-bottom: 1px solid ${props => props.theme.black_25};
            display: block;
            width: 100%;
        }
    `

export default Borders