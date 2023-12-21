import styled from "styled-components"
import H3 from "./style/H3"
import Paragraph from "./style/Paragraph"

export default function AboutMeHeroArea(){
    const ProfileImg = styled.img`
        object-fit: cover;
        width: 337px;
        height: 337px;
        border-radius: 100%;
    `
    const ProfileContainer = styled.div`
        display: flex;
        margin: 192px 80px 256px;
        justify-content: center;
    `
    const ProfileTextContainer = styled.div`
        display: flex;
        flex-direction: column;
        margin: 48px 48px;
        justify-content: space-between;
    `

    return(
        <ProfileContainer>
            <ProfileImg src="projects/imgs/profile/Profile-photo.jpg" role="myImg" />
            <ProfileTextContainer>
                <H3 gradiant="true" bold="true">I’m Emiliano Martinez</H3>
                <Paragraph>A freelancer web developer, passionate about computing and i’m into it since the high school.</Paragraph>
                <Paragraph>I help people to build and fix their web sites in the shortest time posible with the best quality.</Paragraph>
                <Paragraph>If you decide to require my services i will make your needs my priorities.</Paragraph>
            </ProfileTextContainer>
        </ProfileContainer>
    )
}