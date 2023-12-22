import { useParams } from "react-router-dom"
import H6 from "./style/H6"
import styled from "styled-components"

export default function TechnologyCard({technology}){
    const {projectId} = useParams() 
    const imgTechUrl = projectId != undefined ? technology.imgURL : `projects/${technology.imgURL}`

    const CardContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background-color: ${props => props.theme.black_5};
        padding: 32px 72px;
        margin-left: 40px;
        margin-top: 56px;
        width: fit-content;
        border-radius: 32px;
        box-shadow: 0px 4px 32px rgba(${props => props.theme.black_RGB}, 0.25);

        &:first-child{
            margin-left: 0px;
        }
    `
    return(
        <CardContainer>
            {/* src={`projects/${project.imgsURL[0]}`} */}
            <img src={imgTechUrl}></img>
            <H6 margin-top="16px;">{technology.name}</H6>
        </CardContainer>
    )
}