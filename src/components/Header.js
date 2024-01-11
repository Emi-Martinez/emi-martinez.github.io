import H7 from "./style/H7"
import HeadLink from "./style/HeadLink"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import { useSelector } from "react-redux"
import ResponsiveHeader from "./ResponsiveHeader"
import Language from "./Language"
import { headerContent } from "../data/HeaderContent"

const LangEmailContainer = styled.div`
    display: flex;
    align-items: center;

    column-gap: 24px;
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: ${props => props.device == "phone" ? "24px 8px" : props.device == "tablet" ? "32px 32px" : "32px 32px"};
`
const LinksContainer = styled.div`
    display: flex;

    column-gap: 16px;
`
export default function Header(){
    const path = useLocation().pathname
    const device = useSelector(state => state.device.data)
    const lang = useSelector(state => state.language.data)
    
    return(
        device == "phone" ? <ResponsiveHeader /> :
        <HeaderContainer device={device}>
            <LinksContainer>
                <H7 device={device}><HeadLink hoverAct="true" act={path == '/' ? 'true' : ""} to="/">{headerContent[lang].home}</HeadLink></H7>
                <H7 device={device}><HeadLink hoverAct="true" act={path == '/about' ? 'true' : ""} to="/about">{headerContent[lang].about}</HeadLink></H7>
                <H7 device={device}><HeadLink hoverAct="true" act={path == '/contact' ? 'true' : ""} to="/contact">{headerContent[lang].contact}</HeadLink></H7>
            </LinksContainer>
            <LangEmailContainer>
                <Language />
                <H7 device={device} variant="primary">emi.martinez.se@gmail.com</H7>
            </LangEmailContainer>
        </HeaderContainer>
    )
}