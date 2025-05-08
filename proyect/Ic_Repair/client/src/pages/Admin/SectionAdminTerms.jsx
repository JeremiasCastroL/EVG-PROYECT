import { Link } from "react-router-dom"
import { useState, useRef, useEffect } from "react";
import { updateTerms } from "../../api/terms&privacy";
// import { useEffect } from "react";

export function AdminTerms() {
    const [review, setReview] = useState([]);
    const [selectedReview, setSelectedReview] = useState(null);
    // const [selectedVideo, setSelectedVideo] = useState(null);
    const [value, setValue] = useState("");


    const [formValues, setFormValues] = useState({
        content: "",
        date: "",
    });

    const handleInput = (e) => {
        e.target.style.height = "auto"; // Reinicia el alto
        e.target.style.height = `${e.target.scrollHeight}px`; // Ajusta al contenido
        setValue(e.target.value);
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

        const finalTerms = {
            ...formValues,
        };

        try {
            const res = await updateTerms(finalTerms);
            alert("Terms actualizado con éxito");
            console.log("Respuesta del servidor:", res.data);
        } catch (err) {
            console.error("Error al actualizar el Terms:", err);
            alert("Hubo un error al actualizar el Terms");
        }
    };

    const [showModal, setShowModal] = useState(false);

 


    return (
        <section className="pt-[100px] relative">
            <div className="px-[140px]">
                <div className="px-[0px] flex mt-[20px] gap-[10px] items-center">
                    <Link to="/" className="font-[Poppins] text-[#111] text-[14px]">Home</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                    <Link to="/admin" className="font-[Poppins] text-[#111] text-[14px]">Admin</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                    <Link to="" className="font-[Poppins] text-[#111] text-[14px]">terms of use</Link>
                </div>

                <div className="mt-[50px] mb-[50px] flex flex-col items-center">
                    <h4 className="w-[100%] text-[34px] text-center font-[Poppins] font-[600]">
                        Condiciones Generales de uso
                    </h4>
                    <div className="w-[60%] bg-[#fff] px-[20px] mt-[30px] rounded-[10px] py-[30px]">
                        <form className=""
                        onSubmit={handleSubmit}
                        >
                            <div className="flex flex-col gap-[10px]">
                                <h5 className="font-[Poppins]">Contenido de Terminos y uso</h5>
                                <textarea
                                    onInput={handleInput}
                                    rows={1}
                                    name="content"
                                    type="text"
                                    value={formValues.content}
                                    onChange={handleChange}
                                    placeholder="Ejemplo: 'Tu privacidad es importante para nosotros. A continuación...'"
                                    className={`min-h-[200px] focus:outline-[#888] focus:outline-[1px] w-[100%] flex py-[20px] px-[25px] border-[#999] border-[1px] rounded-[10px] transition-all duration-200 
                                        `}
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-[10px] mt-[30px] items-center">
                                <h5 className="w-[100%] font-[Poppins]">Fecha (Ultima actualización)</h5>
                                <input
                                    type="date"
                                    name="date"
                                      value={formValues.date}
                                      onChange={handleChange}
                                    className={`h-[60px] w-[100%] px-[17px] rounded-[10px] border-[#999] border-[1px] transition-all duration-200 focus:outline-[#888] focus:outline-[1px] `}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-[100%] h-[60px] font-[Poppins] mt-[30px] text-[#fff] text-center hover:bg-[#f90] bg-[#f6b000] duration-200 rounded-[10px] text-[18px] font-[500]"
                            >
                                Guardar Blog
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}