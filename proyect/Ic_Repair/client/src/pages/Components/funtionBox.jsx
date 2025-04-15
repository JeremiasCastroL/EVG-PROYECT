import { useState } from "react";
// import { BlogBox } from "../components/componentHome/BlogBox"

import { BlogBox } from "./BlogBox";

export function FunctionBox({values}){
    const itemsPerPage = 4;
    const [index, setIndex] = useState(0);
        
          const prevSlide = () => {
            setIndex((prev) => Math.max(prev - itemsPerPage, 0));
          };
        
          const nextSlide = () => {
            setIndex((prev) =>
              Math.min(prev + itemsPerPage, values.length - itemsPerPage)
            );
          };


    return (
        <div className="mt-[30px] relative overflow-hidden rounded-lg">
             {
                console.log(values)
             }
                <div
                            className="flex transition-transform duration-500"
                            style={{
                              transform: `translateX(-${index * (100 / itemsPerPage)}%)`,
                            }}
                >
                            {values.map((item, i) => (
                              <div
                                key={i}
                                className="w-1/4 p-2 flex justify-center shrink-0"
                                style={{ flex: `0 0 ${100 / itemsPerPage}%` }}
                              >
                                <BlogBox urlBlog={item.url} nameBlog={item.name} infBlog={item.description} className=""/>
                              </div>
                            ))}
                </div>
                            
                {/* Botón Anterior */}
                <span
                        onClick={prevSlide}
                        className={`material-icons font-[100] shadow-md cursor-pointer pb-[1px] outline-none flex items-center justify-center absolute z-[300] w-[39px] h-[39px] bottom-[0] left-[19px] bg-[#111] translate-x-[-50%] top-[50%] rounded-[50%] ${
                          index === 0 ? "bg-[#eee5] " : "text-[#999]"
                        }`}
                >
                        chevron_left
                </span>
                            
                {/* Botón Siguiente */}
                <span
                        onClick={nextSlide}
                        className={`material-icons font-[100] shadow-md cursor-pointer pb-[1px] outline-none flex items-center justify-center absolute z-[400] w-[39px] h-[39px] bottom-[0] right-[-20px] bg-[#111] translate-x-[-50%] top-[50%] rounded-[50%] ${
                          index >= values.length - itemsPerPage
                            ? "bg-[#eee5] "
                            : "text-[#999]"
                        }`}
                >
                        chevron_right
                </span>
        </div>
    )
}