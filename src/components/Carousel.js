import { useState } from "react"
import { ProjectData } from "../../public/ProjectData"
import LeftCarouselArrow from "../icons/LeftCarouselArrow.svg"
import RightCarouselArrow from "../icons/RightCarouselArrow.svg"

export default function Carousel(){
    const [imgIndex, setImgIndex] = useState(1)
    const [projectURL,setProjectURL] = useState(ProjectData[1].imgsURL[imgIndex])

    const handleNextButton = ()=>{
        if (imgIndex < (ProjectData[1].imgsURL.length - 1)){
            setImgIndex(index => index + 1)
        }
    }

    const handlePrevButton = ()=>{
        if (imgIndex > 0){
            setImgIndex(index => index - 1)
        }
    }

    return(
        <div>
            <button title="Previous Image" onClick={handlePrevButton}>
                <LeftCarouselArrow />
            </button>
            <img src={ProjectData[1].imgsURL[imgIndex]}></img>
            <button title="Next Image" onClick={handleNextButton}>
                <RightCarouselArrow />
            </button>
        </div>
    )
}