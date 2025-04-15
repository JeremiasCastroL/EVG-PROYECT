import { Outlet, Link } from "react-router-dom"
import { Footer } from "../Components/adminComponents/FooterAdmin"


export function Admin(){
    return (
        <section>
            <section>
                <Outlet/>
                <Footer/>
            </section>
        </section>
    )
}