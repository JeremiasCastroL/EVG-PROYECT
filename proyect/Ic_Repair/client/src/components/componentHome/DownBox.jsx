import { Link } from "react-router-dom"

export function TopBox({urlPhone}){
    return (
        <Link className="pt-[20px] pb-[20px] rounded-[10px] shadow-md shadow-[#7772] w-[25%] bg-[#fff] flex-col items-center justify-center" to="">
            <img src={urlPhone} className="relative w-[66%] object-cover relative left-[50%] translate-x-[-50%]"></img>
            {/* <h2 className="mt-[36px] pl-[17px] text-[16px] font-[700] font-[Nunito] text-black">iPhone 13</h2> */}
            <p className="text-[13px] pl-[17px] font-[Nunito] font-[500] mt-[4px] text-[#222]">128gb - Blanco estrella</p>
            <p className="text-[11px] pl-[17px] font-[Montserrat] text-[#444a] font-[600] mt-[8px] mb-[6px]">Desde</p>
            <div className="flex">
                <h5 className="text-[13px] inline-block pl-[17px] font-[Nunito] font-[700] mt-[4px] text-[#222]">$500, 00</h5>
                <h3 className="text-[13px] inline-block font-[Nunito] font-[300] mt-[4px] ml-[6px] text-[#222] line-through">$300, 00 nuevo</h3>
            </div>
        </Link>
    )
}