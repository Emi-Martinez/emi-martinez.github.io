import ProjectHeroArea from "../components/ProjectHeroArea"
import MyRole from "../components/MyRole"
import ProjectTechSection from "../components/ProjectTechSection"
import ContactMeFooter from "../components/ContactMeFooter"
import { ProjectData } from "../../public/ProjectData"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { projectActions } from "../store/project-slice"

export default function Project(){
    const {projectId} = useParams()
    const dispatch = useDispatch()

    dispatch(projectActions.setProject({project: ProjectData[projectId]}))

    return(
        <div role='main'>
            <ProjectHeroArea />
            <MyRole />
            <ProjectTechSection />
            <ContactMeFooter />
        </div>
    )
}