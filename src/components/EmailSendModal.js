import H3 from "./style/H3"
import Paragraph from "./style/Paragraph"
import Button from "./style/Button"
import styled from "styled-components"
import { useSelector } from "react-redux"
import { contactPageContent } from "../data/contactPageContent"

const Dialog = styled.dialog`
    border: none;
    border-radius: 32px;

    padding: 24px;
    text-align: center;
    row-gap: 40px;
    
    &::backdrop{
        background-color: rgba(${props => props.theme.black_RGB}, 0.50);
    }
`

export default function EmailSendModal({refer}){
    const lang = useSelector(state => state.language.data)
    const device = useSelector(state => state.device.data)
    
    const handleClick = (e)=>{
        e.preventDefault()
        refer.current.close()
        refer.current.style.display = "none"
    }  

    return(
        <Dialog ref={refer}>
            <H3 device={device} bold="true">{contactPageContent[lang].modalTitle}</H3>
            <Paragraph device={device}>{contactPageContent[lang].modalText}</Paragraph>
            <Button device={device} onClick={handleClick}>{contactPageContent[lang].modalBtnText}</Button>
        </Dialog>
    )
}