import { useParams } from "react-router-dom"

export default function TechnologyCard({technology}){
    const {projectId} = useParams() 
    const imgTechUrl = projectId != undefined ? technology.imgURL : `projects/${technology.imgURL}`

    return(
        <div>
            {/* src={`projects/${project.imgsURL[0]}`} */}
            <img src={imgTechUrl}></img>
            <h6>{technology.name}</h6>
        </div>
    )
}