import { TechnologiesData } from "../../public/TechnologiesData"
import TechnologyCard from "../components/TechnologyCard"
import { useSelector } from "react-redux"

export default function ProjectTechSection(){
    const project = useSelector(state => state.project.data)
    
    const techs = TechnologiesData.map(
        (tech) => (project.idTechInThisProyect.includes(tech.id) ? 
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