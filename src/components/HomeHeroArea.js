import Paragraph from "./style/Paragraph";
import H1 from "./style/H1";
import H3 from "./style/H3";
import styled from "styled-components";

export default function HomeHeroArea(){
    const Container = styled.div`
        padding: 80px 256px 256px;
        display:flex;
        flex-direction: column;
        align-items: center;
    `

    return(
        <Container>
            <H3 gradiant="true">Hello!, I’m Emiliano</H3>
            <H1 margin="32px 0px">Freelance Web Developer</H1>
            <Paragraph text-align="center">If you’re looking for a web developer how can help to develop or fix your web, you have found the right one!</Paragraph>
        </Container>
    );
}