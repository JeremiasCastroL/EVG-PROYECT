import { Link } from "react-router-dom"

export function OtherBox({urlPhone,namePhone, imgProperty}){
    return (
        <Link className="pt-[30px] pb-[20px] shadow-md shadow-[#5552] relative rounded-[12px] w-[50%] bg-[#fff] flex-col items-center justify-center" to="">
        <div className="absolute left-[15px] top-[15px] text-[#111] font-[700] bg-[#f1f1f1dd] rounded-[3px] z-[300] text-[#222] font-[Nunito] text-[13px] pb-[1px] px-[5px]">Top ventas</div>
    <img src={urlPhone} className="relative w-[52%] object-cover relative left-[50%] translate-x-[-50%] bg-[#eee]"></img>
    <div className="mt-[48px] flex justify-between">
        <div className="flex flex-col">
    <h2 className=" pl-[17px] text-[15px] font-[700] font-[Nunito] text-[#111e]">{namePhone}</h2>
    <p className="text-[13px] pl-[17px] font-[Figtree] font-[500] mt-[4px] text-[#111]">128gb - Blanco estrella</p>
        </div>
    </div>
    <div className="pl-[17px] flex mt-[9px]">
    <i className="ri-star-fill text-[12px] text-[#222]"></i>
    <i className="ri-star-fill text-[12px] text-[#222]"></i>
    <i className="ri-star-fill text-[12px] text-[#222]"></i>
    <i className="ri-star-fill text-[12px] text-[#222]"></i>
    <i className="ri-star-half-line text-[12px] text-[#222]"></i>
    <h3 className="text-[12px] text-[#111] ml-[10px]">(12)</h3>
    </div>
    {/* <div className="flex items-center justify-center py-[1px] ml-[17px] z-[300] mt-[3px] text-[#fff] w-[70px] mb-[4px] pt-[3px] text-[11px] font-[Nunito] rounded-[5px] bg-[#f90] top-[17px] left-[17px]">Top Ventas</div> */}
    {/* <div className="flex gap-[0px] mt-[7px]  rounded-[10px] flex items-center justify-start text-[#fff] mx-[17px]">
     <i className="ri-heart-3-line text-[#f90] pl-[5px] text-[18px]"></i>

        <i className="ri-shopping-cart-line text-[#f90] pl-[7px] text-[17px]"></i>
    </div> */}
     <p className="text-[12px] pl-[17px] font-[Figtree] text-[#444a] font-[500] mt-[13px] mb-[0px]">Desde</p>
    {/* <div className="bg-[#09f] h-[27px] mt-[10px] mb-[13px] ml-[17px] w-[50%] justify-center gap-[6px] items-center flex rounded-[15px] px-[10px] py-[5px] pb-[7px]">
<h3 className="text-[#eee] text-[15px]">Agregar</h3>
    <i className="ri-shopping-cart-line font-[100] flex text-[#eee]"></i>
    </div> */}
<div className="flex">
    <h5 className="text-[14px] inline-block pl-[17px] font-[Inter] font-[600] mt-[3px] text-[#444d]">$500, 00</h5>
    <h3 className="text-[14px] inline-block font-[Figtree] font-[300] mt-[3px] ml-[7px] text-[#444a] line-through">$300, 00</h3>
</div>
</Link>
    )
}