import { useForm } from "react-hook-form"
import { useAuth } from "../../context/AuthContext"
import { Link } from "react-router-dom"

export function Login(){
    const {register, handleSubmit, formState: {errors}} = useForm()
    const {singin, errors: singinErrors} = useAuth()

    const onSubmit =  handleSubmit(data => {
         singin(data)
    })

    return (
        <section className="flex flex-col items-center justify-center">
            <div className="w-[30%] flex flex-col items-center pt-[30px]">
            {singinErrors.map((error, i) => (
                     <div className="bg-[#f00] p-2 text-[#fff]">{error}</div>
                ))}
            <img src="../../../public/assets/LOGO DE EVG2.png" alt="" className="h-[130px] w-[130px]"/>
            <h4 className="font-[Poppins] text-[28px] font-[800] text-center">Iniciar Sesión</h4>
            <form onSubmit={onSubmit}>
                <input type="email" {...register("user", {required: true})} name="user" placeholder="Email..." className="w-[100%] focus:border-[#999] focus:border-[2px] outline-none duration-100 h-[50px] px-[20px] mt-[20px] border-[1px] border-[#6669] rounded-[12px]"/>
                {errors.user && (<p className="text-[#f00]">Email is required</p>)}
                <input type="password" {...register("pass", {required: true})} name="pass" placeholder="Password..." className="w-[100%] focus:border-[#999] focus:border-[2px] outline-none duration-100 h-[50px] px-[20px] mt-[20px] border-[1px] border-[#6669] rounded-[12px]"/>
                {errors.pass && (<p className="text-[#f00]">Password is required</p>)}
                <button type="submit" className="h-[47px] bg-[#0056B3] hover:bg-[#004494] duration-150 rounded-[12px] text-[#fff] text-[17px] font-[600] w-[100%] flex justify-center items-center mt-[10px]">Iniciar Sesion</button>
            </form>
            <Link className="underline text-[#333] text-[15px] mt-[37px] font-[400]">¿Olvidaste la contraseña?</Link>
                            <div className="border-t-[1px] mt-[37px] flex flex-col gap-[12px] w-[100%] pt-[37px] border-[#6669]">
                                <Link to="" className="w-[100%] bg-[#fff] gap-[10px] border-[1px] border-[#333] rounded-[12px] h-[50px] flex items-center justify-center">
                                    <img src="../../../public/assets/logo_facebook.svg" alt="" className="w-[27px] h-[27px]"/>
                                    <p className="text-[#333] font-[Poppins] text-[15px]">Continuar con Facebook</p>  
                                </Link>
                                <Link to="" className="w-[100%] bg-[#fff] gap-[10px] border-[1px] border-[#333] rounded-[12px] h-[50px] flex items-center justify-center">
                                    <img src="../../../public/assets/logo_google.svg" alt="" className="w-[25px] h-[25px]"/>
                                    <p className="text-[#333] font-[Poppins] text-[15px]">Continuar con Google</p>  
                                </Link>
                            </div>
                            <Link className="flex justify-center items-center gap-[4px] mt-[37px]">
                                <p className="text-[#555] text-[15px]">¿No tienes cuenta aún?</p>
                                <Link to="/register" className="underline text-[#333] text-[15px] font-[500]">Regístrate</Link>
                            </Link>
            </div>
             <footer className="flex px-[25px] mt-[50px] py-[15px] w-[100%] justify-between">
                            <div className="font-[Poppins] text-[14px] text-[#333] font-[400]">©2025 EVG</div>
                            <div className="flex gap-[15px]">
                                 <Link className="font-[Poppins] text-[14px] text-[#333] font-[400]">Terminos</Link>
                                 <Link className="font-[Poppins] text-[14px] text-[#333] font-[400]">Privacidad</Link>
                            </div>
                         </footer>
                         <Link to="/" className="absolute top-[25px] left-[25px] flex gap-[6px] items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#444"><path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
                            <h4 className="text-[14px] text-[#222] font-[Poppins]">Volver</h4>
                         </Link>
        </section>
    )
}