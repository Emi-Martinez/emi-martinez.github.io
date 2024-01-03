import H4 from "./style/H4"
import Paragraph from "./style/Paragraph"
import H6 from "./style/H6"
import LinkButton from "./style/LinkButton"
import H7 from "./style/H7"
import styled from "styled-components"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"

export default function ContactMeFooter(){
    const path = useLocation().pathname

    const phoneFooterContainerMargin = path == '/' ? '312px 16px 136px' : "136px 16px"
    const FooterContainer = styled.div`
        margin: ${props => props.device == "phone" ? phoneFooterContainerMargin : props.device == "tablet" ? "176px 208px" : "256px 208px"};

        width: ${props => props.device == "phone" ? "auto" : props.device == "tablet" ? "640px" : "640px"};
    `
    const device = useSelector(state => state.device.data)
    
    return(
        <FooterContainer device={device} role="footer">
            <H4 device={device} margin-bottom="32px">Freelance Web Developer</H4>
            <Paragraph device={device}>If you are looking for a developer which can become your design to reality, or solve some functionality issue on an existing web. Contact me!</Paragraph>
            <H7 device={device} margin-top="32px" variant="primary">emi.martinez9696@gmail.com</H7>{/* h7 */}
            <H6 device={device} margin-top="88px"><LinkButton to={`/contact`}>Got a project in mind? Contact me!</LinkButton></H6>
        </FooterContainer>
    )
}