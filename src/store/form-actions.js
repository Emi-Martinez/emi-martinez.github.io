import axios from "axios";

export const sendForm = (form)=>{
    return async (dispatch) => {
        const postHandler = async ()=>{
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            const response = await axios.post(form.direction,{
                name: form.name,
                emailAdress: form.emailAdress,
                projectDetails: form.projectDetails,
                budgetRange: form.budgetRange,
                timeline: form.timeline,
                _captcha: "false"
                
            })

            return response
        }

        try {
            const r = await postHandler()
        } catch (error) {
            console.log(error)
        }
    }
}