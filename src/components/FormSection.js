import ContactForm from "./ContactForm"
import H3 from "./style/H3"
import Paragraph from "./style/Paragraph"
import H6 from "./style/H6"
import styled from "styled-components"
import { useTheme } from "styled-components"
import { useSelector } from "react-redux"
import { contactPageContent } from "../data/contactPageContent"
import EmailSendModal from "./EmailSendModal"

export default function FormSection(){
    const lang = useSelector(state => state.language.data)
    const theme = useTheme()
    const device = useSelector(state => state.device.data)

    const FormSectContainer = styled.div`
        display: flex;
        flex-direction: ${device == "phone" ? "column" : device == "tablet" ? "column" : ""};
        justify-content: center;
        align-items: ${device == "phone" ? "" : device == "tablet" ? "" : "center"};
        margin: ${device == "phone" ? "0px 8px 112px" : device == "tablet" ? "0px 56px 180px" : "0px 0px 256px"};
    `
    const TextContainer = styled.div`
        margin: ${device == "phone" ? "0px 0px 24px" : device == "tablet" ? "0px 0px 32px" : "0px 64px 0px 0px"};
    `
    const textInternalMargin = (device == "phone" ? "8px" : device == "tablet" ? "16px" : "32px");
    return(
        <FormSectContainer>
            <TextContainer>
                <H3 device={device} bold="true" margin-bottom={textInternalMargin}>{contactPageContent[lang].formTitle}</H3>
                <Paragraph device={device} margin-bottom={textInternalMargin}>{contactPageContent[lang].formDesc1}</Paragraph>
                <Paragraph device={device} margin-bottom={textInternalMargin}>{contactPageContent[lang].formDesc2}</Paragraph>
                <H6 device={device} color={theme.primaryColor}>emi.martinez.se@gmail.com</H6>
            </TextContainer>
            <ContactForm />
        </FormSectContainer>
    )
}