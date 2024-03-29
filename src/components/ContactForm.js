import SendArrow from "../icons/SendArrow.svg"
import { useDispatch, useSelector } from "react-redux"
import { formActions } from "../store/form-slice"
import { sendForm } from "../store/form-actions"
import { useTheme } from "styled-components"
import InputContainer from "./style/InputContainer"
import InputLabel from "./style/InputLable"
import Input from "./style/Input"
import TextArea from "./style/TextArea"
import Button from "./style/Button"
import styled from "styled-components"
import H6 from "./style/H6"
import EmailSendModal from "./EmailSendModal"
import ErrorMessage from "./ErrorMessage"
import { contactPageContent } from "../data/contactPageContent"
import { useRef, useState } from "react"

const ArrowIcon = styled(SendArrow)`
    margin-left: 8px;
`

export default function ContactForm(){
    const ref = useRef(1)
    const lang = useSelector(state => state.language.data)
    const form = useSelector(state => state.form.data)
    const name = useSelector(state => state.form.data.name)
    const dispatch = useDispatch()
    const theme = useTheme()

    const [errorMessage,setErrorMessage] = useState(false)

    const handleChange = (e)=>{
        const {value,name} = e.target

        dispatch(formActions.changeForm({name: name,value: value}))
    }

    const handleClick = (e)=>{
        e.preventDefault()
        
        if(form.name != "" &&
        form.emailAdress != "" &&
        form.projectDetails != "" &&
        form.budgetRange != "" &&
        form.timeline != ""){
            setErrorMessage(state => state = false)
            dispatch(sendForm(form))
            
            ref.current.showModal()
            ref.current.style.display = "grid"
            dispatch(formActions.resetForm())
        }else{
            setErrorMessage(state => state = true)
        }
    }

    const device = useSelector(state => state.device.data)
    const inputContainerMarginBottom = (device == "phone" ? "24px" : device == "tablet" ? "24px" : "32px");
    return(
        <form>
            <EmailSendModal refer={ref} />
            <InputContainer device={device} margin-bottom={inputContainerMarginBottom} id="inpt" >
                <InputLabel>
                    <H6 device={device} font-weight="bold" color={theme.black} margin-bottom="8px" >{contactPageContent[lang].formNameLabel}</H6>
                    <Input device={device} name="name" placeholder={contactPageContent[lang].formNamePlaceHolder} onChange={handleChange} value={name} />
                </InputLabel>
                <InputLabel>
                    <H6 device={device} font-weight="bold" color={theme.black} margin-bottom="8px" >{contactPageContent[lang].formEmailLabel}</H6>
                    <Input device={device} name="emailAdress" placeholder={contactPageContent[lang].formEmailPlaceHolder} onChange={handleChange} value={form.emailAdress} />
                </InputLabel>
            </InputContainer>
            <InputLabel>
                <H6 device={device} font-weight="bold" color={theme.black} margin-bottom="8px">{contactPageContent[lang].formProjecDetailLabel}</H6>
                <TextArea device={device} name="projectDetails" placeholder={contactPageContent[lang].formProjecDetailPlaceHolder} onChange={handleChange} value={form.projectDetails} />
            </InputLabel>
            <InputContainer device={device} margin={`${inputContainerMarginBottom} 0px`} >
                <InputLabel>
                    <H6 device={device} font-weight="bold" color={theme.black} margin-bottom="8px">{contactPageContent[lang].formBudgerRangeLabel}</H6>
                    <Input device={device} name="budgetRange" placeholder={contactPageContent[lang].formBudgerRangePlaceHolder} onChange={handleChange} value={form.budgetRange}/>
                </InputLabel>
                <InputLabel>
                    <H6 device={device} font-weight="bold" color={theme.black} margin-bottom="8px">{contactPageContent[lang].formTimelineLabel}</H6>
                    <Input device={device} name="timeline" placeholder={contactPageContent[lang].formTimelinePlaceHolder} onChange={handleChange} value={form.timeline}/>
                </InputLabel>
            </InputContainer>
            {errorMessage ? <ErrorMessage /> :  null}
            <Button device={device} onClick={handleClick}> 
                {contactPageContent[lang].btnSend}
                <ArrowIcon id="arrow"/>
            </Button>
        </form>
    )
}