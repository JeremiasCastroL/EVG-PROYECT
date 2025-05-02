import { Link } from "react-router-dom"

export function BarAdmin() {
    return (
        <header className="px-[40px] z-30 top-[0] justify-between fixed w-[100%] py-[10px] gap-[40px] bg-[#f6b000] flex items-center">
            <div className="flex items-center">
                <img src="../../../public/assets/LOGO DE EVG2.png" alt="" className="w-[60px] h-[60px]" />
                <h5 className="font-[Poppins] text-[17px] font-[600] text-[#fff]">En Vida de las Gallinas 2</h5>
            </div>
            <div className="flex gap-[30px] items-center">
                <Link to="/" className="text-[#fff] font-[Poppins]">Inicio</Link>
                <Link to="/admin" className="text-[#fff] font-[Poppins]">Admin</Link>
                <Link to="/admin/public" className="text-[#fff] font-[Poppins]">Blog</Link>
                <Link to="/admin/users" className="text-[#fff] font-[Poppins]">Usuarios</Link>
                <img src="../../../public/assets/uiface2.jpg" alt="" className="w-[44px] h-[44px] rounded-[50%]" />
            </div>
        </header>
    )
}