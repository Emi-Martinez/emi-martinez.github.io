import styled from "styled-components"
import { useSelector } from "react-redux"

const Container = styled.div`
        position: absolute;
        left: 0;
        /* top: 20px; */
        ${props => props.top ? `top: ${props.top};` : ""}
        z-index: -1;
    `
const Triangle = styled.div`
    width: 0;
    height: 0;
    border-top: ${props => props.size ? props.size : `173.03px`} solid transparent;
    ${props => props.invert ? `border-right: ${props.w} solid ${props.backColor};`:`border-left: ${props.w} solid ${props.backColor};`}
    border-bottom: ${props => props.size ? props.size : `173.03px`}  solid ${props => props.backColor};
`
const Triangle2 = styled.div`
    width: 0;
    height: 0;
    border-top: ${props => props.size ? props.size : `173.03px`}  solid ${props => props.backColor};
    ${props => props.invert ? `border-right: ${props.w} solid ${props.backColor};`:`border-left: ${props.w} solid ${props.backColor};`}
    border-bottom: ${props => props.size ? props.size : `173.03px`}  solid transparent;

    ${props => props}
`

export default function Figure({color,invert,size,top}){
    const device = useSelector(state => state.device.data)
    const width = (device == "phone" ? "100vw" : device == "tablet" ? "100vw" : "99.13vw");
    return(
        <Container top={top}>
            <Triangle w={width} size={size} invert={invert} backColor={color} />
            <Triangle2 w={width} size={size} invert={invert} backColor={color} />
        </Container>
    )
}