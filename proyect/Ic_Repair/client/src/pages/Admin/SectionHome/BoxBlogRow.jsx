export function BoxBlogRow({classImage, blogId, blogImage, blogTitle, blogContent, blogDate, blogFuncion, switchBlog}){
    return (
        <div key={blogId} className="flex items-center overflow-hidden">
        <div className={`${classImage} overflow-hidden rounded-[14px]`}>
            <img
                src={`http://localhost:3000/uploads/portadas/${blogImage}`}
                alt=""
                className={`object-cover h-[100%] w-[100%] transition-transform duration-300 hover:scale-105`}
            />
        </div>
        <h4 className="font-[Poppins] w-[28%] font-[600] px-[14px] text-[16px]">{blogTitle}</h4>
        <p className="font-[Poppins] w-[30%] px-[10px] text-[13px] line-clamp-3">{blogContent}</p>
        <div className="font-[Poppins] w-[17%] flex items-center text-[14px] mt-[6px] px-[0px]">
            <p className="text-[22px] text-[#ffd700]"> ● </p>
            <p>{blogDate}</p>
        </div>

        <button
            onClick={blogFuncion}
            className="ml-4 w-[8%] text-red-500 text-sm"
        >
            {switchBlog}
        </button>
    </div>
    )
}