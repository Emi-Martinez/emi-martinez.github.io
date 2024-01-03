import ContactHeroArea from "../components/ContactHeroArea"
import QASection from "../components/QASection"
import FormSection from "../components/FormSection"
import { QAData } from "../../public/QAData"
import { useDispatch } from "react-redux"
import { questionsActions } from "../store/questions-slice"

export default function Contact(){
    const dispatch = useDispatch()
    dispatch(questionsActions.setQuestions({questions:QAData}))

    return(
        <div role="main">
            <ContactHeroArea />
            <QASection />
            <FormSection />
        </div>
    )
}