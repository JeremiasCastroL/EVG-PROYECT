import { Link } from "react-router-dom"
export function FooterSection(){
    return (
        <footer className="bg-[#f5f5f5] px-[110px] pt-[40px] mt-[50px]">
                                   <img src="../../../public/assets/LOGO DE EVG2.png" alt="" className="w-[120px] h-[120px]"/> 
                                   <div className="flex gap-[150px] mt-[25px]">
                                           <div className="flex flex-col gap-[10px]">
                                                <Link to="/" className="text-[#000] text-[17px] font-[Poppins]">Inicio</Link>
                                                <Link to="/canal" className="text-[#000] text-[17px] font-[Poppins]">Canal</Link>
                                                {/* <Link>Contacto</Link> */}
                                                <Link to="/galery" className="text-[#000] text-[17px] font-[Poppins]">Galería</Link>
                                          </div>
                                          <div className="flex flex-col gap-[10px]">
                                                <Link className="text-[#000] text-[17px] font-[Poppins]">Historia</Link>
                                               <Link className="text-[#000] text-[17px] font-[Poppins]">Recomendaciones</Link>
                                               <Link className="text-[#000] text-[17px] font-[Poppins]">Contacto</Link>
                                          </div>
                                          <div className="flex flex-col gap-[10px]">
                                                <Link to="/terms-of-use" className="text-[#000] text-[17px] font-[Poppins]">Terminos</Link>
                                               <Link to="/privacy-policies" className="text-[#000] text-[17px] font-[Poppins]">Privacidad</Link>
                                          </div>
                                    </div> 
                                    <div className="mt-[50px] pt-[30px] pb-[30px] border-t-[1px] border-t-[#555] flex justify-between">
                                          <div>
                                          <div className="font-[Poppins] text-[14px] text-[#000] font-[500]">© 2025 EVG - All Rights Reserved</div>
                                          </div>
                                          <div className="flex gap-[15px]">
                                          <Link className="text-[#000] text-[18px] font-[600] font-[Poppins]">Youtube</Link>
                                          <Link className="text-[#000] text-[18px] font-[600] font-[Poppins]">Facebook</Link>
                                          <Link className="text-[#000] text-[18px] font-[600] font-[Poppins]">Instagram</Link>
                                          <Link className="text-[#000] text-[18px] font-[600] font-[Poppins]">Tik Tok</Link>
                                          </div>
                                    </div>
        </footer>
    )
}