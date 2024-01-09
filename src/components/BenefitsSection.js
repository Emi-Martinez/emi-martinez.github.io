import styled from 'styled-components'
import DeliverySVG from '../icons/Delivery.svg'
import ProfSVG from '../icons/Professionalism.svg'
import QualitySVG from '../icons/Quality.svg'
import H3 from './style/H3'
import H5 from './style/H5'
import Paragraph from './style/Paragraph'
import { useSelector } from 'react-redux'
import { aboutMePageContent } from '../data/aboutMePageContent'

export default function BenefitsSection(){
    const lang = useSelector(state => state.language.data)
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
            <H3 device={device} width={h3width} margin-bottom={h3MarginBottom}>{aboutMePageContent[lang].benefitsTitle}</H3>
            <BenefitsBodyContainer device={device}>
                <BenefitContainer device={device}>
                    <ProfIcon device={device} />
                    <H5 device={device} margin={h5Margin}>{aboutMePageContent[lang].profesionalismTitle}</H5>
                    <Paragraph device={device}>{aboutMePageContent[lang].profesionalismDesc}</Paragraph> 
                </BenefitContainer>
                <BenefitContainer device={device}>
                    <DeliveryIcon device={device} />
                    <H5 device={device} margin={h5Margin}>{aboutMePageContent[lang].deliveryTitle}</H5>
                    <Paragraph device={device}>{aboutMePageContent[lang].deliveryDesc}</Paragraph>
                </BenefitContainer>
                <BenefitContainer device={device}>
                    <QualityIcon device={device} />
                    <H5 device={device} margin={h5Margin}>{aboutMePageContent[lang].qualityTitle}</H5>
                    <Paragraph device={device}>{aboutMePageContent[lang].qualityDesc}</Paragraph>
                </BenefitContainer>
            </BenefitsBodyContainer>
         </BenefitsContainer>
    )
}