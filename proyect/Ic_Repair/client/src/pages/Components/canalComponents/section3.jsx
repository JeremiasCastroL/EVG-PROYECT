import { Link } from "react-router-dom"

export function Section3(){
    return (
        <section className="relative mt-[100px]">
             <h3 className="font-[800] text-[45px] text-[#111] font-[Poppins]">Galería</h3>
                                  <div className="relative flex mt-[20px] flex-wrap justify-between">
                                    <div className="absolute bg-gradient-to-b from-transparent to-[#f9f9f9] bottom-[0px] w-[100%] h-[200px]"></div>
                                    <Link to="../galeria" className="absolute left-[50%] rounded-[30px] translate-x-[-50%] bottom-[10px] px-[30px] py-[12px] font-[Poppins] bg-[#ffd700] font-[800] text-[#fff]">Ver Más</Link>
                                    <img src="../../public/assets/imag1.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                                    <img src="../../public/assets/imag2.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                                    <img src="../../public/assets/imag3.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                                    <img src="../../public/assets/imag4.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                                    <img src="../../public/assets/imag5.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                                    <img src="../../public/assets/imag8.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                                    <img src="../../public/assets/imag7.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                                    <img src="../../public/assets/imag6.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                                    <img src="../../public/assets/imag9.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                                    <img src="../../public/assets/imag4.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                                    <img src="../../public/assets/imag7.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                                    <img src="../../public/assets/imag1.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                                  </div>
                                  <div className="fixed hidden bg-[#f5f5f5] w-[100vw] z-[900] items-center h-[100vh] top-[0px] left-[0px] flex justify-center">
                                        <img src="../../public/assets/imag5.jpg" alt="" className="h-[95%] relative w-[auto]"/>
                                        <Link className="bg-[#f90] rounded-[50%] absolute right-[60px] cursor-pointer top-[40px] w-[50px] h-[50px] flex justify-center items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 -960 960 960" width="27px" fill="#fff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                                        </Link>
                                  </div>
        </section>
    )
}