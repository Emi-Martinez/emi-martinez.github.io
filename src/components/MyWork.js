import { ProjectData } from "../../public/ProjectData"
import ProjectCard from "../components/ProjectCard"

export default function MyWork(){
    const Projects = ProjectData.map(project =>(
        <ProjectCard 
            key={project.id}
            project={project}
        />
    ))
    
    return(
        <>
            <h3>My Work</h3> {/* Bold and Black */}
            <section role="projects">
                {Projects}
            </section>
        </>
    )
}