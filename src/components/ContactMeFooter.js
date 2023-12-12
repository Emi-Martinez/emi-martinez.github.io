import { Link } from "react-router-dom"

export default function ContactMeFooter(){
    return(
        <div role="footer">
            <h4>Freelance Web Developer</h4>
            <p>If you are looking for a developer which can become your design to reality, or solve some functionality issue on an existing web. Contact me!</p>
            <h6>emi.martinez9696@gmail.com</h6>{/* h7 */}
            <Link to={`/contact`}>Got a project in mind? Contact me!</Link>
        </div>
    )
}