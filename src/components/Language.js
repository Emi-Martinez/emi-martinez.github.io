import styled from "styled-components";
import Arrow from "../icons/QAItem.svg";
import { useState } from "react";
import { useSelector } from "react-redux";
import H7 from "./style/H7";
import HeadLink from "./style/HeadLink";
import { useDispatch } from "react-redux";
import { languageActions } from "../store/language-slice";
import { useLocation } from "react-router-dom";

const FlagImg = styled.img`
    margin-right: 8px;
    
`
const LangArrow = styled(Arrow)`
    rotate: 90deg;
    scale: 50%;
    color: ${props => props.theme.black};
`

const LangContainer = styled.div`
    display: flex;
    align-items: center;
    
`

const LangMenu = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    position: absolute;
    top: ${props => props.device == "phone" ? "56px" : props.device == "tablet" ? "64px" : "64px"};
    right: ${props => props.device == "phone" ? "10px" : ""};
    padding: 8px 16px;

    row-gap: ${props => props.device == "phone" ? "16px" : "8px"};

    border: 1px solid ${props => props.theme.black_5};
`

export default function Language(){
    const path = useLocation().pathname.split('/')[1]
    const [langMenu, setLangMenu] = useState(false)
    const lang = useSelector(state => state.language.data)
    const flagURL = useSelector(state => state.language.flagURL[lang])
    const flag = (path == "projects" ? flagURL : "projects/" + flagURL)
    const device = useSelector(state => state.device.data)
   
    const dispatch = useDispatch()

    const handleClick = ()=>{
        setLangMenu(state => !state)
    }

    const handleClickEng = ()=>{
        dispatch(languageActions.setLanguage('en'))
    }

    const handleClickEsp = ()=>{
        dispatch(languageActions.setLanguage('es'))
    }
    
    return(
        <LangContainer onClick={handleClick}>
            <FlagImg src={flag} />
            <H7 device={device}>{lang.toUpperCase()}</H7>
            <LangArrow />
            {langMenu ? 
                <LangMenu device={device} >
                    <H7 device={device} onClick={handleClickEng}><HeadLink hoverAct="true">English - EN</HeadLink></H7>
                    <H7 device={device} onClick={handleClickEsp}><HeadLink hoverAct="true">Español - ES</HeadLink></H7>
                </LangMenu> : null}
        </LangContainer>
    )
}