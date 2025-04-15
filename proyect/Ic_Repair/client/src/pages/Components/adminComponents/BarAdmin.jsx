import { Link } from "react-router-dom"

export function BarAdmin(){
    return (
        <header className="px-[40px] top-[0] fixed w-[100%] py-[10px] gap-[40px] bg-[#f6b000] flex items-center">
            <img src="../../../public/assets/LOGO DE EVG2.png" alt="" className="w-[60px] h-[60px]"/>
            <div className="flex gap-[30px]"> 
                <Link className="text-[#fff] font-[Poppins]">Inicio</Link>
                <Link className="text-[#fff] font-[Poppins]">Admin</Link>
                <Link className="text-[#fff] font-[Poppins]">Blog</Link>
                {/* <Link></Link> */}
                {/* <Link></Link> */}
            </div>
        </header>
    )
}