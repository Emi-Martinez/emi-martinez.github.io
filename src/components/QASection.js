import { useSelector } from 'react-redux'
import QAItem from '../icons/QAItem.svg'
import H3 from './style/H3'
import Paragraph from './style/Paragraph'
import H6 from './style/H6'
import Figure from './style/Figure'
import styled from 'styled-components'
import { useTheme } from 'styled-components'
import {QAData} from '../../public/QAData'
import { contactPageContent } from '../data/contactPageContent'
import { useEffect, useRef, useState } from 'react'

const QAArrow = styled(QAItem)`
    color: ${props => props.theme.secondaryColor};
`

export default function QASection(){
    const lang = useSelector(state => state.language.data)
    const theme = useTheme()
    const device = useSelector(state => state.device.data)

    const ref = useRef(0)
    let [QAHeight,setQAHeight] = useState()
    
    useEffect(()=>{
        setQAHeight(ref.current.offsetHeight)
    },[])

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

    const QAList = QAData.map((qa,i) => (
        <Li key={i}>
            <ItemQuestion>
                <QAArrow />
                <H6 device={device} padding-left="16px;">{qa[lang].question}</H6>
            </ItemQuestion>
            <Paragraph device={device} margin="24px 0px 0px 32.5px">{qa[lang].answer}</Paragraph>
        </Li>
    ))   
    
    const h3MarginBottom = (device == "phone" ? "48px" :  "64px");
    const figureSize = ((QAHeight * 1.6313) / 4) + "px"
    
    return(
        <>
            <Figure top="615px" size={figureSize} color={theme.black_5} />
            <Figure top="615px" size={figureSize} color={theme.black_5} invert="true"/>
            <QAContainer ref={ref}>
                <H3 device={device} margin-bottom={h3MarginBottom}>{contactPageContent[lang].qaTitle}</H3>
                <Ul>
                    {QAList}
                </Ul>
            </QAContainer>
        </>
    )
}