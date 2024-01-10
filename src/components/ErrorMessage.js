import { useSelector } from "react-redux"
import H6 from "./style/H6"
import { useTheme } from "styled-components"
import { contactPageContent } from "../data/contactPageContent"

export default function ErrorMessage(){
    const theme = useTheme()
    const lang = useSelector(state => state.language.data)
    const device = useSelector(state => state.device.data)

    return(
        <H6 device={device} color={theme.errorColor} text-align="center" padding-bottom="32px">{contactPageContent[lang].errorMessage}</H6>
    )
}