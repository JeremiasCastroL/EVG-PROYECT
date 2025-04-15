import { Link } from "react-router-dom"

export function Section4(){
    return (
        <section className="mt-[100px]">
        <h3 className="font-[800] text-[45px] text-[#111] font-[Poppins]">Reseñas</h3>
        <div className="flex justify-between mt-[30px]">
            <div className="w-[23%] px-[25px] py-[15px] rounded-[10px] bg-[#fff] flex flex-col justify-center pt-[25px] items-center">
               {/* <h6 className="text-[40px] font-[800] font-[Poppins]">“</h6> */}
                                           <img src="../../public/assets/uiface1.jpg" alt="" className="h-[110px]  w-[110px] rounded-[50%] object-cover"/>
               <h5 className="font-[Poppins] mt-[22px] w-[100%] text-start font-[700] text-[24px]">Armando Casas</h5>
               <p className="font-[Poppins] text-[15px] mt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing. Osapiente vitae obcaecati, repudiandae fugit amet natus iure ipsa magni rem deleniti.</p>
            </div>
            <div className="w-[23%] px-[25px] py-[15px] rounded-[10px] bg-[#fff] flex flex-col justify-center pt-[25px] items-center">
               {/* <h6 className="text-[40px] font-[800] font-[Poppins]">“</h6> */}
                                           <img src="../../public/assets/uiface2.jpg" alt="" className="h-[110px]  w-[110px] rounded-[50%] object-cover"/>
               <h5 className="font-[Poppins] mt-[22px] w-[100%] text-start font-[700] text-[24px]">Jeremias López</h5>
               <p className="font-[Poppins] text-[15px] mt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing. Osapiente vitae obcaecati, repudiandae fugit amet natus iure ipsa magni rem deleniti.</p>
            </div>
            <div className="w-[23%] px-[25px] py-[15px] rounded-[10px] bg-[#fff] flex flex-col justify-center pt-[25px] items-center">
               {/* <h6 className="text-[40px] font-[800] font-[Poppins]">“</h6> */}
                                           <img src="../../public/assets/uiface3.jpg" alt="" className="h-[110px]  w-[110px] rounded-[50%] object-cover"/>
               <h5 className="font-[Poppins] mt-[22px] w-[100%] text-start font-[700] text-[24px]">Daniela Díaz</h5>
               <p className="font-[Poppins] text-[15px] mt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing. Osapiente vitae obcaecati, repudiandae fugit amet natus iure ipsa magni rem deleniti.</p>
            </div>
            <div className="w-[23%] px-[25px] py-[15px] rounded-[10px] bg-[#fff] flex flex-col justify-center pt-[25px] items-center">
               {/* <h6 className="text-[40px] font-[800] font-[Poppins]">“</h6> */}
                                           <img src="../../public/assets/uiface4.jpg" alt="" className="h-[110px]  w-[110px] rounded-[50%] object-cover"/>
               <h5 className="font-[Poppins] mt-[22px] w-[100%] text-start font-[700] text-[24px]">Javier Hungría C.</h5>
               <p className="font-[Poppins] text-[15px] mt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing. Osapiente vitae obcaecati, repudiandae fugit amet natus iure ipsa magni rem deleniti.</p>
            </div>
        </div>
        </section>
    )
}