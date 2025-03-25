import React from 'react';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';


export function NavBar(){

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

    return (
        <header className="fixed z-[500] flex justify-between bg-[#ffd700] w-[100%] h-[100px] items-center px-[80px]">
        <div className="flex items-center">
        <img src="../../../public/assets/LOGO DE EVG2.png" alt="" className="w-[90px] h-[90px]"/>
        <div className="flex ml-[20px] gap-[18px]">
            <Link to="../" className="text-[16px] pt-[1px] text-[#fff] font-[700] font-[Poppins]">Inicio</Link>
            <Link to="./canal" className="text-[16px] pt-[1px] text-[#fff] font-[700] font-[Poppins]">Canal</Link>
            <Link to="./canal" className="text-[16px] pt-[1px] text-[#fff] font-[700] font-[Poppins]">Historia</Link>
            <Link to="./galeria" className="text-[16px] pt-[1px] text-[#fff] font-[700] font-[Poppins]">Galería</Link>  
            <div onClick={openWindow} to="./" className="flex cursor-pointer items-center text-[16px] pt-[1px] text-[#fff] font-[700] font-[Poppins]">
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
            <Link to="./login" className="text-[16px] pt-[1px] text-[#fff] font-[700] font-[Poppins]">Log in</Link> 
            <Link className="text-[16px] pt-[1px] text-[#fff] font-[700] font-[Poppins]">Log out</Link>         
        </div>
        <div ref={window} className='absolute hidden bg-[#fff] px-[10px] py-[15px] flex-col gap-[10px] rounded-[10px] top-[105px] font-[Poppins] left-[425px]'>
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