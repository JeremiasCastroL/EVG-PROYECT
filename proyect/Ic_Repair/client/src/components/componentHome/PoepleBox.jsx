export function PeopleBox({urlBlog, nameBlog, infBlog}){
    return (
        <div className="w-[223px] pt-[26px] items-center flex-col bg-[#fff] mt-[15px] pb-[10px] rounded-[16px] flex flex-col justify-center">
            <img src={`../../public/assets/${urlBlog}`} alt="" className="h-[150px] w-[150px] rounded-[50%] object-cover"/>
            <h4 className="font-[Poppins] w-[100%] font-[600] text-[18px] mt-[17px] px-[14px]">{nameBlog}</h4>
            <p className="font-[Poppins] w-[100%] text-[14px] mt-[3px] px-[14px] line-clamp-2">{infBlog}</p>
            <div className="font-[Poppins] flex items-center justify-start w-[100%] text-[14px] mt-[6px] px-[14px]">
                <p className="text-[25px] text-[#ffd700]"> ● </p>
                <p className=""> Indonesia </p>
            </div>
        </div>
    )
}