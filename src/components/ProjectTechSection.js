import { ProjectData } from "../../public/ProjectData"
import { TechnologiesData } from "../../public/TechnologiesData"
import TechnologyCard from "../components/TechnologyCard"

export default function ProjectTechSection(){
    const techs = TechnologiesData.map(
        (tech) => (ProjectData[0].idTechInThisProyect.includes(tech.id) ? 
        <TechnologyCard
            key={tech.id} 
            technology={tech}
        /> : null)
    )

    return(
        <div data-testid='technologies'>
            <h3>Technologies used in this project</h3> {/* bold */}
            <div>
                {techs}
            </div>
        </div>
    )
}