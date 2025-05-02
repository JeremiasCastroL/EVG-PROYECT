import { useEffect, useRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { postRequest } from "../../../api/blog";
import { BoxBlogRow } from "./BoxBlogRow";

export function AdminHome({ allBlogs }) {
    const windowRef = useRef(null);
    const windowClose = useRef(null);

    const [blogs, setBlogs] = useState([]);
    const [selectedBlogs, setSelectedBlogs] = useState(() => {
        const saved = localStorage.getItem("selectedBlogs");
        return saved ? JSON.parse(saved) : [];
    });

    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        localStorage.setItem("selectedBlogs", JSON.stringify(selectedBlogs));
    }, [selectedBlogs]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setBlogs(postRequest.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchBlogs();
    }, []);

    const categories = useMemo(() => ({
        Alimentación: blogs.filter(b => b.category === "Alimentación"),
        Gallineros: blogs.filter(b => b.category === "Gallineros"),
        Razas: blogs.filter(b => b.category === "Razas"),
        Consejos: blogs.filter(b => b.category === "Consejos"),
        Reproducción: blogs.filter(b => b.category === "Reproducción"),
    }), [blogs]);

    const handleAddBlog = (blog) => {
        const exists = selectedBlogs.find(b => b.id === blog.id);
        if (!exists) {
            setSelectedBlogs(prev => [...prev, blog]);
        }
    };

    const handleRemoveBlog = (id) => {
        setSelectedBlogs(prev => prev.filter(blog => blog.id !== id));
    };

    const openWindows = (category) => {
        setActiveCategory(category);
        windowRef.current.style.display = "block";
        windowClose.current.style.display = "block";
    };

    const closeWindows = () => {
        windowRef.current.style.display = "none";
        windowClose.current.style.display = "none";
        setActiveCategory(null);
    };

    return (
        <section className="pt-[80px] flex flex-col">
            <div className="bg-[#00fa9a] w-[100%] fixed font-[Poppins] flex h-[45px] items-center justify-center gap-[50px]">
                {Object.keys(categories).map(category => (
                    <div key={category} onClick={() => openWindows(category)} className="cursor-pointer">
                        {category}
                    </div>
                ))}
            </div>

            <div className="px-[120px] flex mt-[90px] gap-[10px] items-center">
                <Link to="/" className="font-[Poppins] text-[#111] text-[14px]">Home</Link>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                <Link to="/admin" className="font-[Poppins] text-[#111] text-[14px]">Admin</Link>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                <Link to="/admin/canal" className="font-[Poppins] text-[#111] text-[14px]">Home</Link>
            </div>

            <div className="mt-[50px] mb-[50px] flex flex-col justify-center items-center">
                <h4 className="w-[100%] text-[34px] text-center font-[Poppins] font-[600]">
                    Page Home
                </h4>
            </div>

            <div ref={windowClose} onClick={closeWindows} className="w-[100vw] hidden h-[100vh] bg-[#3339] z-40 fixed top-[0] left-[0]"></div>
            <div ref={windowRef} className="font-[Poppins] w-[50%] fixed p-[20px] rounded-[10px] z-50 top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] bg-[#fff] hidden">
                <div className="flex justify-between w-[100%] items-center">
                    <h3 className="font-[700] text-[20px]">Elíge un blog ({activeCategory})</h3>
                    <svg
                        onClick={closeWindows}
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
                <div className="bg-[#fff] rounded-[14px] flex flex-col gap-[13px] p-[15px]">
                    {activeCategory && categories[activeCategory]?.length > 0 ? (
                        categories[activeCategory].map(blog => (
                            <BoxBlogRow
                                key={blog.id}
                                classImage="w-[100px] h-[80px]"
                                blogId={blog.id}
                                blogImage={blog.image}
                                blogTitle={blog.title}
                                blogContent={blog.content}
                                blogDate={new Date(blog.date).toLocaleDateString()}
                                blogFuncion={() => handleAddBlog(blog)}
                                switchBlog="Añadir"
                            />
                        ))
                    ) : (
                        <p>No hay blogs en esta categoría.</p>
                    )}
                </div>
            </div>

            {Object.keys(categories).map(category => (
                <div key={category} className="font-[Poppins] px-[275px] mt-[40px]">
                    <h3 className="font-[700] text-[30px]">{category}</h3>
                    <ul className="list-disc">
                        <div className="bg-[#fff] mt-[20px] rounded-[14px] flex flex-col gap-[13px] p-[15px]">
                            <div onClick={() => openWindows(category)} className="bg-[#e0e0e0] flex justify-center flex-col rounded-[13px] items-center cursor-pointer duration-300 hover:bg-[#e9e9e9] h-[65px]">
                                <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#555"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
                                <p>Agregar un nuevo Blog</p>
                            </div>
                            {selectedBlogs.filter(b => b.category === category).length === 0 ? (
                                <p>No has añadido blogs aún.</p>
                            ) : (
                                selectedBlogs
                                    .filter(b => b.category === category)
                                    .map(blog => (
                                        <BoxBlogRow
                                            key={blog.id}
                                            classImage="h-[100px] w-[17%]"
                                            blogId={blog.id}
                                            blogImage={blog.image}
                                            blogTitle={blog.title}
                                            blogContent={blog.content}
                                            blogDate={new Date(blog.date).toLocaleDateString()}
                                            blogFuncion={() => handleRemoveBlog(blog.id)}
                                            switchBlog="Eliminar"
                                        />
                                    ))
                            )}
                        </div>
                    </ul>
                </div>
            ))}
        </section>
    );
}
