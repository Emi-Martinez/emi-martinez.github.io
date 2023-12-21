import styled from 'styled-components'
import DeliverySVG from '../icons/Delivery.svg'
import ProfSVG from '../icons/Professionalism.svg'
import QualitySVG from '../icons/Quality.svg'
import H3 from './style/H3'
import H5 from './style/H5'
import Paragraph from './style/Paragraph'

export default function BenefitsSection(){
    const BenefitsContainer = styled.div`
        margin: 0px 208px 256px;
    `

    const BenefitsBodyContainer = styled.div`
        display: flex;
        justify-content: space-between;
    `
    const BenefitContainer = styled.div`
        width: 336px;
        display: flex;
        flex-direction: column;
    `
    const DeliveryIcon = styled(DeliverySVG)`
        color: ${props => props.theme.secondaryColor};
        transform: scale(3);
        margin-bottom: 24px;
        margin-left: 19px;
    `
    const ProfIcon = styled(ProfSVG)`
        color: ${props => props.theme.secondaryColor};
        transform: scale(3);
        margin-bottom: 24px;
        margin-left: 19px;
    `
    const QualityIcon = styled(QualitySVG)`
        color: ${props => props.theme.secondaryColor};
        transform: scale(3);
        margin-bottom: 24px;
        margin-left: 19px;
    `
    
    return(
        <BenefitsContainer>
            <H3 width="576px;" margin-bottom="64px;">No matter the size of your project, you will always get:</H3>
            <BenefitsBodyContainer>
                <BenefitContainer>
                    <ProfIcon />
                    <H5 margin="24px 0px;">Professionalism</H5>
                    <Paragraph>I will never false promises you something that i can’t do or build</Paragraph> 
                </BenefitContainer>
                <BenefitContainer>
                    <DeliveryIcon />
                    <H5 margin="24px 0px;">On-time delivery</H5>
                    <Paragraph>I know time is money and i don’t pretend to waste yours or mine</Paragraph>
                </BenefitContainer>
                <BenefitContainer>
                    <QualityIcon />
                    <H5 margin="24px 0px;">Quality</H5>
                    <Paragraph>The performance and clarity of my code is foundational to my work</Paragraph>
                </BenefitContainer>
            </BenefitsBodyContainer>
         </BenefitsContainer>
    )
}