import { Link } from "react-router-dom";

export function Navsecond(){
    return (
        <div className="w-[100%] absolute z-[400] shadow-[#aaa2] shadow-sm top-[90px] bg-[#eee]">
            <div className="flex top-[85px] gap-[60px] px-[50px] pt-[11px] pb-[7px] justify-between items-center bg-[#f9f9f9]">
        
        <h3 className="text-[15px] text-[#222e] text-nowrap font-[700] font-[Nunito] ml-[2px]">Ver menú</h3>

        <Link to="" className="text-[15px] text-nowrap flex items-end font-[600] font-[Figtree] text-[#001f3f]">Descuento estudiantil</Link>
        <Link to="" className="text-[15px] text-nowrap flex items-end font-[Figtree] font-[600] text-[#000d]">Top ofertas</Link>
        <Link to="" className="text-[15px] text-nowrap flex items-end font-[Figtree] font-[600] text-[#000d]">Nuevo</Link>
        <Link to="" className="text-[15px] text-nowrap flex items-end text-[#222d] font-[600] text-[#000d] font-[Figtree]">Apple</Link>
        <Link to="" className="text-[15px] text-nowrap flex text-[#222d] font-[600] text-[#000d] font-[Figtree]">Apple</Link>

        {/* <Link to="" className="text-[15px] text-nowrap flex items-end text-[#222d] font-[700] text-[#000d] font-[Figtree]">Apple</Link> */}
        {/* <Link to="" className="text-[15px] text-nowrap flex items-end text-[#222d] font-[700] text-[#000d] font-[Figtree]">Apple</Link> */}
        <Link to="" className="text-[15px] text-nowrap flex items-end text-[#222d] font-[600] text-[#000d] font-[Figtree]">Apple</Link>
        <Link to="" className="text-[15px] text-nowrap flex items-end text-[#222d] font-[600] text-[#000d] font-[Figtree]">Apple</Link>

        <Link to="" className="text-[15px] text-nowrap flex items-end text-[#222d] font-[600] text-[#000d] font-[Figtree]">Laptops</Link>
        </div>
            </div>
)
}