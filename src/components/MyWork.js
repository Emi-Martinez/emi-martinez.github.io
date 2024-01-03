import styled from "styled-components"
import { ProjectData } from "../../public/ProjectData"
import ProjectCard from "../components/ProjectCard"
import H3 from "./style/H3"
import Paragraph from "./style/Paragraph"
import Borders from "./style/Borders"
import { useSelector } from "react-redux"

export default function MyWork(){
    const Projects = ProjectData.map((project,i) =>(
        <ProjectCard 
            key={project.id}
            project={project}
            index={i}
        />
    ))

    const MyWorkHeadContainer = styled.div`
        display: flex;
        flex-direction: column;

        align-items: center;

        margin-bottom: 148px;
    `
    const device = useSelector(state => state.device.data)
    const h3Margin = (device == "phone" ? "32px 0px 0px" : device == "tablet" ? "48px 0px 0px" : "48px 0px 0px")
    const paragraphMargin = (device == "phone" ? "16px 0px 32px" : device == "tablet" ? "24px 30px 48px" : "24px 30px 48px")
    return(
        <>
            <MyWorkHeadContainer>
                <Borders device={device}>
                    <H3 device={device} bold='true' margin={h3Margin}>My Work</H3> {/* Bold and Black */}
                    <Paragraph device={device} margin={paragraphMargin} text-align="center">I craft functional and fast web applications, and help to fix bugs and malfunctions in existing ones.</Paragraph>
                </Borders>
            </MyWorkHeadContainer>
            <section role="projects">
                {Projects}
            </section>
        </>
    )
}