import { NavBar } from "./Components/navBar"
import { FooterSection } from "./Components/footer"
import { Link } from "react-router-dom"

export function Categorias (){
    return (
         <section>
             <NavBar/>
                <div className="px-[80px] pt-[100px] mb-[50px]">
                    <div className="flex mt-[60px] gap-[10px] items-center">
                                    <Link to="../" className="font-[Poppins] text-[#111] text-[14px]">Home</Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
                                    <Link to="" className="font-[Poppins] text-[#111] text-[14px]">Apicultura</Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
                                    <Link to="" className="font-[Poppins] text-[#111] text-[14px]">Blog</Link>   
                                </div>
                    <div className="mt-[60px]">
                       <h3 className="font-[700] text-start text-[40px] text-[#111] font-[Poppins]">Cría y Reproducción</h3>
                       <div className="mt-[60px] flex-wrap flex justify-between">
                            <div className="w-[260px] mt-[15px] pb-[10px] rounded-[16px]">
                                <img src={`../../public/assets/gallina1.jpg`} alt="" className="h-[258px] w-[100%] rounded-[12px] object-cover"/>
                                <h4 className="font-[Poppins] font-[600] text-[18px] mt-[17px] px-[0px]">7 cosas que no sabías sobre las gallinas</h4>
                                <p className="font-[Poppins] text-[14px] mt-[3px] px-[0px] line-clamp-2">Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum.</p>
                                <div className="font-[Poppins] flex items-center text-[14px] mt-[6px] px-[0px]">
                                    <p className="text-[25px] text-[#ffd700]"> ● </p>
                                    <p className=""> 25 Octubre del 2025 </p>
                                </div>
                            </div>
                            <div className="w-[260px] mt-[15px] pb-[10px] rounded-[16px]">
                                <img src={`../../public/assets/gallina2.jpg`} alt="" className="h-[258px] w-[100%] rounded-[12px] object-cover"/>
                                <h4 className="font-[Poppins] font-[600] text-[18px] mt-[17px] px-[0px]">7 cosas que no sabías sobre las gallinas</h4>
                                <p className="font-[Poppins] text-[14px] mt-[3px] px-[0px] line-clamp-2">Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum.</p>
                                <div className="font-[Poppins] flex items-center text-[14px] mt-[6px] px-[0px]">
                                    <p className="text-[25px] text-[#ffd700]"> ● </p>
                                    <p className=""> 25 Octubre del 2025 </p>
                                </div>
                            </div>
                            <div className="w-[260px] mt-[15px] pb-[10px] rounded-[16px]">
                                <img src={`../../public/assets/gallina3.png`} alt="" className="h-[258px] w-[100%] rounded-[12px] object-cover"/>
                                <h4 className="font-[Poppins] font-[600] text-[18px] mt-[17px] px-[0px]">7 cosas que no sabías sobre las gallinas</h4>
                                <p className="font-[Poppins] text-[14px] mt-[3px] px-[0px] line-clamp-2">Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum.</p>
                                <div className="font-[Poppins] flex items-center text-[14px] mt-[6px] px-[0px]">
                                    <p className="text-[25px] text-[#ffd700]"> ● </p>
                                    <p className=""> 25 Octubre del 2025 </p>
                                </div>
                            </div>
                            <div className="w-[260px] mt-[15px] pb-[10px] rounded-[16px]">
                                <img src={`../../public/assets/gallina4.webp`} alt="" className="h-[258px] w-[100%] rounded-[12px] object-cover"/>
                                <h4 className="font-[Poppins] font-[600] text-[18px] mt-[17px] px-[0px]">7 cosas que no sabías sobre las gallinas</h4>
                                <p className="font-[Poppins] text-[14px] mt-[3px] px-[0px] line-clamp-2">Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum.</p>
                                <div className="font-[Poppins] flex items-center text-[14px] mt-[6px] px-[0px]">
                                    <p className="text-[25px] text-[#ffd700]"> ● </p>
                                    <p className=""> 25 Octubre del 2025 </p>
                                </div>
                            </div>
                            <div className="w-[260px] mt-[15px] pb-[10px] rounded-[16px]">
                                <img src={`../../public/assets/gallina1.jpg`} alt="" className="h-[258px] w-[100%] rounded-[12px] object-cover"/>
                                <h4 className="font-[Poppins] font-[600] text-[18px] mt-[17px] px-[0px]">7 cosas que no sabías sobre las gallinas</h4>
                                <p className="font-[Poppins] text-[14px] mt-[3px] px-[0px] line-clamp-2">Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum.</p>
                                <div className="font-[Poppins] flex items-center text-[14px] mt-[6px] px-[0px]">
                                    <p className="text-[25px] text-[#ffd700]"> ● </p>
                                    <p className=""> 25 Octubre del 2025 </p>
                                </div>
                            </div>
                            <div className="w-[260px] mt-[15px] pb-[10px] rounded-[16px]">
                                <img src={`../../public/assets/gallina4.webp`} alt="" className="h-[258px] w-[100%] rounded-[12px] object-cover"/>
                                <h4 className="font-[Poppins] font-[600] text-[18px] mt-[17px] px-[0px]">7 cosas que no sabías sobre las gallinas</h4>
                                <p className="font-[Poppins] text-[14px] mt-[3px] px-[0px] line-clamp-2">Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum.</p>
                                <div className="font-[Poppins] flex items-center text-[14px] mt-[6px] px-[0px]">
                                    <p className="text-[25px] text-[#ffd700]"> ● </p>
                                    <p className=""> 25 Octubre del 2025 </p>
                                </div>
                            </div>
                            <div className="w-[260px] mt-[15px] pb-[10px] rounded-[16px]">
                                <img src={`../../public/assets/gallina1.jpg`} alt="" className="h-[258px] w-[100%] rounded-[12px] object-cover"/>
                                <h4 className="font-[Poppins] font-[600] text-[18px] mt-[17px] px-[0px]">7 cosas que no sabías sobre las gallinas</h4>
                                <p className="font-[Poppins] text-[14px] mt-[3px] px-[0px] line-clamp-2">Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum.</p>
                                <div className="font-[Poppins] flex items-center text-[14px] mt-[6px] px-[0px]">
                                    <p className="text-[25px] text-[#ffd700]"> ● </p>
                                    <p className=""> 25 Octubre del 2025 </p>
                                </div>
                            </div>
                            <div className="w-[260px] mt-[15px] pb-[10px] rounded-[16px]">
                                <img src={`../../public/assets/gallina4.webp`} alt="" className="h-[258px] w-[100%] rounded-[12px] object-cover"/>
                                <h4 className="font-[Poppins] font-[600] text-[18px] mt-[17px] px-[0px]">7 cosas que no sabías sobre las gallinas</h4>
                                <p className="font-[Poppins] text-[14px] mt-[3px] px-[0px] line-clamp-2">Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum.</p>
                                <div className="font-[Poppins] flex items-center text-[14px] mt-[6px] px-[0px]">
                                    <p className="text-[25px] text-[#ffd700]"> ● </p>
                                    <p className=""> 25 Octubre del 2025 </p>
                                </div>
                            </div>
                            <div className="w-[260px] mt-[15px] pb-[10px] rounded-[16px]">
                                <img src={`../../public/assets/gallina1.jpg`} alt="" className="h-[258px] w-[100%] rounded-[12px] object-cover"/>
                                <h4 className="font-[Poppins] font-[600] text-[18px] mt-[17px] px-[0px]">7 cosas que no sabías sobre las gallinas</h4>
                                <p className="font-[Poppins] text-[14px] mt-[3px] px-[0px] line-clamp-2">Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum.</p>
                                <div className="font-[Poppins] flex items-center text-[14px] mt-[6px] px-[0px]">
                                    <p className="text-[25px] text-[#ffd700]"> ● </p>
                                    <p className=""> 25 Octubre del 2025 </p>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
             <FooterSection/>
         </section>
    )
}