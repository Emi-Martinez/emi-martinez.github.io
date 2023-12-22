import { TechnologiesData } from "../../public/TechnologiesData"
import TechnologyCard from "../components/TechnologyCard"
import { useSelector } from "react-redux"
import H3 from "./style/H3"
import Borders from "./style/Borders"
import TecHeaderContainer from "./style/TecHeaderContainer"
import TechContainer from "./style/TechContainer"

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
            <TecHeaderContainer>
                <Borders>
                    <H3 bold="true" margin="48px 0px;">Technologies used in this project</H3> {/* bold */}
                </Borders>
            </TecHeaderContainer>
            <TechContainer>
                {techs}
            </TechContainer>
        </div>
    )
}