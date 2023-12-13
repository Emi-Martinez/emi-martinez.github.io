import SendArrow from "../icons/SendArrow.svg"
import { useDispatch, useSelector } from "react-redux"
import { formActions } from "../store/form-slice"
import { sendForm } from "../store/form-actions"

export default function ContactForm(){
    const form = useSelector(state => state.form.data)
    const dispatch = useDispatch()

    const handleChange = (e)=>{
        const {value,name} = e.target

        dispatch(formActions.changeForm({name,value}))
    }

    const handleClick = (e)=>{
        e.preventDefault()
        dispatch(sendForm(form))
    }

    return(
        <form>
            <label>
                <span>Your Name</span>
                <input name="name" placeholder="Your Name" onChange={handleChange}></input>
            </label>
            <label>
                <span>Your Email Address</span>
                <input name="emailAdress" placeholder="Your Email Address" onChange={handleChange}></input>
            </label>
            <label>
                <span>Project Details</span>
                <textarea name="projectDetails" placeholder="Project Details" onChange={handleChange}></textarea>
            </label>
            <label>
                <span>Your Budget Range</span>
                <input name="budgetRange" placeholder="$" onChange={handleChange}></input>
            </label>
            <label>
                <span>Your Timeline</span>
                <input name="timeline" placeholder="Ej:3-4 Meses" onChange={handleChange}></input>
            </label>
            <button onClick={handleClick}>
                Send message
                <SendArrow />
            </button>
        </form>
    )
}