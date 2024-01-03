import { useParams } from "react-router-dom"
import H6 from "./style/H6"
import styled from "styled-components"
import { useSelector } from "react-redux"

export default function TechnologyCard({technology}){
    const {projectId} = useParams() 
    const imgTechUrl = projectId != undefined ? technology.imgURL : `projects/${technology.imgURL}`
    const device = useSelector(state => state.device.data)

    const CardContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background-color: ${props => props.theme.black_5};
        padding: ${device == "phone" ? "32px 8px" : device == "tablet" ? "32px 56px" : "32px 72px"};
        margin-top: ${device == "phone" ? "32px" : device == "tablet" ? "56px" : "56px"};
        width: ${device == "phone" ? "136px" : "fit-content"};
        border-radius: 32px;
        box-shadow: 0px 4px 32px rgba(${props => props.theme.black_RGB}, 0.25);

        &:first-child{
            margin-left: 0px;
        }
        
        &:last-child{
            margin-left: ${device == "phone" ? "0px" : ""};;
        }
    `

    return(
        <CardContainer>
            {/* src={`projects/${project.imgsURL[0]}`} */}
            <img src={imgTechUrl}></img>
            <H6 device={device} margin-top="16px;">{technology.name}</H6>
        </CardContainer>
    )
}