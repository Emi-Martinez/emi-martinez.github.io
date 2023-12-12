import Carousel from "../components/Carousel"
import { useSelector } from "react-redux"

export default function ProjectHeroArea(){
    const project = useSelector(state => state.project.data)

    return(
        <div>
            <Carousel />
            <h4>{project.name}</h4>
            <p>{project.description}</p>
        </div>
    )
}