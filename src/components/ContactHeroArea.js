import styled from "styled-components"
import H4 from "./style/H4"
import Paragraph from "./style/Paragraph"
import H7 from "./style/H7"
import { useTheme } from "styled-components"
import { useSelector } from "react-redux"
import { contactPageContent } from "../data/contactPageContent"

export default function ContactHeroArea(){
    const lang = useSelector(state => state.language.data)
    const theme = useTheme()
    const device = useSelector(state => state.device.data)
    
    const ContactHAContainer = styled.div`
        display: flex;
        flex-direction: column;
        margin: ${device == "phone" ? "72px 16px 448px" : device == "tablet" ? "192px 56px 385px" : "192px 80px 316px"};
        justify-content: center;
        
    `
    const emailStyle = {
        "text-align": `${device == "phone" ? "center" : ""}`,
        "width": `${device == "phone" ? "" : "min-content"}`,
        "color":"#FFFFFF",
        "background-color": theme.primaryColor,
        "padding": "32px 24px",
        "border-radius": "16px"
    }

    return(
        <ContactHAContainer>
            <H4 device={device} margin-bottom="24px;">{contactPageContent[lang].heroAreatitle}</H4>
            <Paragraph device={device} margin-bottom="24px;">{contactPageContent[lang].heroAreaDesc}</Paragraph>
            <H7 device={device} {...emailStyle} >emi.martinez9696@gmail.com</H7>
        </ContactHAContainer>
    )
}