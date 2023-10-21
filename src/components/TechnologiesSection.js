import { TechnologiesData } from "../../public/TechnologiesData"
import TechnologyCard from "../components/TechnologyCard"

export default function TechnologiesSection(){

    const techItems = TechnologiesData.map(tech =>(
            <TechnologyCard
                key={tech.id}
                technology={tech}
            />
    ))

    return(
        <div data-testid='technologies'>
            <h3>Technologies i use to work</h3> {/* Bold */}
            <div role='list'>
                {techItems}
            </div>
        </div>
    )
}