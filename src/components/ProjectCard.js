import H5 from "./style/H5"
import Paragraph from "./style/Paragraph"
import HeadLink from "./style/HeadLink"
import H6 from "./style/H6"
import styled from "styled-components"
import { useTheme } from "styled-components"
import Figure from "./style/Figure"
import { useSelector } from "react-redux"

export default function ProjectCard({project,index}){
    const theme = useTheme()

    const invert = (index)=>{
        if (index % 2 != 0){
            return true
        }
        return false
    }

    const Img = styled.img`
        object-fit: cover;
        width: ${props => props.device == "phone" ? "400px" : props.device == "tablet" ? "400px" : "504px"};
        height: ${props => props.device == "phone" ? "272px" : props.device == "tablet" ? "544px" : "680px"};
        border-radius: 32px;

        box-shadow: 0px 4px 16px rgba(${props => props.theme.black_RGB}, 0.25);
        order: ${props => props.invert ? 2 : 1};
    `

    const CardContainer = styled.div`
        margin: ${props => props.device == "phone" ? "216px 16px 120px" : props.device == "tablet" ? "0px 32px 64px" : "0px 208px 96px"};

        display: flex;
        flex-direction: ${props => props.device == "phone" ? "column" : props.device == "tablet" ? "row" : "row"};
        align-items: center;

        &:first-child{
            margin: ${props => props.device == "phone" ? "0px 16px 120px" : props.device == "tablet" ? "0px 32px 64px" : "0px 208px 96px"};
        }
    `
    const CardTextContainer = styled.div`
        display: flex;
        flex-direction: column;

        ${props => props.device == "phone" ? "margin-top: 16px; text-align: center;" : props.device == "tablet" ? props.invert ? "margin-right: 24px; text-align: end;" : "margin-left: 24px;" : props.invert ? "margin-right: 24px; text-align: end;" : "margin-left: 24px;"};
        
        justify-content: center;
        order: ${props => props.invert ? 1 : 2};
    `
    const HeadingContainer = styled.div`
        padding-bottom: ${props => props.device == "phone" ? "8px" : props.device == "tablet" ? "24px" : "24px"};
        margin-bottom: ${props => props.device == "phone" ? "8px" : props.device == "tablet" ? "24px" : "24px"};
        border-bottom: 1px solid ${props => props.theme.black_5};
    
    `
    const device = useSelector(state => state.device.data)
    const invertImgAndText = ( device == "phone" ? "" : device == "tablet" ? invert(index) : invert(index) )
    // const 
    return(
        <CardContainer device={device} role="projectCard">
            <Img device={device} src={`projects/${project.imgsURL[0]}`} role="projectImg" invert={invertImgAndText} />
            <CardTextContainer device={device} invert={invertImgAndText}>
                <HeadingContainer device={device}><H5 device={device} >{project.name}</H5></HeadingContainer>
                <Paragraph device={device} color={theme.black}>{project.description}</Paragraph>
                <H6 device={device} margin-top="24px"><HeadLink to={`/projects/${index}`}>Learn more ...</HeadLink></H6>
            </CardTextContainer>
            <Figure color={project.projectColor} invert={invert(index)}/>
        </CardContainer>
    )
}