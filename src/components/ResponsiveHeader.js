import HeaderMenu from "../icons/HeaderMenu.svg"
import H7 from "./style/H7"
import HeadLink from "./style/HeadLink"
import styled from "styled-components"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { useCallback } from "react"
import { headerContent } from "../data/HeaderContent"
import Language from "./Language"

export default function ResponsiveHeader(){
    const [menuActivated, setMenuActivated] = useState(false)
    const device = useSelector(state => state.device.data)
    const path = useLocation().pathname
    const lang = useSelector(state => state.language.data)

    const Menu = styled(HeaderMenu)`
        width: 32px;
        stroke-width: 4;
        color: ${props => props.theme.black};
    `

    const HeaderContainer = styled.div`
        margin: 24px 16px;
        display: flex;
        justify-content: space-between;
    `
    const MenuButton = styled.button`
        margin: 0;
        padding: 0;
        border: none;
        background: none;
    `
    const MenuBackground = styled.div`
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(${props => props.theme.black_RGB}, 0.80);
        width: 100%;
        height: 110%;
        overflow: hidden;

        z-index: 1;
    `
    const MenuColumn = styled.div`
        position: absolute;
        left: 0;
        top: 0;
        background-color: ${props => props.theme.black_5};
        width: fit-content;
        height: 100%;
        padding: 32px 64px 0px 16px;

        z-index: 1;
    `
    const preventDefault = useCallback((e)=>{
        e.preventDefault()
    },[])

    const onClickMenuHandler = ()=>{
        window.addEventListener('touchmove',preventDefault,{ passive: false })

        setMenuActivated(state => !state)
    }

    const onClickMenuBackgroundHandler = ()=>{
        window.removeEventListener('touchmove',preventDefault,{ passive: false })

        setMenuActivated(state => !state)
    }

    return(
        menuActivated == true ?
        <>
            <MenuBackground onClick={onClickMenuBackgroundHandler} />
            <MenuColumn >
                <H7 device={device} padding-bottom="32px" onClick={onClickMenuBackgroundHandler}><HeadLink hoverAct="true" act={path == '/' ? 'true' : ""} to="/">{headerContent[lang].home}</HeadLink></H7>
                <H7 device={device} padding-bottom="32px" onClick={onClickMenuBackgroundHandler}><HeadLink hoverAct="true" act={path == '/about' ? 'true' : ""} to="/about">{headerContent[lang].about}</HeadLink></H7>
                <H7 device={device} padding-bottom="32px" onClick={onClickMenuBackgroundHandler}><HeadLink hoverAct="true" act={path == '/contact' ? 'true' : ""} to="/contact">{headerContent[lang].contact}</HeadLink></H7>
                <H7 device={device} variant="primary">emi.martinez9696@gmail.com</H7>
            </MenuColumn> 
        </>
        :
        <HeaderContainer>
            <MenuButton onClick={onClickMenuHandler}><Menu  /></MenuButton>
            <Language />
        </HeaderContainer>
    )
}