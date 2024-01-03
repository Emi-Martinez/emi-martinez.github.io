import { useSelector } from 'react-redux'
import QAItem from '../icons/QAItem.svg'
import H3 from './style/H3'
import Paragraph from './style/Paragraph'
import H6 from './style/H6'
import Figure from './style/Figure'
import styled from 'styled-components'
import { useTheme } from 'styled-components'

export default function QASection(){
    const theme = useTheme()
    const device = useSelector(state => state.device.data)

    const QA = useSelector(state => state.questions.data)
    
    const QAContainer = styled.div`
        margin: ${device == "phone" ? "0px 16px 384px" : device == "tablet" ? "0px 56px 352px" : "0px 80px 384px"};
        width: ${device == "phone" ? "" : "696px"};
    `

    const Ul = styled.ul`
        list-style: none;
        width: fit-content;
        ${device == "phone" ? "padding:0px" : ""};
    `
    const Li = styled.li`
        padding-bottom: ${device == "phone" ? "16px" : "24px"};
        border-bottom: 1px solid ${props => props.theme.black_25};
        margin-bottom: 32px;
    `
    const ItemQuestion = styled.div`
        display: flex;
    `

    const QAList = QA.map((qa,i) => (
        <Li key={i}>
            <ItemQuestion>
                <QAItem />
                <H6 device={device} padding-left="16px;">{qa.question}</H6>
            </ItemQuestion>
            <Paragraph device={device} margin="24px 0px 0px 32.5px">{qa.answer}</Paragraph>
        </Li>
    ))   
    
    const h3MarginBottom = (device == "phone" ? "48px" :  "64px");
    return(
        <>
            <Figure top="615px" size="312px" color={theme.black_5} />
            <Figure top="615px" size="312px" color={theme.black_5} invert="true"/>
            <QAContainer>
                <H3 device={device} margin-bottom={h3MarginBottom}>Before you send me a message, it’s important that you know:</H3>
                <Ul>
                    {QAList}
                </Ul>
            </QAContainer>
        </>
    )
}