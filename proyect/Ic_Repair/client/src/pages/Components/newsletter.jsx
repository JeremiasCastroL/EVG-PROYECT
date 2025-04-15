export function Newsletter(){
    return (
        <div className="pt-[90px] mt-[50px] bg-[#FFF9DB] pb-[90px] flex justify-center flex-col items-center">
                           <div className="flex flex-col justify-center items-center">
                               <h4 className="font-[700] font-[Poppins] text-[33px] text-[#]">Suscribete a nuestro</h4>
                               <h4  className="font-[800] font-[Poppins] text-[52px]">NEWSLETTER</h4>
                           </div>
                           <p className="font-[Poppins] mt-[15px]">Recibe un email con las nuevas noticias de En vida de las gallinas</p>
                           <div className="flex gap-[13px] items-center mt-[15px]">
                              <input type="text" placeholder="Ej: prueba@email.com" className="w-[500px] focus:border-[#999] focus:border-[2px] outline-none duration-100 px-[20px] border-[1px] border-[#5559] rounded-[10px] h-[50px]"/>
                              <button className="bg-[#ffd700] duration-200 hover:bg-[#f90] font-[Poppins] font-[600] text-[#fff] rounded-[10px] h-[50px] px-[30px]">Me inscribo</button>
                           </div>
                           <p className="mt-[15px] text-[13px]">Al registrar tu dirección de email, reconoces haber leído y aceptas la política de privacidad de ¡HOLA!</p>
        </div>
    )
}