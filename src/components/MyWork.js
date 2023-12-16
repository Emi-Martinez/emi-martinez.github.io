import styled from "styled-components"
import { ProjectData } from "../../public/ProjectData"
import ProjectCard from "../components/ProjectCard"
import H3 from "./style/H3"
import Paragraph from "./style/Paragraph"

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
    const Borders = styled.div`
        width: 55%;
        display: flex;
        flex-direction: column;

        align-items: center;
        border-top: 1px solid ${props => props.theme.black_25};
        border-bottom: 1px solid ${props => props.theme.black_25};

        &::before{
            margin-top: 16px;
            content: '';
            border-top: 1px solid ${props => props.theme.black_25};
            display: block;
            width: 100%;
        }
        &::after{
            margin-bottom: 16px;
            content: '';
            border-bottom: 1px solid ${props => props.theme.black_25};
            display: block;
            width: 100%;
        }
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