import { Link } from "react-router-dom"
import { useRef, useState } from "react"
import { useEffect } from "react";
// import { registerVideoRequest } from "../../../api/canal"
import { useParams } from "react-router-dom";
import { getReview, putReview } from "../../../api/canal";



export function EditReview() {
    const { author } = useParams();
    const [review, setReview] = useState([]);
    const [selectedReview, setSelectedReview] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    // const [selectedVideo, setSelectedVideo] = useState(null);
    const [value, setValue] = useState("");


    const [formValues, setFormValues] = useState({
        name: "",
        content: "",
        date: "",
    });

    const handleInput = (e) => {
        e.target.style.height = "auto"; // Reinicia el alto
        e.target.style.height = `${e.target.scrollHeight}px`; // Ajusta al contenido
        setValue(e.target.value);
    };


    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) {
            e.target.value = "";
            setSelectedImage(null);
            return;
        }

        const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
        if (!allowedTypes.includes(file.type)) {
            alert("Solo se permiten imágenes JPG, JPEG o PNG");
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            alert("La imagen no debe superar los 2MB");
            return;
        }

        setSelectedImage(file);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedImage) {
            alert("Selecciona una imagen");
            return;
        }

        const finalReview = {
            ...formValues,
            image: selectedImage,
        };

        try {
            const res = await putReview(parseInt(author), finalReview);
            alert("Video actualizado con éxito");
            console.log("Respuesta del servidor:", res.data);
        } catch (err) {
            console.error("Error al actualizar la reseña:", err);
            alert("Hubo un error al guardar el video");
        }
    };

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchReview = async () => {
            try {
                const res = getReview.data; // Suponiendo que esto retorna todos los videos
                console.log(res)
                const reviewFiltrado = res.find((v) => v.id === parseInt(author)); // Busca por author
                if (reviewFiltrado) {
                    setReview(reviewFiltrado);
                } else {
                    console.log("Reseña no encontrado");
                }
            } catch (error) {
                console.log("Error al obtener la reseña", error);
            }
        };

        fetchReview();
    }, [author]);


    console.log(author, review)

    const windowsFile = useRef(null)
    const windowsClose = useRef(null)

    function openWindowFile() {
        windowsFile.current.style.display = "block";
        windowsClose.current.style.display = "block"
    }

    function closeWindowFile() {
        windowsFile.current.style.display = "none";
        windowsClose.current.style.display = "none"
    }

    return (
        <section className="pt-[100px] flex flex-col">
            <div className="px-[140px] flex mt-[20px] gap-[10px] items-center">
                <Link to="/" className="font-[Poppins] text-[#111] text-[14px]">Home</Link>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                <Link to="/admin" className="font-[Poppins] text-[#111] text-[14px]">Admin</Link>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                <Link to="/admin/canal" className="font-[Poppins] text-[#111] text-[14px]">Canal</Link>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                <Link to="/admin/canal/PostVideo" className="font-[Poppins] text-[#111] text-[14px]">Postear video</Link>
            </div>
            <div className="mt-[50px] w-[100%] mb-[50px] flex flex-col items-center">
                <h4 className="w-[100%] text-[34px] text-center font-[Poppins] font-[600]">
                    Actualizar Reseña
                </h4>
                <div className="w-[45%] bg-[#fff] px-[20px] mt-[30px] rounded-[10px] py-[30px]">
                    <form className="" onSubmit={handleSubmit}>
                        <div className="flex flex-col items-center">
                            <div
                                onClick={openWindowFile}
                                className="flex cursor-pointer items-center justify-center bg-[#9995] w-[110px] h-[110px] rounded-[50%] overflow-hidden"
                            >
                                <img src={`http://localhost:3000/uploads/portadas/${review.image}`} alt="" className="w-[100%] h-[100%] object-cover" />
                            </div>
                            <h5 className="font-[Poppins] mt-[7px]">Foto de usuario</h5>
                            <div ref={windowsFile} className="fixed z-50 hidden top-[50%] px-[15px] py-[15px] translate-y-[-50%] left-[50%] translate-x-[-50%] rounded-[10px] bg-[#fff]">
                                <div onClick={closeWindowFile} className="flex cursor-pointer justify-center relative  border-b-[1px] border-b-[#1115] items-center">
                                    <h5 className="font-[Poppins] text-center text-[18px] pb-[10px]">Portada del vídeo</h5>
                                    <svg className="absolute right-[0px] top-[50%] translate-y-[-50%]" xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                                </div>
                                <input type="file" name="image" onChange={handleFileChange} className="mt-[15px]" />
                                <button
                                    onClick={closeWindowFile}
                                    type="submit"
                                    className="w-[100%] h-[55px] font-[Poppins] mt-[20px] text-[#fff] text-center hover:bg-[#f90] bg-[#f6b000] duration-200 rounded-[10px] text-[18px] font-[500]"
                                >
                                    Guardar Fotografia
                                </button>
                            </div>
                            <div onClick={closeWindowFile} ref={windowsClose} className="w-[100vw] h-[100vh] top-[0] fixed hidden left-[0px] bg-[#3339] z-40"></div>
                        </div>
                        <div className="flex flex-col mt-[10px] gap-[10px]">
                            <h5 className="font-[Poppins]">Nombre del usuario</h5>
                            <input
                                name="name"
                                type="text"
                                defaultValue={review.author}
                                onChange={handleChange}
                                placeholder="Ejemplo: 'Consejos para cuidar a tus gallinas'"
                                className={`h-[60px] w-[100%] px-[25px] rounded-[10px] border-[#999] border-[1px] transition-all duration-200 focus:outline-[#888] focus:outline-[1px]
                                        `}
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-[10px] mt-[30px]">
                            <h5 className="font-[Poppins]">Contenido de la reseña</h5>
                            <textarea
                                onInput={handleInput}
                                rows={1}
                                name="content"
                                type="text"
                                defaultValue={review.content}
                                onChange={handleChange}
                                placeholder="Ejemplo: 'La alimentación es la razón principal...'"
                                className={`min-h-[100px] focus:outline-[#888] focus:outline-[1px] w-[100%] flex py-[20px] px-[25px] border-[#999] border-[1px] rounded-[10px] transition-all duration-200`}
                                required
                            />
                        </div>
                        <div className="flex flex-col gap-[10px] mt-[30px] items-center">
                            <h5 className="w-[100%] font-[Poppins]">Fecha</h5>
                            <input
                                type="date"
                                name="date"
                                // value={video.date}
                                onChange={handleChange}
                                className={`h-[60px] w-[100%] px-[17px] rounded-[10px] border-[#999] border-[1px] transition-all duration-200 focus:outline-[#888] focus:outline-[1px]
                         
                             `}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-[100%] h-[60px] font-[Poppins] mt-[30px] text-[#fff] text-center hover:bg-[#f90] bg-[#f6b000] duration-200 rounded-[10px] text-[18px] font-[500]"
                        >
                            Actualizar reseña
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}