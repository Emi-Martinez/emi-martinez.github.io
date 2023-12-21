import styled from "styled-components"
import { ProjectData } from "../../public/ProjectData"
import ProjectCard from "../components/ProjectCard"
import H3 from "./style/H3"
import Paragraph from "./style/Paragraph"
import Borders from "./style/Borders"

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
    
    return(
        <>
            <MyWorkHeadContainer>
                <Borders>
                    <H3 bold='true' margin="48px 0px 0px">My Work</H3> {/* Bold and Black */}
                    <Paragraph margin="24px 30px 48px" text-align="center">I craft functional and fast web applications, and help to fix bugs and malfunctions in existing ones.</Paragraph>
                </Borders>
            </MyWorkHeadContainer>
            <section role="projects">
                {Projects}
            </section>
        </>
    )
}