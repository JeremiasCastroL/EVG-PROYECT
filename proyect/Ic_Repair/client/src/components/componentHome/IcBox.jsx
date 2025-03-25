import { Link } from "react-router-dom"

export function IcBox({urlPhone, namePhone}){
    return (
        <Link className="pt-[15px] pb-[20px] shadow-md shadow-[#9991] rounded-[14px] bg-[#fff] hover:shadow-[#6668] overflow-hidden duration-200 relative w-[25%] flex-col items-center justify-center" to="">
            <p className="text-[14px] font-[Nunito] pb-[1px] font-[600] bg-[#f2f2f2] rounded-[3px] flex items-center justify-center w-[62px] ml-[16px] text-[#222a]">iPhone</p>
            <div className="mt-[5px]">
            <img className="w-[53%] relative object-cover left-[50%] translate-x-[-50%] mt-[3px]" src={urlPhone}></img>
                <h3 className="font-[Nunito] ml-[19px] mb-[5px] pr-[12px] text-start font-[700] pt-[20px] text-[#222] text-[16px]">{namePhone}</h3>
                <p className="font-[Nunito] ml-[19px] mb-[5px] pr-[12px] text-start font-[600] pt-[0px] text-[#555] text-[15px]">64 gb - Gris oscuro</p>
              
              <div className="bg-[#00fa9a33] my-[10px] flex justify-center text-[12px] font-[Nunito] text-[#040] rounded-[3px] w-[122px] pt-[2px] ml-[18px]">ENVIO GRATUITO</div>
                <p className="text-[13px] mt-[16px] text-[#555] font-[500] font-[Nunito] mb-[2px] ml-[18px]">Desde</p>
                <div className="flex justify-start gap-[5px] items-center mx-[19px]">
                    <h3 className="font-[Nunito] text-[16px] font-[700] text-[#111]">$300, 00</h3>
                </div>
                    <h3 className="font-[Nunito] ml-[18px] text-[16px] line-through font-[500] mt-[3px] text-[#777]">$350, 00 antes</h3>
            </div>
</Link>
    )
}



// <Link className="pt-[15px] pb-[20px] shadow-md shadow-[#9991] rounded-[14px] bg-[#fff] hover:shadow-[#6668] overflow-hidden duration-200 relative w-[25%] flex-col items-center justify-center" to="">
//             <p className="text-[14px] font-[Nunito] pb-[1px] font-[600] bg-[#f2f2f2] rounded-[3px] flex items-center justify-center w-[62px] ml-[16px] text-[#222a]">iPhone</p>
//             <div className="mt-[5px]">
//             <img className="w-[53%] relative object-cover left-[50%] translate-x-[-50%] mt-[3px]" src={urlPhone}></img>
//                 <h3 className="font-[Nunito] ml-[19px] mb-[5px] pr-[12px] text-start font-[700] pt-[20px] text-[#222] text-[16px]">iPhone 15 pro max 15 con sensor</h3>
//                 <p className="font-[Nunito] ml-[19px] mb-[5px] pr-[12px] text-start font-[600] pt-[0px] text-[#555] text-[14px]">64 gb - Gris oscuro</p>
//                 <div className="text-[#222] flex items-center ml-[19px]">
//                 <i className="ri-star-s-fill "></i>
//                 <i className="ri-star-s-fill "></i>
//                 <i className="ri-star-s-fill "></i>
//                 <i className="ri-star-s-fill "></i>
//                 <i className="ri-star-half-line text-[14px]"></i>
//                 <h3 className="text-[13px] font-[Nunito] text-[#664]">(1900)</h3>
//                 </div>
//                 <p className="text-[14px] mt-[16px] text-[#222] font-[Nunito] ml-[18px]">Desde</p>
//                 <div className="flex justify-start gap-[5px] items-center mx-[19px]">
//                     <h3 className="font-[Nunito] text-[16px] font-[700] text-[#111]">$300, 00</h3>
//                 </div>
//             </div>
// </Link>