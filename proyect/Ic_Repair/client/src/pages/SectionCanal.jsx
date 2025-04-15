import { NavBar } from "./Components/navBar"
import { FooterSection } from "./Components/footer"
import { Newsletter } from "./Components/newsletter"
import { Section1 } from "./Components/canalComponents/section1"
import { Section2 } from "./Components/canalComponents/section2"
import { Section3 } from "./Components/canalComponents/section3"
import { Section4 } from "./Components/canalComponents/section4"


export function Canal(){
    return (
        <section>
                <NavBar/>
                <Section1/>
                <div className="px-[120px]">
                    <Section2/>
                    <Section3/>
                    <Section4/>
                </div>
                <Newsletter/>
                <FooterSection/>
        </section>
    )
}