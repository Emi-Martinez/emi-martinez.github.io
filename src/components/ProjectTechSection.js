import { TechnologiesData } from "../../public/TechnologiesData"
import TechnologyCard from "../components/TechnologyCard"
import { useSelector } from "react-redux"
import H3 from "./style/H3"
import Borders from "./style/Borders"
import TecHeaderContainer from "./style/TecHeaderContainer"
import TechContainer from "./style/TechContainer"
import { ProjectPageContent } from "../data/ProjectPageContent"

export default function ProjectTechSection(){
    const project = useSelector(state => state.project.data)
    const device = useSelector(state => state.device.data)
    const lang = useSelector(state => state.language.data)

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
                    <H3 device={device} bold="true" margin="48px 0px;">{ProjectPageContent[lang].techUsed}</H3>
                </Borders>
            </TecHeaderContainer>
            <TechContainer device={device}>
                {techs}
            </TechContainer>
        </div>
    )
}