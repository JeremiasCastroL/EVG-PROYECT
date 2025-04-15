import { NavBar } from "./Components/navBar"
import { FooterSection } from "./Components/footer"
import { Newsletter } from "./Components/newsletter.jsx"
import { Section1 } from "./Components/homeComponents/section1.jsx"
import { Section2 } from "./Components/homeComponents/section2.jsx"
import { Section3 } from "./Components/homeComponents/Section3.jsx"
import { Section4 } from "./Components/homeComponents/Section4.jsx"



export function Home(){
  
    return (
        <section className="">
            <NavBar/>
            <Section1/>
            <div className="px-[80px] mt-[100px] pb-[90px]">
                <Section2/>
                <Section3/>
            </div>
            <Section4/>
            <Newsletter/>
            <FooterSection/>
        </section>
    )
}