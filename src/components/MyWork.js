import { ProjectData } from "../../public/ProjectData"
import ProjectCard from "../components/ProjectCard"

export default function MyWork(){
    const Projects = ProjectData.map((project,i) =>(
        <ProjectCard 
            key={project.id}
            project={project}
            index={i}
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