import { useState } from "react";
import { BarAdmin } from "../Components/adminComponents/BarAdmin";
import { Footer } from "../Components/adminComponents/FooterAdmin";
import { Modal } from "../Components/Modal";
import { registerBlogRequest } from "../../api/auth"; // Asegúrate que esta función esté bien definida

export function AdminBlog() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formValues, setFormValues] = useState({
    title: "",
    content: "",
    category: "",
    date: "",
  });

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

    const finalBlog = {
      ...formValues,
      image: selectedImage, // Solo el nombre de la imagen
    };

    try {
      const res = await registerBlogRequest(finalBlog);
      alert("Blog guardado con éxito");
      console.log("Respuesta del servidor:", res.data);
    } catch (err) {
      console.error("Error al guardar blog:", err);
      alert("Hubo un error al guardar el blog");
    }
  };

  return (
    <section className="pt-[100px] relative">
      <BarAdmin />
      <div className="px-[140px]">
        <h3 className="text-[40px] font-[Poppins] font-[700] text-[#000]">Blog</h3>
        <div className="mt-[50px] mb-[50px] flex flex-col items-center">
          <h4 className="w-[100%] text-[30px] text-center font-[Poppins] font-[600]">
            Añadir nuevo blog
          </h4>
          <div className="w-[60%]">
            <form className="mt-[45px]" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-[10px]">
                <h5 className="font-[Poppins]">Título del blog</h5>
                <input
                  name="title"
                  type="text"
                  value={formValues.title}
                  onChange={handleChange}
                  placeholder="Ejemplo: 'Consejos para cuidar a tus gallinas'"
                  className={`h-[60px] w-[100%] px-[25px] rounded-[14px] transition-all duration-200 ${
                    formValues.title ? 'bg-blue-100' : 'bg-white'
                  }`}
                />
              </div>

              <div className="flex flex-col gap-[10px] mt-[30px]">
                <h5 className="font-[Poppins]">Contenido del blog</h5>
                <input
                  name="content"
                  type="text"
                  value={formValues.content}
                  onChange={handleChange}
                  placeholder="Ejemplo: 'La alimentación es la razón principal...'"
                  className={`h-[60px] w-[100%] px-[25px] rounded-[14px] transition-all duration-200 ${
                    formValues.content ? 'bg-blue-100' : 'bg-white'
                  }`}
                />
              </div>

              <div className="flex flex-col gap-[10px] mt-[30px]">
                <h5 className="font-[Poppins]">Categoría del blog</h5>
                <select id=""
                  name="category"
                  type="text"
                  value={formValues.category}
                  onChange={handleChange}
                  className={`h-[60px] w-[100%] px-[25px] rounded-[14px] transition-all duration-200 ${
                    formValues.category ? 'bg-blue-100' : 'bg-white'
                  }`}
                >
                    <option value="Alimentacion">Alimentación</option>
                    <option value="Gallineros">Gallineros</option>
                    <option value="Razas">Razas</option>
                    <option value="Consejos">Consejos</option>
                    <option value="Reproducción">Reproducción</option>
                </select>
              </div>

              <div className="flex flex-col gap-[10px] mt-[30px] items-center">
                <h5 className="w-[100%] font-[Poppins]">Imagen del blog</h5>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>

              <div className="flex flex-col gap-[10px] mt-[30px] items-center">
                <h5 className="w-[100%] font-[Poppins]">Fecha</h5>
                <input
                  type="date"
                  name="date"
                  value={formValues.date}
                  onChange={handleChange}
                  className={`h-[60px] w-[100%] px-[17px] rounded-[14px] transition-all duration-200 ${
                    formValues.date ? 'bg-blue-100' : 'bg-white'
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-[100%] h-[60px] font-[Poppins] mt-[30px] text-[#fff] text-center bg-[#f90] rounded-[30px] text-[18px] font-[500]"
              >
                Guardar Blog
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Modal opcional */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="¿Estás seguro?"
        onConfirm={() => console.log("Confirmado")}
        confirmText="Sí, registrar"
        cancelText="Cancelar"
      >
        <p className="text-gray-700">¿Deseas registrar este blog?</p>
      </Modal>
    </section>
  );
}
