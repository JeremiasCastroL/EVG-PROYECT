import { BarAdmin } from "../Components/adminComponents/BarAdmin"
import { Link } from "react-router-dom"

export function IndexAdmin(){
    return (
        <section className="pt-[100px]">
            <div>
            <div className="px-[80px] flex mt-[20px] gap-[10px] items-center">
                        <Link to="/" className="font-[Poppins] text-[#111] text-[14px]">Home</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
                        <Link to="/admin" className="font-[Poppins] text-[#111] text-[14px]">Admin</Link>
                    </div>
                <h4 className=" mt-[50px] text-[33px] px-[50px] text-center font-[Poppins] text-[#000] font-[600]">Panel de Publicaciones</h4>                
                <section className="flex w-[100%] px-[80px] gap-[20px] justify-between mt-[40px]">
                     <div className="w-[100%] flex flex-wrap gap-[20px] justify-between">
                          <Link to="./home" className="w-[32%] hover:border-[#444] duration-200 shadow-md border-[1px] border-blue-200 shadow-[#9995] bg-[#fff] rounded-[10px] flex flex-col items-center p-[13px]">
                          <svg xmlns="http://www.w3.org/2000/svg" className="mt-[30px] bg-[#] rounded-[50%] h-[60px] w-[60px] bg-[#FFFBE5] p-[12px]" height="38px" viewBox="0 -960 960 960" width="38px" fill="#FFD93D"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
                               <h3 className="text-[17px] font-[Poppins] mt-[15px] text-[#000]">Home</h3>
                               <p className="text-[14px] text-center mt-[10px] text-[#555] font-[500] mb-[30px] font-[Poppins]">Explora la comunidad y conoce más sobre nosotros</p>
                          </Link>
                          <Link to="./public" className="w-[32%] hover:border-[#444] duration-200 shadow-md border-[1px] border-blue-200 shadow-[#9995] bg-[#fff] rounded-[10px] flex flex-col items-center p-[13px]">
                          <svg xmlns="http://www.w3.org/2000/svg" className="mt-[30px] bg-[#] rounded-[50%] h-[60px] w-[60px] bg-[#FFEFE6] p-[12px]" height="38px" viewBox="0 -960 960 960" width="38px" fill="#FF6B35"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h360v80H200v560h560v-360h80v360q0 33-23.5 56.5T760-120H200Zm120-160v-80h320v80H320Zm0-120v-80h320v80H320Zm0-120v-80h320v80H320Zm360-80v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/></svg>
                               <h3 className="text-[17px] font-[Poppins] mt-[15px] text-[#000]">Publicaciones/blogs</h3>
                               <p className="text-[14px] text-center mt-[10px] text-[#555] font-[500] mb-[30px] font-[Poppins]">Explora la comunidad y conoce más sobre nosotros</p>
                          </Link>
                          <Link className="w-[32%] hover:border-[#444] duration-200 shadow-md border-[1px] border-blue-200 shadow-[#9995] bg-[#fff] rounded-[10px] flex flex-col items-center p-[13px]">
                          <svg xmlns="http://www.w3.org/2000/svg" className="mt-[30px] bg-[#] rounded-[50%] h-[60px] w-[60px] bg-[#FFEFF5] p-[12px]" height="38px" viewBox="0 -960 960 960" width="38px" fill="#FF5DA2"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h440l200 200v440q0 33-23.5 56.5T760-120H200Zm0-80h560v-400H600v-160H200v560Zm80-80h400v-80H280v80Zm0-320h200v-80H280v80Zm0 160h400v-80H280v80Zm-80-320v160-160 560-560Z"/></svg>
                               <h3 className="text-[17px] font-[Poppins] mt-[15px] text-[#000]">Terminos y Conidiciones</h3>
                               <p className="text-[14px] text-center mt-[10px] text-[#555] font-[500] mb-[30px] font-[Poppins]">Explora la comunidad y conoce más sobre nosotros</p>
                          </Link>
                          <Link to="./canal" className="w-[32%] hover:border-[#444] duration-200 shadow-md border-[1px] border-blue-200 shadow-[#9995] bg-[#fff] rounded-[10px] flex flex-col items-center p-[13px]">
                          <svg xmlns="http://www.w3.org/2000/svg" className="mt-[30px] bg-[#] rounded-[50%] h-[60px] w-[60px] bg-[#EAF4FF] p-[12px]" height="38px" viewBox="0 -960 960 960" width="38px" fill="#4D96FF"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg>
                               <h3 className="text-[17px] font-[Poppins] mt-[15px] text-[#000]">Canal</h3>
                               <p className="text-[14px] text-center mt-[10px] text-[#555] font-[500] mb-[30px] font-[Poppins]">Explora la comunidad y conoce más sobre nosotros</p>
                          </Link>
                          <Link className="w-[32%] hover:border-[#444] duration-200 bg-[#fff] border-[1px] border-blue-200 rounded-[10px] flex flex-col items-center p-[13px]">
                          <svg xmlns="http://www.w3.org/2000/svg" className="mt-[30px] bg-[#] rounded-[50%] h-[60px] w-[60px] bg-[#FFECEC] p-[12px]" height="38px"  viewBox="0 -960 960 960" width="38px" fill="#FF4D4D"><path d="M616-242q-27 1-51.5 1.5t-43.5.5h-41q-71 0-133-2-53-2-104.5-5.5T168-257q-26-7-45-26t-26-45q-6-23-9.5-56T82-447q-2-36-2-73t2-73q2-30 5.5-63t9.5-56q7-26 26-45t45-26q23-6 74.5-9.5T347-798q62-2 133-2t133 2q53 2 104.5 5.5T792-783q26 7 45 26t26 45q6 23 9.5 56t5.5 63q2 36 2 73v17q-19-8-39-12.5t-41-4.5q-83 0-141.5 58.5T600-320q0 21 4 40.5t12 37.5ZM400-400l208-120-208-120v240Zm360 200v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/></svg>
                          {/* <svg xmlns="http://www.w3.org/2000/svg" className="mt-[30px] bg-[#] rounded-[50%] h-[60px] w-[60px] bg-[#EAF4FF] p-[12px]" height="38px" viewBox="0 -960 960 960" width="38px" fill="#4D96FF"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg> */}
                               <h3 className="text-[17px] font-[Poppins] mt-[15px] text-[#000]">Redes Sociales</h3>
                               <p className="text-[14px] text-center mt-[10px] text-[#555] font-[500] mb-[30px] font-[Poppins]">Explora la comunidad y conoce más sobre nosotros</p>
                          </Link>
                          <Link className="w-[32%] hover:border-[#444] duration-200 bg-[#fff] border-[1px] border-blue-200 rounded-[10px] flex flex-col items-center p-[13px]">
                          <svg xmlns="http://www.w3.org/2000/svg" className="mt-[30px] bg-[#] rounded-[50%] h-[60px] w-[60px] bg-[#FFECEC] p-[12px]" height="38px"  viewBox="0 -960 960 960" width="38px" fill="#FF4D4D"><path d="M616-242q-27 1-51.5 1.5t-43.5.5h-41q-71 0-133-2-53-2-104.5-5.5T168-257q-26-7-45-26t-26-45q-6-23-9.5-56T82-447q-2-36-2-73t2-73q2-30 5.5-63t9.5-56q7-26 26-45t45-26q23-6 74.5-9.5T347-798q62-2 133-2t133 2q53 2 104.5 5.5T792-783q26 7 45 26t26 45q6 23 9.5 56t5.5 63q2 36 2 73v17q-19-8-39-12.5t-41-4.5q-83 0-141.5 58.5T600-320q0 21 4 40.5t12 37.5ZM400-400l208-120-208-120v240Zm360 200v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/></svg>
                          {/* <svg xmlns="http://www.w3.org/2000/svg" className="mt-[30px] bg-[#] rounded-[50%] h-[60px] w-[60px] bg-[#EAF4FF] p-[12px]" height="38px" viewBox="0 -960 960 960" width="38px" fill="#4D96FF"><path d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"/></svg> */}
                               <h3 className="text-[17px] font-[Poppins] mt-[15px] text-[#000]">Redes Sociales</h3>
                               <p className="text-[14px] text-center mt-[10px] text-[#555] font-[500] mb-[30px] font-[Poppins]">Explora la comunidad y conoce más sobre nosotros</p>
                          </Link>
                     </div>
                     {/* <div className=" bg-[#fff] h-[500px] w-[26%] rounded-[10px] shadow-md border-[1px] border-blue-200 shadow-[#9995] bg-[#fff] rounded-[10px]">

                     </div> */}
                </section>
            </div>
            {/* admin sectionx dxdxdxd */}
        </section>
    )
}