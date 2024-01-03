import styled from 'styled-components'
import DeliverySVG from '../icons/Delivery.svg'
import ProfSVG from '../icons/Professionalism.svg'
import QualitySVG from '../icons/Quality.svg'
import H3 from './style/H3'
import H5 from './style/H5'
import Paragraph from './style/Paragraph'
import { useSelector } from 'react-redux'

export default function BenefitsSection(){
    const BenefitsContainer = styled.div`
        margin: ${props => props.device == "phone" ? "0px 32px 136px;" : props.device == "tablet" ? "0px 136px 156px" : "0px 208px 256px"};
    `
    const BenefitsBodyContainer = styled.div`
        display: flex;
        justify-content: space-between;
        ${props => props.device == "phone" ? "display: flex; flex-direction: column;" : ""};
    `
    const BenefitContainer = styled.div`
        width: ${props => props.device == "phone" ? "" : "336px"};
        display: flex;
        flex-direction: column;
        ${props => props.device == "phone" ? "align-items: center; text-align: center; margin-bottom: 56px" : ""};
    `
    const DeliveryIcon = styled(DeliverySVG)`
        color: ${props => props.theme.secondaryColor};
        transform: scale(3);
        margin-bottom: ${props => props.device == "phone" ? "8px" : "24px"};
        margin-left: ${props => props.device == "phone" ? "" : "19px"};
    `
    const ProfIcon = styled(ProfSVG)`
        color: ${props => props.theme.secondaryColor};
        transform: scale(3);
        margin-bottom: ${props => props.device == "phone" ? "8px" : "24px"};
        margin-left: ${props => props.device == "phone" ? "" : "19px"};
    `
    const QualityIcon = styled(QualitySVG)`
        color: ${props => props.theme.secondaryColor};
        transform: scale(3);
        margin-bottom: ${props => props.device == "phone" ? "8px" : "24px"};
        margin-left: ${props => props.device == "phone" ? "" : "19px"};
    `
    const device = useSelector(state => state.device.data)

    const h3width = (device == "phone" ? "" : "576px");
    const h3MarginBottom = (device == "phone" ? "48px" : "64px;");
    const h5Margin = (device == "phone" ? "16px 0px 8px" : "24px 0px;");

    return(
        <BenefitsContainer device={device}>
            <H3 device={device} width={h3width} margin-bottom={h3MarginBottom}>No matter the size of your project, you will always get:</H3>
            <BenefitsBodyContainer device={device}>
                <BenefitContainer device={device}>
                    <ProfIcon device={device} />
                    <H5 device={device} margin={h5Margin}>Professionalism</H5>
                    <Paragraph device={device}>I will never false promises you something that i can’t do or build</Paragraph> 
                </BenefitContainer>
                <BenefitContainer device={device}>
                    <DeliveryIcon device={device} />
                    <H5 device={device} margin={h5Margin}>On-time delivery</H5>
                    <Paragraph device={device}>I know time is money and i don’t pretend to waste yours or mine</Paragraph>
                </BenefitContainer>
                <BenefitContainer device={device}>
                    <QualityIcon device={device} />
                    <H5 device={device} margin={h5Margin}>Quality</H5>
                    <Paragraph device={device}>The performance and clarity of my code is foundational to my work</Paragraph>
                </BenefitContainer>
            </BenefitsBodyContainer>
         </BenefitsContainer>
    )
}