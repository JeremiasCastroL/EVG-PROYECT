import React from 'react';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export function NavBar(){

    const {isAuthenticated, logout, user} = useAuth()
    const windows2 = useRef(null)
    const [isOpen, setOpen] = useState(false)
    const navigate = useNavigate()

    const arrow = useRef(null)
    const window =  useRef(null)
    const [opWin, setOpWin] = useState(false);

    function openWindow(){
          setOpWin(!opWin)
          if(!opWin){
              window.current.style.display = "flex"         
            }else{
               window.current.style.display = "none"
          }
    }

    function openWindows2(){
        setOpen(!isOpen)
        if(!isOpen){
            windows2.current.style.display = "flex"
        }else{
            windows2.current.style.display = "none"
        }
    }

    return (
        <header className="fixed z-[500] flex justify-between bg-[#f6b000] w-[100%] h-[100px] items-center px-[80px]">
        <div className="flex items-center">
        <img src="../../../public/assets/LOGO DE EVG2.png" alt="" className="w-[90px] h-[90px]"/>
        <div className="flex ml-[20px] gap-[18px]">
            <Link to="/" className="text-[16px] pt-[1px] text-[#fff] font-[700] font-[Poppins]">Inicio</Link>
            <Link to="/canal" className="text-[16px] pt-[1px] text-[#fff] font-[700] font-[Poppins]">Canal</Link>
            <Link to="/canal" className="text-[16px] pt-[1px] text-[#fff] font-[700] font-[Poppins]">Historia</Link>
            <Link to="/galeria" className="text-[16px] pt-[1px] text-[#fff] font-[700] font-[Poppins]">Galería</Link>  
            <div onClick={openWindow} className="flex cursor-pointer items-center text-[16px] pt-[1px] text-[#fff] font-[700] font-[Poppins]">
                <h3>Categorías</h3>
                <svg ref={arrow} xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#fff"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg>
            </div>     
        </div>
        </div>
        <div className="gap-[19px] flex items-center">
            <div className='relative h-[30px]'>
                <input type="text" className=" w-[480px] bg-[#f5f5f5] h-[38px] rounded-[20px] pl-[40px] pr-[20px]" placeholder="Buscar..."/>
                <svg className='absolute top-[100%] translate-y-[-100%] left-[11px] font-[700]' xmlns="http://www.w3.org/2000/svg" height="21px" viewBox="0 -960 960 960" width="21px" fill="#5559"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
            </div>
            {isAuthenticated ? (
                <div onClick={openWindows2} className='w-[45px] h-[45px] cursor-pointer rounded-[50%] bg-[#fff] flex items-center justify-center'>
                    <span className='text-[15px] text-[#111] font-[Poppins] font-bold'>
                        {user.email.charAt(0).toUpperCase()}
                    </span>
                    <div ref={windows2} className='absolute hidden flex-col bg-[#fff] px-[10px] py-[4px] rounded-[10px] top-[105px]'>
                        <Link to="/user" className='h-[44px] gap-[5px] w-[160px] flex items-center bg-[]'>
                               <svg xmlns="http://www.w3.org/2000/svg" height="23px" viewBox="0 -960 960 960" width="23px" fill="#5f6368"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
                               <p className='font-[Poppins] text-[15px]'>Cuenta</p>
                        </Link>
                        <Link className='h-[44px] gap-[5px] w-[160px] border-t-[1px] border-t-[#555] flex items-center bg-[]'>
                               <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#5f6368"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-84 31.5-156.5T197-763l56 56q-44 44-68.5 102T160-480q0 134 93 227t227 93q134 0 227-93t93-227q0-67-24.5-125T707-707l56-56q54 54 85.5 126.5T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-360v-440h80v440h-80Z"/></svg>
                               <p className='font-[Poppins] text-[15px]'>Cerrar Sesión</p>
                        </Link>
                        {/* <Link className=''></Link> */}
                    </div>
                </div>
            ) : (
            <Link to="/login" className="text-[16px] pt-[1px] text-[#fff] font-[700] font-[Poppins]">
                Log in
             </Link>
)}
            <Link className="text-[16px] pt-[1px] text-[#fff] font-[700] font-[Poppins]">Log out</Link>         
        </div>
        <div ref={window} className='absolute hidden shadow-md shadow-[#9995] bg-[#fff] px-[10px] py-[15px] flex-col gap-[10px] rounded-[10px] top-[105px] font-[Poppins] left-[425px]'>
            <Link to="./categoria" className='text-[15px] hover:bg-[#FFFBCC] duration-240 rounded-[9px] hover:text-[#333] px-[7px] h-[35px] flex items-center text-[#555] font-[500]'>Cría y Reproducción</Link>
            <Link className='text-[15px] hover:bg-[#FFFBCC] duration-240 rounded-[9px] hover:text-[#333] px-[7px] h-[35px] flex items-center text-[#555] font-[500]'>Gallineros</Link>
            <Link className='text-[15px] hover:bg-[#FFFBCC] duration-240 rounded-[9px] hover:text-[#333] px-[7px] h-[35px] flex items-center text-[#555] font-[500]'>Alimentación y Nutrición</Link>
            <Link className='text-[15px] hover:bg-[#FFFBCC] duration-240 rounded-[9px] hover:text-[#333] px-[7px] h-[35px] flex items-center text-[#555] font-[500]'>Salud y Bienestar</Link>
            <Link className='text-[15px] hover:bg-[#FFFBCC] duration-240 rounded-[9px] hover:text-[#333] px-[7px] h-[35px] flex items-center text-[#555] font-[500]'>Razas de Gallinas</Link>
            <Link className='text-[15px] hover:bg-[#FFFBCC] duration-240 rounded-[9px] hover:text-[#333] px-[7px] h-[35px] flex items-center text-[#555] font-[500]'>Agricultura sostenible</Link>
            <Link className='text-[15px] hover:bg-[#FFFBCC] duration-240 rounded-[9px] hover:text-[#333] px-[7px] h-[35px] flex items-center text-[#555] font-[500]'>Producción de huevos</Link>
            <Link className='text-[15px] hover:bg-[#FFFBCC] duration-240 rounded-[9px] hover:text-[#333] px-[7px] h-[35px] flex items-center text-[#555] font-[500]'>Historias y curiosidades</Link>
        </div>
        </header>
    )
}