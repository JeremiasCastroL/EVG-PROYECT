import { Link } from "react-router-dom"
import {useForm} from 'react-hook-form'
import { useAuth } from "../../context/AuthContext"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Register(){

    const {register, handleSubmit, formState:{errors}} = useForm()
    const {signup, isAuthenticated, errors: registerErrors} = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
         if(isAuthenticated){
             navigate('/tasks')
         }
         }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
        signup(values)
        console.log(values, "isauth", isAuthenticated)
    })

    return (
        <section className="flex flex-col items-center">
             <div className="w-[30%] flex flex-col items-center pt-[30px]">
                {registerErrors.map((error, i) => (
                     <div className="bg-[#f00] p-2 text-[#fff]">{error}</div>
                ))}
                <img src="../../../public/assets/LOGO DE EVG2.png" alt="" className="h-[130px] w-[130px]"/>
                <h4 className="font-[Poppins] text-[28px] font-[800] text-center">Registrate</h4>
                <form onSubmit={onSubmit} className="w-[100%] register">
                    <div className="floating-label w-[100%] h-[53px] mt-[20px]">
                       <input type="text"  {...register("name", {required: true})} name="name" className="font-[Poppins] pt-[4px] w-[500px] h-[53px]" id="email"  placeholder=" "/>
                       <label htmlFor="email" className="font-[Poppins]">Nombre</label>
                    </div>
                    {errors.name && (<p className="text-[#f00] mt-[3px] flex items-center gap-[3px]">
                           <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#f00"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                           <p className="font-[Poppins] text-[14px]">Usename is required</p> 
                            
                    </p>)}
                    <div className="floating-label w-[100%] h-[53px] mt-[20px]">
                        <input type="email"  {...register("user", {required: true})} name="user" className="font-[Poppins] pt-[4px] w-[500px] h-[53px]" id="email"  placeholder=" "/>
                        <label htmlFor="email" className="font-[Poppins]">Email</label>
                    </div>
                    {errors.user && (<p className="text-[#f00] mt-[3px] flex items-center gap-[3px]">
                           <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#f00"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                           <p className="font-[Poppins] text-[14px]">Email is required</p> 
                            
                    </p>)}
                    <div className="floating-label w-[100%] h-[53px] mt-[20px]">
                        <input type="password"  {...register("pass", {required: true})} name="pass" className="font-[Poppins] pt-[4px] w-[500px] h-[53px]" id="email"  placeholder=" "/>
                        <label htmlFor="password" className="font-[Poppins]">Password</label>
                    </div>
                    {errors.pass && (<p className="text-[#f00] mt-[3px] flex items-center gap-[3px]">
                           <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#f00"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                           <p className="font-[Poppins] text-[14px]">Password is required</p> 
                            
                    </p>)}
                    <button type="submit" className="h-[47px] bg-[#0056B3] hover:bg-[#004494] duration-150 rounded-[12px] text-[#fff] text-[17px] font-[600] w-[100%] flex justify-center items-center mt-[10px]">Continuar</button>
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
                    <p className="text-[#555] text-[15px]">¿Ya tienes cuenta?</p>
                    <Link to="/login" className="underline text-[#333] text-[15px] font-[500]">Iniciar Sesión</Link>
                </Link>
             </div>
             <footer className="flex px-[25px] mt-[50px] py-[15px] w-[100%] justify-between">
                <div className="font-[Poppins] text-[14px] text-[#333] font-[400]">©2025 EVG</div>
                <div className="flex gap-[15px]">
                     <Link className="font-[Poppins] text-[14px] text-[#333] font-[400]">Terminos</Link>
                     <Link className="font-[Poppins] text-[14px] text-[#333] font-[400]">Privacidad</Link>
                </div>
             </footer>
             <Link to="../" className="absolute top-[25px] left-[25px] flex gap-[6px] items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#444"><path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
                <h4 className="text-[14px] text-[#222] font-[Poppins]">Volver</h4>
             </Link>
        </section>
    )
}