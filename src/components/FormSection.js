import ContactForm from "./ContactForm"

export default function FormSection(){
    return(
        <div>
        <h3>You need a developer?</h3> {/* bold */}
        <p>Use the contact form to give me as much detail as possible and i’ll answer you as soon as i can.</p>
        <p>Alternatively, get in touch with me using the information below.</p>
        <h6>emi.martinez9696@gmail.com</h6>
        <ContactForm />
    </div>
    )
}