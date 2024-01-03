import SendArrow from "../icons/SendArrow.svg"
import { useDispatch, useSelector } from "react-redux"
import { formActions } from "../store/form-slice"
import { sendForm } from "../store/form-actions"
import Paragraph from "./style/Paragraph"
import { useTheme } from "styled-components"
import InputContainer from "./style/InputContainer"
import InputLabel from "./style/InputLable"
import Input from "./style/Input"
import TextArea from "./style/TextArea"
import Button from "./style/Button"
import styled from "styled-components"
import H6 from "./style/H6"

const ArrowIcon = styled(SendArrow)`
    margin-left: 8px;
`

export default function ContactForm(){
    const form = useSelector(state => state.form.data)
    const name = useSelector(state => state.form.data.name)
    const dispatch = useDispatch()
    const theme = useTheme()

    const handleChange = (e)=>{
        const {value,name} = e.target

        dispatch(formActions.changeForm({name: name,value: value}))
    }

    const handleClick = (e)=>{
        e.preventDefault()
        // dispatch(sendForm(form))
    }

    const device = useSelector(state => state.device.data)
    const inputContainerMarginBottom = (device == "phone" ? "24px" : device == "tablet" ? "24px" : "32px");
    return(
        <form>
            <InputContainer device={device} margin-bottom={inputContainerMarginBottom} >
                <InputLabel>
                    <H6 device={device} font-weight="bold" color={theme.black} margin-bottom="8px" >Your Name</H6>
                    <Input device={device} name="name" placeholder="Your Name" onChange={handleChange} value={name} />
                </InputLabel>
                <InputLabel>
                    <H6 device={device} font-weight="bold" color={theme.black} margin-bottom="8px" >Your Email Address</H6>
                    <Input device={device} name="emailAdress" placeholder="Your Email Address" onChange={handleChange} value={form.emailAdress} />
                </InputLabel>
            </InputContainer>
            <InputLabel>
                <H6 device={device} font-weight="bold" color={theme.black} margin-bottom="8px">Project Details</H6>
                <TextArea device={device} name="projectDetails" placeholder="Project Details" onChange={handleChange} value={form.projectDetails} />
            </InputLabel>
            <InputContainer device={device} margin={`${inputContainerMarginBottom} 0px`} >
                <InputLabel>
                    <H6 device={device} font-weight="bold" color={theme.black} margin-bottom="8px">Your Budget Range</H6>
                    <Input device={device} name="budgetRange" placeholder="$" onChange={handleChange} value={form.budgetRange}/>
                </InputLabel>
                <InputLabel>
                    <H6 device={device} font-weight="bold" color={theme.black} margin-bottom="8px">Your Timeline</H6>
                    <Input device={device} name="timeline" placeholder="Ej:3-4 Meses" onChange={handleChange} value={form.timeline}/>
                </InputLabel>
            </InputContainer>
            <Button device={device} onClick={handleClick}> 
                Send message
                <ArrowIcon id="arrow"/>
            </Button>
        </form>
    )
}