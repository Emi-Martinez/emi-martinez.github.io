import H5 from "./style/H5"
import Paragraph from "./style/Paragraph"
import HeadLink from "./style/HeadLink"
import H6 from "./style/H6"
import styled from "styled-components"
import { useTheme } from "styled-components"

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
        width: 504px;
        height: 680px;

        border-radius: 32px;

        box-shadow: 0px 4px 16px rgba(${props => props.theme.black_RGB}, 0.25);
        order: ${props => props.invert ? 2 : 1};
    `

    const CardContainer = styled.div`
        margin: 0px 208px 96px;

        display: flex;
    `
    const CardTextContainer = styled.div`
        display: flex;
        flex-direction: column;

        ${props => props.invert ? "margin-right: 24px; text-align: end;" : "margin-left: 24px;"}
        justify-content: center;
        order: ${props => props.invert ? 1 : 2};
    `
    const HeadingContainer = styled.div`
        padding-bottom:24px;
        margin-bottom:24px;
        border-bottom: 1px solid ${props => props.theme.black_5};
    
    `
    const Figure = styled.div`
        position: absolute;
        left: 0;

        z-index: -1;
    `
    const Triangle = styled.div`
        width: 0;
        height: 0;
        border-top: 15vh solid transparent;
        ${props => props.invert ? `border-right: 199.3vh solid ${props.backColor};`:`border-left: 199.3vh solid ${props.backColor};`}
        border-bottom: 15vh solid ${props => props.backColor};
    `
    const Triangle2 = styled.div`
        width: 0;
        height: 0;
        border-top: 15vh solid ${props => props.backColor};
        ${props => props.invert ? `border-right: 199.3vh solid ${props.backColor};`:`border-left: 199.3vh solid ${props.backColor};`}
        border-bottom: 15vh solid transparent;
    `

    return(
        <CardContainer role="projectCard">
            <Img src={`projects/${project.imgsURL[0]}`} role="projectImg" invert={invert(index)} />
            <CardTextContainer invert={invert(index)}>
                <HeadingContainer><H5 >{project.name}</H5></HeadingContainer>
                <Paragraph color={theme.black}>{project.description}</Paragraph>
                <H6 margin-top="24px"><HeadLink to={`/projects/${index}`}>Learn more ...</HeadLink></H6>
                <Figure >
                    <Triangle invert={invert(index)} backColor={project.projectColor} />
                    <Triangle2 invert={invert(index)} backColor={project.projectColor} />
                </Figure>
            </CardTextContainer>
        </CardContainer>
    )
}