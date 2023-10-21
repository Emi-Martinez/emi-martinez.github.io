import HomeHeroArea from "../components/HomeHeroArea"
import ContactMeFooter from "../components/ContactMeFooter"
import MyWork from "../components/MyWork"

export default function Home(){
    return(
      <div role="main">
         <HomeHeroArea />
         <MyWork />
         <ContactMeFooter />
      </div>
    )
}