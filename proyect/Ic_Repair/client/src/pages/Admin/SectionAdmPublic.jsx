import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { postRequest } from "../../api/blog";
import { deleteBlog } from "../../context/BlogContext";

export function AdminPublic() {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const blogsPerPage = 4;
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

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
        console.log(error);
      }
    };
    fetchBlogs();
  }, []);

  const paginatedBlogs = blogs.slice(
    currentPage * blogsPerPage,
    (currentPage + 1) * blogsPerPage
  );

  const goPrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const goNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  return (
    <section className="pt-[100px] flex flex-col">
      <div className="px-[120px] flex mt-[20px] gap-[10px] items-center">
        <Link to="/" className="font-[Poppins] text-[#111] text-[14px]">Home</Link>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
        <Link to="/admin" className="font-[Poppins] text-[#111] text-[14px]">Admin</Link>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
        <Link to="/public" className="font-[Poppins] text-[#111] text-[14px]">Publicar</Link>
      </div>
     
      <div className="mt-[50px] font-[Poppins] mb-[50px] flex flex-col justify-center items-center">
        <h4 className="w-[100%] text-[34px] text-center font-[Poppins] font-[600]">
          Gestionar Blogs
        </h4>
        <Link to="/admin/blog"
          className="w-[600px] mt-[30px] h-[60px] bg-[#f6b000] hover:bg-[#f90] text-[#fff] text-[18px] font-[500] rounded-[10px] flex justify-center items-center"
        >
          Crear nuevo Blog
        </Link>

        {/* Caja de blogs */}
        <div className="mt-[30px] bg-[#fff] w-[600px] px-[20px] py-[30px] gap-[25px] flex flex-col rounded-[10px]">
          {paginatedBlogs.length === 0 ? (
            <p>No hay blogs disponibles.</p>
          ) : (
            paginatedBlogs.map((blog) => (
              <div key={blog.id} className="bg-[#fff] font-[Poppins] gap-[12px] items-center flex rounded">
                {blog.image && (
                  <img
                    src={`http://localhost:3000/uploads/portadas/${blog.image}`}
                    alt={blog.title}
                    className="mt-2 w-[28%] h-[100px] object-cover overflow-hidden rounded"
                  />
                )}
                <div className="w-[60%] pl-[4px]">
                  <h2 className="mt-[2px] text-[15px] overflow-hidden font-semibold line-clamp-1 text-ellipsis">{blog.title}</h2>
                  <p className="mt-1 text-blue-500 text-[13px]">{blog.category}</p>
                  <p className="mt-[2px] text-[13px] text-gray-700">{blog.content.slice(0, 34)}...</p>
                  <p className="mt-[3px] text-sm text-[13px] text-gray-500">{new Date(blog.date).toLocaleDateString()}</p>
                </div>
                <div className="w-[12%] items-center flex gap-[10px]">
                  <Link to={`../blog/${blog.id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="23px" viewBox="0 -960 960 960" width="23px" fill="#5f6368"><path d="M167-120q-21 5-36.5-10.5T120-167l40-191 198 198-191 40Zm191-40L160-358l458-458q23-23 57-23t57 23l84 84q23 23 23 57t-23 57L358-160Zm317-600L261-346l85 85 414-414-85-85Z" /></svg>
                  </Link>
                  <div onClick={() => openModal(blog)} className="w-[30px] h-[30px] cursor-pointer flex items-center justify-center bg-[#f00] rounded-[50%]">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Flechas de navegación */}
          {blogs.length > blogsPerPage && (
            <div className="flex justify-between items-center mt-[10px]">
              <button onClick={goPrev} disabled={currentPage === 0} className="duration-300 text-[18px] px-3 py-1 bg-[#ddd] rounded hover:bg-[#ccc] disabled:opacity-40">←</button>
              <span className="text-[15px] text-gray-600">Página {currentPage + 1} / {totalPages}</span>
              <button onClick={goNext} disabled={currentPage === totalPages - 1} className="duration-300 text-[18px] px-3 py-1 bg-[#ddd] rounded hover:bg-[#ccc] disabled:opacity-40">→</button>
            </div>
          )}
        </div>

        {/* Modal de eliminación (SIN CAMBIOS) */}
        {showModal && selectedBlog && (
          <div className="fixed font-[Poppins] inset-0 flex items-center justify-center z-50">
            <div onClick={closeModal} className="w-[100vw] h-[100vh] bg-[#3339] z-40 absolute top-[0] left-[0]"></div>
            <div className={`bg-white z-50 p-6 rounded-xl max-w-md w-full transition-all duration-[500ms] ${showModal ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
              <div className="text-center">
                <svg className="mx-auto mb-4 text-red-500 w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <h2 className="text-xl font-semibold mb-2">¿Estás seguro?</h2>
                <p className="text-gray-600 mb-4">Esta acción eliminará el blog permanentemente.</p>
                <div className="flex justify-center gap-[10px]">
                  <button
                    onClick={confirmDelete}
                    className="bg-red-500 hover:bg-red-600 text-white font-[600] duration-300 py-2 px-4 rounded"
                  >
                    Eliminar
                  </button>
                  <button
                    onClick={closeModal}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-[600] duration-300 py-2 px-4 rounded"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
