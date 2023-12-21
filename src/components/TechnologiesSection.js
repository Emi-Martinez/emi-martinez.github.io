import { TechnologiesData } from "../../public/TechnologiesData"
import TechnologyCard from "../components/TechnologyCard"
import Borders from "./style/Borders"
import H3 from "./style/H3"
import styled from "styled-components"

export default function TechnologiesSection(){
    const techItems = TechnologiesData.map(tech => (
            <TechnologyCard
                key={tech.id}
                technology={tech}
            />
    ))

//     const techItems = TechnologiesData.map(tech => (
//         <TechnologyCard
//             key={tech.id}
//             technology={tech}
//         />
// ))

    const TecHeaderContainer = styled.div`
        display: flex;
        flex-direction: column;

        align-items: center;
    `
    const TechContainer = styled.div`
        display: flex;
        justify-content: center;
        padding: 72px 208px;
        flex-wrap: wrap;
        /* width: min-content; */
    `

    return(
        <div data-testid='technologies'>
            <TecHeaderContainer>
                <Borders>
                    <H3 bold="true" margin="48px 0px;">Technologies i use to work</H3> {/* Bold */}
                </Borders>
            </TecHeaderContainer>
            <TechContainer role='list'>
                {techItems}
            </TechContainer>
        </div>
    )
}