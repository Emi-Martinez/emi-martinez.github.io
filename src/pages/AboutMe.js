import AboutMeHeroArea from "../components/AboutMeHeroArea"
import BenefitsSection from "../components/BenefitsSection"
import TechnologiesSection from "../components/TechnologiesSection"
import ContactMeFooter from "../components/ContactMeFooter"

export default function AboutMe(){

    
    return(
        <div role="main">
            <AboutMeHeroArea />
            <BenefitsSection />
            <TechnologiesSection />
            <ContactMeFooter />
        </div>
    )
}