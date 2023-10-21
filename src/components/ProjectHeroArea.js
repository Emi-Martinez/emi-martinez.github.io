import Carousel from "../components/Carousel"
import { ProjectData } from "../../public/ProjectData"

export default function ProjectHeroArea(){
    return(
        <div>
            <Carousel />
            <h4>{ProjectData[0].name}</h4>
            <p>{ProjectData[0].description}</p>
        </div>
    )
}