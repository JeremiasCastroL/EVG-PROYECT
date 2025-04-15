import { Link } from "react-router-dom"

export function Section2(){
    return (
        <section  className="">
            <h3 className="font-[Poppins] text-[32px] w-[250px] mt-[100px] font-[800]">Vídeos Exclusivos</h3>
                                   <div className="flex mt-[30px] gap-[20px]">
                                       <Link to="../youtube" className="w-[25%]">
                                           <img src="../../public/assets/Miniatura de Youtube tour de ciclismo moderno azul amarillo_20250213_211843_0000.png" alt="" className="w-[340px] h-[148px] rounded-[10px] object-cover" />
                                           <h3 className="font-[Poppins] mt-[10px] font-[700] text-[16px]">Te vamos a extrañar Llanerito - EVG</h3>
                                           <p className="text-[14px] font-[Poppins]">Hace 10 días</p>
                                       </Link>
                                       <Link to="../youtube" className="w-[25%]">
                                           <img src="../../public/assets/portada3.jpg" alt="" className="w-[340px] h-[148px] rounded-[10px] object-cover" />
                                           <h3 className="font-[Poppins] mt-[10px] font-[700] text-[16px]">Te vamos a extrañar Llanerito - EVG</h3>
                                           <p className="text-[14px] font-[Poppins]">Hace 10 días</p>
                                       </Link>
                                       <Link to="../youtube" className="w-[25%]">
                                           <img src="../../public/assets/portada2.jpg" alt="" className="w-[340px] h-[148px] rounded-[10px] object-cover" />
                                           <h3 className="font-[Poppins] mt-[10px] font-[700] text-[16px]">Te vamos a extrañar Llanerito - EVG</h3>
                                           <p className="text-[14px] font-[Poppins]">Hace 10 días</p>
                                       </Link>
                                       <Link to="../youtube" className="w-[25%]">
                                           <img src="../../public/assets/portada4.jpg" alt="" className="w-[340px] h-[148px] rounded-[10px] object-cover" />
                                           <h3 className="font-[Poppins] mt-[10px] font-[700] text-[16px]">Te vamos a extrañar Llanerito - EVG</h3>
                                           <p className="text-[14px] font-[Poppins]">Hace 10 días</p>
                                       </Link>
                                   </div>
        </section>
    )
}