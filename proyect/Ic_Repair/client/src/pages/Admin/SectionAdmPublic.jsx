import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import { postRequest } from "../../api/blog";
import { deleteBlog } from "../../context/BlogContext";

export function AdminPublic() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedBlog(null);
  };

  const confirmDelete = () => {
    deleteBlog(selectedBlog.id);
    closeModal();
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setBlogs(postRequest.data);
      } catch (error) {
        console.log(error)
      }
    };
    fetchBlogs();
  }, []);
  return (
    <section className="pt-[100px] flex flex-col">
      <div className="px-[120px] flex mt-[20px] gap-[10px] items-center">
        <Link to="/" className="font-[Poppins] text-[#111] text-[14px]">Home</Link>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
        <Link to="/admin" className="font-[Poppins] text-[#111] text-[14px]">Admin</Link>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
        <Link to="/public" className="font-[Poppins] text-[#111] text-[14px]">Publicar</Link>
      </div>
      <div className="">
        <div className="mt-[50px] mb-[50px] flex flex-col justify-center items-center">
          <h4 className="w-[100%] text-[34px] text-center font-[Poppins] font-[600]">
            Gestionar Blogs
          </h4>
          <div className="w-[600px] relative mt-[30px]">
            <Link to="/admin/blog"
              className="w-[100%] relative flex justify-center items-center h-[60px] font-[Poppins] mt-[30px] text-[#fff] text-center hover:bg-[#f90] bg-[#f6b000] duration-200 rounded-[10px] text-[18px] font-[500]"
            >
              Crear nuevo Blog
            </Link>
          </div>
          <div className=" mt-[30px] bg-[#fff] w-[600px] px-[20px] py-[30px] gap-[25px] flex flex-col rounded-[10px]">
            {blogs.length === 0 ? (
              <p>No hay blogs disponibles.</p>
            ) : (
              blogs.map((blog) => (
                <div key={blog.id} className=" bg-[#fff] font-[Poppins] gap-[12px] items-center flex rounded">
                  {blog.image && (
                    <img
                      src={`http://localhost:3000/uploads/portadas/${blog.image}`} // ajusta si usas otro path
                      alt={blog.title}
                      className="mt-2 w-[30%] h-[100px] object-cover overflow-hidden rounded"
                    />
                  )}
                  <div className="w-[58%] pl-[4px]">
                    <h2 className="mt-[2px] text-[16px] font-semibold">{blog.title}</h2>
                    <p className="mt-1 text-blue-500 text-[14px]">{blog.category}</p>
                    <p className="mt-[3px] text-[14px] text-gray-700">{blog.content.slice(0, 34)}...</p>
                    <p className="mt-[3px] text-sm text-gray-500">{new Date(blog.date).toLocaleDateString()}</p>
                  </div>
                  <div className="w-[12%] items-center flex gap-[10px]">
                    {/* <div className="w-[30px] h-[30px] cursor-pointer flex justify-center items-center bg-[#f90] rounded-[50%]"> */}
                    <svg xmlns="http://www.w3.org/2000/svg" height="23px" viewBox="0 -960 960 960" width="23px" fill="#5f6368"><path d="M167-120q-21 5-36.5-10.5T120-167l40-191 198 198-191 40Zm191-40L160-358l458-458q23-23 57-23t57 23l84 84q23 23 23 57t-23 57L358-160Zm317-600L261-346l85 85 414-414-85-85Z" /></svg>

                    {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z" /></svg> */}
                    {/* </div> */}
                    <div onClick={() => openModal(blog)} className="w-[30px] h-[30px] cursor-pointer flex items-center justify-center bg-[#f00] rounded-[50%]">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
                    </div>

                  </div>
                </div>
              ))
            )}
            {showModal && selectedBlog && (

              <div className="fixed font-[Poppins] inset-0 flex items-center justify-center z-50">
                <div onClick={closeModal} className="w-[100vw] h-[100vh] bg-[#3339] z-40 absolute top-[0] left-[0]"></div>
                <div className={`bg-white z-50 p-6 rounded-xl max-w-md w-full transition-all duration-[500ms] ${setShowModal ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                  <div className="mb-[10px] pb-[10px] flex justify-between items-center border-b-[1px] border-b-[#9995]">
                    <h2 className="text-xl font-semibold">¿Eliminar este blog?</h2>
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
                  <img
                    src={`http://localhost:3000/uploads/portadas/${selectedBlog.image}`}
                    alt={selectedBlog.title}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <h3 className="font-bold mt-[9px] w-[100%] overflow-hidden text-nowrap text-ellipsis">{selectedBlog.title}</h3>
                  <p className="text-sm text-gray-600 mb-[10px] mt-[8px]">{new Date(selectedBlog.date).toLocaleDateString()}</p>
                  <div className="mb-[7px] rounded-[7px] bg-[#f009] gap-[3px] items-center mt-[7px] py-[5px] px-[5px] w-[100%] flex">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#fff"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                    <p className="text-[#fff] text-[14px]">Este blog se eliminará de forma permanente</p>
                  </div>
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={confirmDelete}
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
    </section>
  )
}