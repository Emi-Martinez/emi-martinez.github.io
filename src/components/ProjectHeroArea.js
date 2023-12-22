import Carousel from "../components/Carousel"
import { useSelector } from "react-redux"
import H4 from "./style/H4"
import Paragraph from "./style/Paragraph"
import styled from "styled-components"

export default function ProjectHeroArea(){
    const project = useSelector(state => state.project.data)
    const ProjectTextContainer = styled.div`
        margin-left: 80px;
        width: 65%;
    `
    return(
        <div>
            <Carousel />
            <ProjectTextContainer>
                <H4 margin-bottom="24px">{project.name}</H4>
                <Paragraph>{project.description}</Paragraph>
            </ProjectTextContainer>
        </div>
    )
}