import Carousel from "../components/Carousel"
import { useSelector } from "react-redux"
import H4 from "./style/H4"
import Paragraph from "./style/Paragraph"
import styled from "styled-components"

export default function ProjectHeroArea(){
    const project = useSelector(state => state.project.data)
    const device = useSelector(state => state.device.data)
    const lang = useSelector(state => state.language.data)

    const ProjectTextContainer = styled.div`
        margin: ${device == "phone" ? "0px 16px" : device == "tablet" ? "0px 56px" : "0px 80px"};
        width: ${device == "phone" ? "" : device == "tablet" ? "80%" : "65%"};
    `

    return(
        <div>
            <Carousel />
            <ProjectTextContainer>
                <H4 device={device} margin-bottom="24px">{project[lang].name}</H4>
                <Paragraph device={device}>{project[lang].description}</Paragraph>
            </ProjectTextContainer>
        </div>
    )
}