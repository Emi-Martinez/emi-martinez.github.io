import { TechnologiesData } from "../../public/TechnologiesData"
import TechnologyCard from "../components/TechnologyCard"
import { useSelector } from "react-redux"
import H3 from "./style/H3"
import Borders from "./style/Borders"
import TecHeaderContainer from "./style/TecHeaderContainer"
import TechContainer from "./style/TechContainer"

export default function ProjectTechSection(){
    const project = useSelector(state => state.project.data)
    const device = useSelector(state => state.device.data)

    const techs = TechnologiesData.map(
        (tech,i) => (project.idTechInThisProyect.includes(tech.id) ? 
        <TechnologyCard
            key={tech.id}
            technology={tech}
            pos={i}
            pag="project"
        /> : null)
    )
    

    return(
        <div data-testid='technologies'>
            <TecHeaderContainer>
                <Borders device={device}>
                    <H3 device={device} bold="true" margin="48px 0px;">Technologies used in this project</H3> {/* bold */}
                </Borders>
            </TecHeaderContainer>
            <TechContainer device={device}>
                {techs}
            </TechContainer>
        </div>
    )
}