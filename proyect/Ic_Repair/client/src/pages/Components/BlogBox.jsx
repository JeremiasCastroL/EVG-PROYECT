import { Link } from "react-router-dom"

export function BlogBox({ urlBlog, nameBlog, infBlog }) {
  return (
    <div className="w-[260px] mt-[15px] pb-[10px] rounded-[16px] overflow-hidden">
      <div className="h-[258px] w-[100%] overflow-hidden rounded-[16px]">
        <img
          src={`../../public/assets/${urlBlog}`}
          alt=""
          className=" object-cover h-[100%] transition-transform duration-300 hover:scale-105"
        />
      </div>
      <h4 className="font-[Poppins] font-[600] text-[18px] mt-[17px] px-[0px]">{nameBlog}</h4>
      <p className="font-[Poppins] text-[14px] mt-[3px] px-[0px] line-clamp-2">{infBlog}</p>
      <div className="font-[Poppins] flex items-center text-[14px] mt-[6px] px-[0px]">
        <p className="text-[25px] text-[#ffd700]"> ● </p>
        <p className="">25 Octubre del 2025</p>
      </div>
    </div>
  )
}