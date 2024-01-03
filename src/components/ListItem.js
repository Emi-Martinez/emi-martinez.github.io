import ListBulletPoint from "../icons/ListBulletPoint.svg"
import styled from "styled-components"
import Paragraph from "./style/Paragraph"
import { useSelector } from "react-redux"

export default function ListItem({text}){
    const Li = styled.div`
        display: flex;
        align-items: center;

        padding-bottom: 24px;
        margin-bottom: 24px;
        border-bottom: 1px solid ${props => props.theme.black_25};
    `
    const device = useSelector(state => state.device.data)

    const BulletPoint = styled(ListBulletPoint)`
        margin-right: ${device == "phone" ? "8px" : device == "tablet" ? "16px" : "16px"};

        width:  ${device == "phone" ? "32px" : ""};
        
    `
  

    return(
        <Li>
            <BulletPoint />
            <Paragraph device={device}>{text}</Paragraph>
        </Li>
    )
}