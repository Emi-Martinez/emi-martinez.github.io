import { Link } from "react-router-dom"

export default function ProjectCard({project}){
    return(
        <div role="projectCard">
            <img src={`projects/${project.imgsURL[0]}`} role="projectImg" />
            <h5>{project.name}</h5>
            <p>{project.description}</p>
            <Link to={`/projects/${project.id}`}>Learn more ...</Link>
        </div>
    )
}