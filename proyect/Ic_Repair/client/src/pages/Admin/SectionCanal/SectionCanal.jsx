import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { Footer } from "../../Components/adminComponents/FooterAdmin"
import { BarAdmin } from "../../Components/adminComponents/BarAdmin"

export function AdminCanal() {
    return (
        <div>
            <section>
                <Outlet />
            </section>
        </div>
    )
}