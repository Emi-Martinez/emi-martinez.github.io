import H4 from "./style/H4"
import Paragraph from "./style/Paragraph"
import H6 from "./style/H6"
import LinkButton from "./style/LinkButton"
import H7 from "./style/H7"
import styled from "styled-components"

export default function ContactMeFooter(){
    const FooterContainer = styled.div`
        margin: 256px 208px;

        width: 640px;
    `

    return(
        <FooterContainer role="footer">
            <H4 margin-bottom="32px">Freelance Web Developer</H4>
            <Paragraph>If you are looking for a developer which can become your design to reality, or solve some functionality issue on an existing web. Contact me!</Paragraph>
            <H7 margin-top="32px" color="primary">emi.martinez9696@gmail.com</H7>{/* h7 */}
            <H6 margin-top="88px"><LinkButton to={`/contact`}>Got a project in mind? Contact me!</LinkButton></H6>
        </FooterContainer>
    )
}