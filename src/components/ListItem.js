import ListBulletPoint from "../icons/ListBulletPoint.svg"
import styled from "styled-components"
import Paragraph from "./style/Paragraph"

export default function ListItem({text}){
    const Li = styled.div`
        display: flex;
        align-items: center;

        padding-bottom: 24px;
        margin-bottom: 24px;
        border-bottom: 1px solid ${props => props.theme.black_25};
    `

    return(
        <Li>
            <ListBulletPoint />
            <Paragraph margin-left="16px;">{text}</Paragraph>
        </Li>
    )
}