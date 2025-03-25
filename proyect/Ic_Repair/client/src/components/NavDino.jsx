import {Link} from 'react-router-dom'
import React from 'react'

export function Navdino(){
    return (
        <header className="w-[100vw] absolute bg-[#fff] flex justify-between z-[400] px-[52px] w-[100vw] items-center h-[90px] max-w-[1500px]">
            <div className='flex h-[100%] gap-[15px]'>
            <div className="flex items-center justify-center relative gap-[10px]">
            <label className="burger" for="burger">
          <input type="checkbox" id="burger"/>
              <span></span>
              <span></span>
              <span></span>
          </label>
        </div>
            {/* <img src="../assets/Ic_logo.svg" className='h-[85%] mt-[2px] w-[auto]'/> */}
            </div>
  <div className='flex gap-[28px]'>
       <Link to="" className='text-[15px] mt-[3px] font-[Figtree] text-nowrap font-[600] font-[Figtree] text-[#222] duration-[150ms]'>Servicio Técnico</Link>
    <Link to="" className='text-[15px] mt-[3px] font-[Figtree] text-nowrap font-[600] font-[Figtree] text-[#222] duration-[150ms]'>Quiénes somos</Link>
    <Link to="" className='text-[15px] mt-[3px] font-[Figtree] text-nowrap font-[600] font-[Figtree] text-[#222] duration-[150ms]'>Más</Link>
       
    </div>
            <div className='w-[38%] h-[40px] flex-wrap border-[1px] border-[#2227] overflow-hidden rounded-[7px] flex items-center relative'>
                    <input className='pt-[11px] pr[38px] pb-[11px] pl-[20px] text-[14px] font-[500] font-[Figtree] outline-none duration-[200ms] absolute w-[100%] h-[100%]' type='text' placeholder="¿Que estabas buscando?">
                    </input>
                    <i className="ri-search-line text-[18px] text-[#0006] flex justify-center items-center absolute cursor-pointer right-[10px] z-[25]"></i>
            </div>


<div className='flex justify-end'>
<nav className='flex gap-[12px] mr-[5px] items-center justify-center'>
         <Link to="">
         <img src="../assets/account-avatar.svg" className='w-[22px] mt-[1px] opacity-65'/>
         </Link>
         <Link to="" className='relative'>
          <img src="../assets/Favorite.svg" className='opacity-65 mt-[1.5px] mt-[3px] w-[24px]'></img>
         </Link>
         <Link to="" className='relative'>
          <img src="../assets/shopping-bag.svg" className='w-[25px] opacity-65'></img>
          {/* <div className='absolute font-[Montserrat] font-[600] bg-[#f1f1f1] rounded-[10px] py-[1px] top-[-8px] px-[4px] text-[12px] text-[#555] right-[-26px]'>$0,00</div> */}
         </Link>
</nav>
</div>
       </header>
    )
}