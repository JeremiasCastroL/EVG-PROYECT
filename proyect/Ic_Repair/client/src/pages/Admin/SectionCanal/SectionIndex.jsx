import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { getChannel } from "../../../api/canal";
import { getVideo } from "../../../api/canal";
import { getReview } from "../../../api/canal";
import { deletedVideo } from "../../../context/CanalContext";
import { deletedReview } from "../../../context/CanalContext";

export function IndexCanal() {
    const [canal, setCanal] = useState([]);
    const [video, setVideo] = useState([]);
    const [review, setReview] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedReview, setSelectedReview] = useState(null)
    const [showModal2, setShowModal2] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [currentPage2, setCurrentPage2] = useState(0);

    const blogsPerPage = 4;
    const totalPages = Math.ceil(video.length / blogsPerPage);
    const reviewPerPage = 4;
    const totalPages2 = Math.ceil(review.length / reviewPerPage)

    const openModal = (video) => {
        setSelectedVideo(video);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedVideo(null);
        setShowModal(false);
    };

    const openModal2 = (review) => {
        setSelectedReview(review);
        setShowModal2(true)
    }

    const closeModal2 = (review) => {
        setSelectedReview(null)
        setShowModal2(false)
    }

    const confirmDelete1 = () => {
        deletedVideo(selectedVideo.id);
        closeModal();
    };

    const confirmDeleted2 = () => {
        deletedReview(selectedReview.id);
        closeModal2();
    }

    useEffect(() => {
        const fetchCanal = async () => {
            try {
                setCanal(getChannel.data[0]);
                setVideo(getVideo.data);
                setReview(getReview.data)
            } catch (error) {
                console.log(error)
            }
        };
        fetchCanal();
    }, []);

    console.log("xdxddd", canal, video, review)

    const paginatedBlogs = video.slice(
        currentPage * blogsPerPage,
        (currentPage + 1) * blogsPerPage
    );

    const goPrev = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 1);
    };

    const goNext = () => {
        if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
    };

    const paginatedBlogs2 = review.slice(
        currentPage2 * reviewPerPage,
        (currentPage2 + 1) * reviewPerPage
    )

    const goPrev2 = () => {
       if (currentPage2 > 0) setCurrentPage2(currentPage2 - 1);
    }

    const goNext2 = () => {
        if ( currentPage2 < totalPages2 - 1) setCurrentPage2(currentPage2 + 1)
    }




    return (
        <section className="pt-[100px] flex flex-col">
            <div className="px-[120px] flex mt-[20px] gap-[10px] items-center">
                <Link to="/" className="font-[Poppins] text-[#111] text-[14px]">Home</Link>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                <Link to="/admin" className="font-[Poppins] text-[#111] text-[14px]">Admin</Link>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                <Link to="/admin/canal" className="font-[Poppins] text-[#111] text-[14px]">Canal</Link>
            </div>
            <div className="">
                <div className="mt-[50px] mb-[50px] flex flex-col justify-center items-center">
                    <h4 className="w-[100%] text-[34px] text-center font-[Poppins] font-[600]">
                        HomePage Canal
                    </h4>
                    {canal.length === 0 ? (
                        <p>No hay blogs disponibles.</p>
                    ) : (
                        <div className="bg-[#fff] px-[20px] w-[542px] mt-[30px] rounded-[10px] flex flex-col items-center py-[30px]">
                            <img src={`http://localhost:3000/uploads/canal/${canal.logoCanal}`} alt="" className="h-[110px] w-[110px] rounded-[50%]" />
                            <div className="w-[100%] flex justify-between items-center mt-[20px]">
                                <img src="../../public/assets/youtube.webp" alt="" className="w-[70px] relative h-[40px] rounded-[30px] object-cover" />
                                <div className="floating-label w-[86%] h-[53px]">
                                    <input defaultValue={canal.nameCanal} type="email" name="user" className="font-[Poppins] pt-[4px] w-[500px] h-[53px]" id="email" placeholder=" " />
                                    <label htmlFor="email" className="font-[Poppins]">Nombre Canal</label>
                                </div>
                            </div>
                            <h5 className="font-[Poppins] mt-[20px] w-[100%] text-start">Historia de EVG 2</h5>
                            <div className="floating-label w-[100%] mt-[15px] h-[53px]">
                                <input defaultValue={canal.story} type="email" name="user" className="font-[Poppins] pt-[4px] w-[500px] h-[53px]" id="email" placeholder=" " />
                                <label htmlFor="email" className="font-[Poppins]">Historia</label>
                            </div>
                            <button
                                type="submit"
                                className="w-[100%] h-[60px] font-[Poppins] mt-[30px] text-[#fff] text-center hover:bg-[#f90] bg-[#f6b000] duration-200 rounded-[10px] text-[18px] font-[500]"
                            >
                                Guardar Blog
                            </button>
                        </div>
                    )}

                    <div className="w-[700px]">
                        <h5 className="font-[Poppins] mt-[30px] text-[17px] font-[500] w-[100%] text-start">Videos Exclusivos</h5>
                        <div className="bg-[#fff] flex flex-col gap-[20px] rounded-[10px] mt-[30px] py-[30px] px-[20px]">
                            <Link to="./PostVideo" className="rounded-[8px] gap-[4px] hover:bg-[#f90] text-[#fff] h-[50px] bg-[#f6b000] w-[180px] flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#fff"><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" /></svg>
                                <p>
                                    Subir nuevo video
                                </p>
                            </Link>
                            {paginatedBlogs.length === 0 ? (
                                <p>No hay blogs disponibles.</p>
                            ) : (
                                paginatedBlogs.map((video) => (
                                    <div key={video.id} className="flex font-[Poppins] w-[100%] items-center gap-[13px]">
                                        {/* <div className="flex justify-center"> */}
                                        <img src={`http://localhost:3000/uploads/portadas/${video.image}`} alt="" className="w-[26%] h-[80px] rounded-[9px] object-cover" />
                                        {/* </div> */}
                                        <h4 className="font-[600] w-[39%] text-[16px]">{video.title}</h4>
                                        <p className="text-[14px] w-[15%]">{new Date(video.date).toLocaleDateString()}</p>
                                        <div className="flex justify-center w-[18%] gap-[5px] items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" /></svg>
                                            <p className="text-[14px]">1.000</p>
                                        </div>
                                        <div className="w-[12%] justify-between flex items-center">
                                            <Link to={`./video/${video.id}`} className="">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#5f6368"><path d="M167-120q-21 5-36.5-10.5T120-167l40-191 198 198-191 40Zm191-40L160-358l458-458q23-23 57-23t57 23l84 84q23 23 23 57t-23 57L358-160Zm317-600L261-346l85 85 414-414-85-85Z" /></svg>
                                            </Link>
                                            <div onClick={() => openModal(video)} className="w-[30px] h-[30px] cursor-pointer flex items-center justify-center bg-[#f00] rounded-[50%]">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
                                            </div>
                                        </div>
                                    </div>

                                ))
                            )}
                            {video.length > blogsPerPage && (
                                <div className="flex justify-between items-center mt-[10px]">
                                    <button onClick={goPrev} disabled={currentPage === 0} className="duration-300 text-[18px] px-3 py-1 bg-[#ddd] rounded hover:bg-[#ccc] disabled:opacity-40">←</button>
                                    <span className="text-[15px] text-gray-600">Página {currentPage + 1} / {totalPages}</span>
                                    <button onClick={goNext} disabled={currentPage === totalPages - 1} className="duration-300 text-[18px] px-3 py-1 bg-[#ddd] rounded hover:bg-[#ccc] disabled:opacity-40">→</button>
                                </div>
                            )}
                            {showModal && selectedVideo && (
                                <div className="fixed font-[Poppins] inset-0 flex items-center justify-center z-50">
                                    <div onClick={closeModal} className="w-[100vw] h-[100vh] bg-[#3339] z-40 absolute top-[0] left-[0]"></div>
                                    <div className={`bg-white z-50 p-6 rounded-xl max-w-md w-full transition-all duration-[500ms] ${setShowModal ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                                        <div className="mb-[10px] pb-[10px] flex justify-between items-center border-b-[1px] border-b-[#9995]">
                                            <h2 className="text-xl font-semibold">¿Eliminar este video?</h2>
                                            <svg
                                                onClick={closeModal}
                                                className="transition-all duration-[300ms] cursor-pointer hover:bg-[#ccc5] h-[35px] w-[35px] p-[4px] rounded-[50%]"
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="25px"
                                                viewBox="0 -960 960 960"
                                                width="25px"
                                                fill="#5f6368"
                                            >
                                                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                                            </svg>
                                        </div>
                                        <div className="flex justify-center">
                                            <img
                                                src={`http://localhost:3000/uploads/portadas/${selectedVideo.image}`}
                                                alt={selectedVideo.title}
                                                className="w-[200px] h-[112px] object-cover rounded-lg"
                                            />
                                        </div>
                                        <h3 className="font-bold mt-[9px] w-[100%] overflow-hidden text-nowrap text-ellipsis">{selectedVideo.title}</h3>
                                        <p className="text-sm text-gray-600 mb-[10px] mt-[8px]">{new Date(selectedVideo.date).toLocaleDateString()}</p>
                                        <div className="mb-[7px] rounded-[7px] bg-[#f009] gap-[3px] items-center mt-[7px] py-[5px] px-[5px] w-[100%] flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#fff"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                            <p className="text-[#fff] text-[14px]">Este blog se eliminará de forma permanente</p>
                                        </div>
                                        <div className="flex justify-end gap-3">
                                            <button
                                                onClick={confirmDelete1}
                                                className="w-[100%] duration-200 font-[500] flex justify-center items-center h-[47px] bg-[#111] text-white rounded-[9px] hover:bg-[#333]"
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                            }
                        </div>
                    </div>
                    <div className="w-[700px]">
                        <h5 className="font-[Poppins] mt-[30px] text-[17px] font-[500] w-[100%] text-start">Reseñas</h5>
                        <div className="bg-[#fff] flex flex-col gap-[20px] rounded-[10px] mt-[30px] py-[30px] px-[20px]">
                            <Link to="./PostReview" className="rounded-[8px] gap-[4px] hover:bg-[#f90] text-[#fff] h-[50px] bg-[#f6b000] w-[210px] flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#fff"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
                                <p>
                                    Agregar nueva reseña
                                </p>
                            </Link>
                            {paginatedBlogs2.length === 0 ? (
                                <p>No hay blogs disponibles.</p>
                            ) : (
                                paginatedBlogs2.map((review) => (
                                    <div key={review.id} className="flex font-[Poppins] w-[100%] items-center gap-[13px]">
                                        <img src={`http://localhost:3000/uploads/portadas/${review.image}`} alt="" className="w-[85px] h-[85px] rounded-[9px] object-cover" />
                                        <h4 className="font-[600] w-[25%] text-[17px]">{review.author}</h4>
                                        <p className="text-[14px] w-[39%]">
                                            {review.content.slice(0, 40)}
                                        </p>
                                        <div className="flex justify-center w-[18%] gap-[5px] items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" /></svg>
                                            <p className="text-[14px]">1.000</p>
                                        </div>
                                        <div className="w-[12%] justify-between flex items-center">
                                            <Link to={`./review/${review.id}`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#5f6368"><path d="M167-120q-21 5-36.5-10.5T120-167l40-191 198 198-191 40Zm191-40L160-358l458-458q23-23 57-23t57 23l84 84q23 23 23 57t-23 57L358-160Zm317-600L261-346l85 85 414-414-85-85Z" /></svg>
                                            </Link>
                                            <div onClick={() => openModal2(review)} className="w-[30px] h-[30px] cursor-pointer flex items-center justify-center bg-[#f00] rounded-[50%]">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                            {review.length > reviewPerPage && (
                                <div className="flex justify-between items-center mt-[10px]">
                                    <button onClick={goPrev2} disabled={currentPage2 === 0} className="duration-300 text-[18px] px-3 py-1 bg-[#ddd] rounded hover:bg-[#ccc] disabled:opacity-40">←</button>
                                    <span className="text-[15px] text-gray-600">Página {currentPage2 + 1} / {totalPages2}</span>
                                    <button onClick={goNext2} disabled={currentPage2 === totalPages2 - 1} className="duration-300 text-[18px] px-3 py-1 bg-[#ddd] rounded hover:bg-[#ccc] disabled:opacity-40">→</button>
                                </div>
                            )}
                            {showModal2 && selectedReview && (
                                <div className="fixed font-[Poppins] inset-0 flex items-center justify-center z-50">
                                    <div onClick={closeModal2} className="w-[100vw] h-[100vh] bg-[#3339] z-40 absolute top-[0] left-[0]"></div>
                                    <div className={`bg-white z-50 p-6 rounded-xl max-w-md w-full transition-all duration-[500ms] ${setShowModal2 ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                                        <div className="mb-[10px] pb-[10px] flex justify-between items-center border-b-[1px] border-b-[#9995]">
                                            <h2 className="text-xl font-semibold">¿Eliminar este video?</h2>
                                            <svg
                                                onClick={closeModal2}
                                                className="transition-all duration-[300ms] cursor-pointer hover:bg-[#ccc5] h-[35px] w-[35px] p-[4px] rounded-[50%]"
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="25px"
                                                viewBox="0 -960 960 960"
                                                width="25px"
                                                fill="#5f6368"
                                            >
                                                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                                            </svg>
                                        </div>
                                        <div className="w-[100%] flex justify-center">
                                            <img
                                                src={`http://localhost:3000/uploads/portadas/${selectedReview.image}`}
                                                alt={selectedReview.author}
                                                className="w-[100px] h-[100px] object-cover rounded-[50%]"
                                            />
                                        </div>
                                        <h3 className="font-bold mt-[9px] w-[100%] text-center text-[19px] overflow-hidden text-nowrap text-ellipsis">{selectedReview.author}</h3>
                                        <p className="text-sm text-gray-600 text-center mb-[10px] mt-[5px]">{new Date(selectedReview.date).toLocaleDateString()}</p>
                                        <div className="mb-[7px] rounded-[7px] bg-[#f009] gap-[3px] items-center mt-[7px] py-[5px] px-[5px] w-[100%] flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#fff"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                                            <p className="text-[#fff] text-[14px]">Este blog se eliminará de forma permanente</p>
                                        </div>
                                        <div className="flex justify-end gap-3">
                                            <button
                                                onClick={confirmDeleted2}
                                                className="w-[100%] duration-200 font-[500] flex justify-center items-center h-[47px] bg-[#111] text-white rounded-[9px] hover:bg-[#333]"
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}