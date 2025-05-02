import { Link } from "react-router-dom";
import { NavBar } from "./Components/navBar";
import { FooterSection } from "./Components/footer";

export function Galeria(){
    return (
        <section>
            {/* <NavBar/> */}
            <Link to="../" className="absolute top-[25px] left-[25px] flex gap-[6px] items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#AAA"><path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
                <h4 className="text-[14px] text-[#AAA] font-[Poppins]">Volver</h4>
             </Link>
            <div className="pt-[140px] bg-[#000]">
                <div className="px-[80px] mt-[0px]">
                    <h3 className="font-[600] text-[60px] text-center text-[#FFFDE7] font-[Poppins]">Galería EVG</h3>
                    {/* <h3 className="font-[800] text-[40px] text-center text-[#fff] font-[Poppins]">En vida de las Gallinas</h3> */}
                    <div className="relative flex mt-[70px] flex-wrap justify-between">
                        <img src="../../public/assets/imag1.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag2.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag3.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag4.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag5.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag8.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag7.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag6.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag4.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag7.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag9.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag1.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag1.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag4.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag3.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag2.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag5.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag7.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag8.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag6.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag9.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag7.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag1.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag4.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag6.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag4.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag7.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag9.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag1.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag1.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag4.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag3.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag2.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag5.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag7.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag8.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag6.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag9.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag7.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag1.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag4.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                      </div>
                      </div>
                      <footer className="flex px-[25px] mt-[50px] py-[15px] w-[100%] justify-between">
                <div className="font-[Poppins] text-[14px] text-[#999] font-[400]">©2025 EVG</div>
                <div className="flex gap-[15px]">
                     <Link to="/terms-of-use" className="font-[Poppins] text-[14px] text-[#999] font-[400]">Terminos</Link>
                     <Link to="/privacy-policies" className="font-[Poppins] text-[14px] text-[#999] font-[400]">Privacidad</Link>
                </div>
             </footer>
                </div>
        </section>
    )
}