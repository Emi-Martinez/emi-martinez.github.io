import Paragraph from "./style/Paragraph";
import H1 from "./style/H1";
import H3 from "./style/H3";
import styled from "styled-components";
import { useSelector } from "react-redux";

export default function HomeHeroArea(){
    const Container = styled.div`
        padding: ${props => props.device == "phone" ? "72px 16px 136px" : props.device == "tablet" ? "80px 144px 156px" : "80px 256px 256px"};
        display:flex;
        flex-direction: column;
        align-items: center;
    `
    const device = useSelector(state => state.device.data)

    const h1Margin = (device == "phone" ? "8px 0px" : device == "tablet" ? "24px 0px" : "32px 0px")

    return(
        <Container device={device}>
            <H3 device={device} gradiant="true">Hello!, I’m Emiliano</H3>
            <H1 device={device} margin={h1Margin}>Freelance Web Developer</H1>
            <Paragraph device={device} text-align="center">If you’re looking for a web developer how can help to develop or fix your web, you have found the right one!</Paragraph>
        </Container>
    );
}