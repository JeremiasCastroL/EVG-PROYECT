import { Link } from "react-router-dom"

export function Section2(){
    return (
        <section>
              <h3 className="font-[700] text-[50px] mb-[40px] font-[Poppins] w-[100%] text-center text-[#111]">TODO SOBRE GALLINAS</h3>
                            <h4 className="font-[Poppins] text-[28px] font-[800] mt-[90px]">Últimos videos:</h4>
                            <div className="mt-[15px] flex gap-[15px] ">
                                <Link to="youtube.com/" className="w-[20%] bg-[#fff] pb-[10px] rounded-[9px]">
                                    <img src="../../public/assets/portada2.jpg" alt="" className="h-[110px] rounded-[12px] object-cover"/>
                                    <h4 className="font-[Poppins] text-[#222] line-clamp-2 text-[17px] font-[600] mt-[10px] px-[10px]">Comida para tus pollitos segun su edad</h4>
                                </Link>
                                {/* <iframe className="rounded-[12px] overflow-hidden" width="560" height="" src="https://www.youtube.com/embed/ytlLS9LakaM?si=4-ZglxR2woW39kWB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                                <Link to="youtube.com/" className="w-[20%] bg-[#fff] pb-[10px] rounded-[9px]">
                                    <img src="../../public/assets/Miniatura de Youtube tour de ciclismo moderno azul amarillo_20250213_211843_0000.png" alt="" className="h-[110px] rounded-[12px] object-cover"/>
                                    <h4 className="font-[Poppins] text-[#222] line-clamp-2 text-[16px] font-[600] mt-[10px]">7 cosas que no sabías de la reproducción de las gallinas</h4>
                                </Link>
                                <Link to="youtube.com/" className="w-[20%] bg-[#fff] pb-[10px] rounded-[9px]">
                                    <img src="../../public/assets/portada3.jpg" alt="" className="h-[110px] w-[300px] rounded-[12px] object-cover"/>
                                    <h4 className="font-[Poppins] text-[#222] line-clamp-2 text-[16px] font-[600] mt-[10px]">Como tener a nuestras gallinas más bonitas y felices</h4>
                                </Link>
                                <Link to="youtube.com/" className="w-[20%] bg-[#fff] pb-[10px] rounded-[9px]">
                                    <img src="../../public/assets/portada4.jpg" alt="" className="h-[110px] w-[300px] rounded-[12px] object-cover"/>
                                    <h4 className="font-[Poppins] text-[#222] line-clamp-2 text-[16px] font-[600] mt-[10px]">Como mantener a tus gallinas saludables todo el año</h4>
                                </Link>
                                <Link to="youtube.com/" className="w-[20%] bg-[#fff] pb-[10px] rounded-[9px]">
                                    <img src="../../public/assets/portada5.jpg" alt="" className="h-[110px] w-[300px] rounded-[12px] object-cover"/>
                                    <h4 className="font-[Poppins] text-[#222] line-clamp-2 text-[16px] font-[600] mt-[10px]">¿Cómo reacciona un pato a la playa?</h4>
                                </Link>
                                <Link to="youtube.com/" className="w-[20%] bg-[#fff] pb-[10px] rounded-[9px]">
                                    <img src="../../public/assets/portada6.jpg" alt="" className="h-[110px] w-[300px] rounded-[12px] object-cover"/>
                                    <h4 className="font-[Poppins] text-[#222] line-clamp-2 text-[16px] font-[600] mt-[10px]">Nacieron los patitos bebé</h4>
                                </Link>
                            </div>
        </section>
    )
}