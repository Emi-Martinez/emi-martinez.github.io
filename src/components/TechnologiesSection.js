import { TechnologiesData } from "../../public/TechnologiesData"
import TechnologyCard from "../components/TechnologyCard"
import Borders from "./style/Borders"
import H3 from "./style/H3"
import TecHeaderContainer from "./style/TecHeaderContainer"
import TechContainer from "./style/TechContainer"
import { useSelector } from "react-redux"

export default function TechnologiesSection(){
    const device = useSelector(state => state.device.data)
    const techItems = TechnologiesData.map((tech) => (
            <TechnologyCard
                key={tech.id}
                technology={tech}
            />
    ))

    // const device = useSelector(state => state.device.data)
    const h3Margin = (device == "phone" ? "32px 0px;" : "48px 0px;");

    return(
        <div data-testid='technologies'>
            <TecHeaderContainer>
                <Borders device={device}>
                    <H3 device={device} bold="true" margin={h3Margin}>Technologies i use to work</H3>
                </Borders>
            </TecHeaderContainer>
            <TechContainer device={device} role='list'>
                {techItems}
            </TechContainer>
        </div>
    )
}