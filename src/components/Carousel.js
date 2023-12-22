import { useState } from "react"
import LeftCarouselArrow from "../icons/LeftCarouselArrow.svg"
import RightCarouselArrow from "../icons/RightCarouselArrow.svg"
import { useSelector } from "react-redux"
import styled from "styled-components"

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

    const CarouselContainer = styled.div`
            background-color: ${project.projectColor} ;
            height: 85vh;
            margin-bottom: 182px;
            /* padding: 80px 80px 0px; */
    `
    const Img = styled.img`
        object-fit: cover;
        width: 180vh;
        margin: 80px 80px 0px;
        border-radius: 32px;
        box-shadow: 0px 4px 4px rgba(${props => props.theme.black_RGB}, 0.25);
    `
    const CarButton = styled.button`
        position: absolute;
        ${props => props.pos === "left" ? `left: 128px`:`right: 144px`};
        top: 468px;

        background-color: ${props => props.theme.black_5};
        opacity: 0.75;
        border: none;
        border-radius: 100%;
        box-shadow: 0px 4px 4px rgba(${props => props.theme.black_RGB}, 0.25);
        padding: 16px ${props => props.pos === "left" ? `27.5px`:`23.5px`} 16px ${props => props.pos === "left" ? `23.5px`:`27.5px`};
        
        &:hover{
            opacity: 1;
        }
    `

    return(
        <CarouselContainer>
            <CarButton pos="left" title="Previous Image" onClick={handlePrevButton}>
                <LeftCarouselArrow />
            </CarButton>
            <Img src={project.imgsURL[imgIndex]}/>
            <CarButton pos="right" title="Next Image" onClick={handleNextButton}>
                <RightCarouselArrow />
            </CarButton>
        </CarouselContainer>
    )
}