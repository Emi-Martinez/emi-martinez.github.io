import { useState } from "react"
import LeftCarouselArrow from "../icons/LeftCarouselArrow.svg"
import RightCarouselArrow from "../icons/RightCarouselArrow.svg"
import { useSelector } from "react-redux"

export default function Carousel(){
    const [imgIndex, setImgIndex] = useState(0)
    const project = useSelector(state => state.project.data)

    const handleNextButton = ()=>{
        if (imgIndex < (project.imgsURL.length - 1)){
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
            <img src={project.imgsURL[imgIndex]}></img>
            <button title="Next Image" onClick={handleNextButton}>
                <RightCarouselArrow />
            </button>
        </div>
    )
}