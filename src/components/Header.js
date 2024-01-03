import H7 from "./style/H7"
import HeadLink from "./style/HeadLink"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import { useSelector } from "react-redux"
import ResponsiveHeader from "./ResponsiveHeader"

export default function Header(){
    const path = useLocation().pathname

    const HeaderContainer = styled.div`
        display: flex;
        justify-content: space-between;
        padding: ${props => props.device == "phone" ? "24px 8px" : props.device == "tablet" ? "32px 32px" : "32px 32px"};

    `
    const LinksContainer = styled.div`
        display: flex;
    `

    const device = useSelector(state => state.device.data)

    return(
        device == "phone" ? <ResponsiveHeader /> :
        <HeaderContainer device={device}>
            <LinksContainer>
                <H7 device={device}><HeadLink hoverAct="true" act={path == '/' ? 'true' : ""} to="/">Home</HeadLink></H7>
                <H7 device={device}><HeadLink hoverAct="true" act={path == '/about' ? 'true' : ""} to="/about">About</HeadLink></H7>
                <H7 device={device}><HeadLink hoverAct="true" act={path == '/contact' ? 'true' : ""} to="/contact">Contact</HeadLink></H7>
            </LinksContainer>
            <div>
                <H7 device={device} variant="primary">emi.martinez9696@gmail.com</H7>            
            </div>
        </HeaderContainer>
    )
}