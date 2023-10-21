import SendArrow from "../icons/SendArrow.svg"

export default function ContactForm(){
    return(
        <form>
            <label>
                <span>Your Name</span>
                <input placeholder="Your Name"></input>
            </label>
            <label>
                <span>Your Email Address</span>
                <input placeholder="Your Email Address"></input>
            </label>
            <label>
                <span>Project Details</span>
                <textarea placeholder="Project Details"></textarea>
            </label>
            <label>
                <span>Your Budget Range</span>
                <input placeholder="$"></input>
            </label>
            <label>
                <span>Your Timeline</span>
                <input placeholder="Ej:3-4 Meses"></input>
            </label>
            <button>
                Send message
                <SendArrow />
            </button>
        </form>
    )
}