import { Outlet } from "react-router-dom"
import H7 from "./style/H7"
import HeadLink from "./style/HeadLink"
import { useLocation } from "react-router-dom"
import styled from "styled-components"

export default function Header(){
    const path = useLocation().pathname

    const HeaderContainer = styled.div`
        display: flex;
        justify-content: space-between;
        padding: 32px 32px;

    `
    const LinksContainer = styled.div`
        display: flex;
    `

    return(
        <div>
            <HeaderContainer>
                <LinksContainer>
                    <H7><HeadLink hoverAct="true" act={path == '/' ? 'true' : ""} to="/">Home</HeadLink></H7>
                    <H7><HeadLink hoverAct="true" act={path == '/about' ? 'true' : ""} to="/about">About</HeadLink></H7>
                    <H7><HeadLink hoverAct="true" act={path == '/contact' ? 'true' : ""} to="/contact">Contact</HeadLink></H7>
                </LinksContainer>
                <div>
                    <H7 color="primary">emi.martinez9696@gmail.com</H7> {/* Es un h7, hay que crearlo */}                
                </div>
            </HeaderContainer>
            <Outlet />
        </div>
    )
}