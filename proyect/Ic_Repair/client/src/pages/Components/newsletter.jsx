export function Newsletter(){
    return (
        <div className="pt-[90px] mt-[50px] bg-[#6c5ce7] mx-[60px] rounded-[13px] pb-[90px] flex justify-center flex-col items-center">
                           <div className="flex flex-col justify-center items-center">
                               <h4 className="font-[800] font-[Poppins] text-center w-[70%] text-[40px] text-[#]">Suscribete a nuestro Newslatter</h4>
                               {/* <h4  className="font-[800] font-[Poppins] text-[52px]">NEWSLETTER</h4> */}
                           </div>
                           <p className="font-[Poppins] mt-[15px]">Recibe un email con las nuevas noticias de En vida de las gallinas</p>
                           <div className="flex gap-[10px] items-center mt-[15px]">
                           <div className="floating-label w-[500px] h-[53px]">
            <input
              type="text"
              className="font-[Poppins] pt-[4px] w-[500px] h-[53px]"
             
              id="email"
              placeholder=" "
            />
            <label htmlFor="email" className="font-[Poppins]">
              Email
            </label>
          </div>
                              {/* <input type="text" placeholder="Correo electronico" className="w-[450px] placeholder:text-[#111] placeholder:font-[Poppins] outline-none focus:border-[#999] hover:bg-blue-100/50 focus:border-[1px] duration-[200ms] px-[20px] border-[1px] border-[#5559] rounded-[7px] h-[50px]"/> */}
                              <button className="bg-[#111] duration-300 hover:bg-[#444] text-[16px] font-[Poppins] font-[600] text-[#fff] rounded-[7px] h-[53px] px-[25px]">Me inscribo</button>
                           </div>
                           <p className="mt-[15px] text-[13px]">Al registrar tu dirección de email, reconoces haber leído y aceptas la política de privacidad de EVG 2</p>
        </div>
    )
}