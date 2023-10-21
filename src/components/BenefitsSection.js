import DeliverySVG from '../icons/Delivery.svg'
import ProfSVG from '../icons/Professionalism.svg'
import QualitySVG from '../icons/Quality.svg'

export default function BenefitsSection(){
    return(
        <div>
            <h3>No matter the size of your project, you will always get:</h3>
            
            <ProfSVG />
            <h5>Professionalism</h5>
            <p>I will never false promises you something that i can’t do or build</p>
            
            <DeliverySVG />
            <h5>On-time delivery</h5>
            <p>I know time is money and i don’t pretend to waste yours or mine</p>

            <QualitySVG />
            <h5>Quality</h5>
            <p>The performance and clarity of my code is foundational to my work</p>
         </div>
    )
}