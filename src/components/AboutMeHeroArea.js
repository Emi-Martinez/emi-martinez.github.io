import styled from "styled-components"
import H3 from "./style/H3"
import Paragraph from "./style/Paragraph"
import { useSelector } from "react-redux"
import { aboutMePageContent } from "../data/aboutMePageContent"

export default function AboutMeHeroArea(){
    const lang = useSelector(state => state.language.data)
    const ProfileImg = styled.img`
        object-fit: cover;
        width: 337px;
        height: 337px;
        border-radius: 100%;
    `
    const ProfileContainer = styled.div`
        display: flex;
        flex-direction: ${props => props.device == "phone" ? "column; align-items: center;" : props.device == "tablet" ? "row" : "row"};
        margin: ${props => props.device == "phone" ? "71px 16px 136px" : props.device == "tablet" ? "192px 56px 256px" : "192px 80px 256px"};
        justify-content: center;
        
    `
    const ProfileTextContainer = styled.div`
        display: flex;
        flex-direction: column;
        margin: ${props => props.device == "phone" ? "16px 0px; text-align: center;" : props.device == "tablet" ? "48px 48px" : "48px 48px"};
        justify-content: space-between;        
    `
    const device = useSelector(state => state.device.data)
    const myDescriptionMargin = (device == "phone" ? "16px" : device == "tablet" ? "" : "")
    const myDescriptionName = (device == "phone" ? "8px" : device == "tablet" ? "" : "")
    return(
        <ProfileContainer device={device}>
            <ProfileImg src="projects/imgs/profile/Profile-photo.jpg" role="myImg" />
            <ProfileTextContainer device={device}>
                <H3 device={device} gradiant="true" bold="true" margin-bottom={myDescriptionName}>{aboutMePageContent[lang].myDescriptionName}</H3>
                <Paragraph device={device} margin-bottom={myDescriptionMargin}>{aboutMePageContent[lang].myDescription1}</Paragraph>
                <Paragraph device={device} margin-bottom={myDescriptionMargin}>{aboutMePageContent[lang].myDescription2}</Paragraph>
                <Paragraph device={device} margin-bottom={myDescriptionMargin}>{aboutMePageContent[lang].myDescription3}</Paragraph>
            </ProfileTextContainer>
        </ProfileContainer>
    )
}