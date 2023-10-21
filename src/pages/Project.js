import ProjectHeroArea from "../components/ProjectHeroArea"
import MyRole from "../components/MyRole"
import ProjectTechSection from "../components/ProjectTechSection"
import ContactMeFooter from "../components/ContactMeFooter"
import { ProjectData } from "../../public/ProjectData"
import { useParams } from "react-router-dom"

export default function Project(){
    const {projectId} = useParams()

    return(
        <div role='main'>
            <ProjectHeroArea />
            <MyRole />
            <ProjectTechSection />
            <ContactMeFooter />
        </div>
    )
}