import { NavBar } from "./Components/navBar";
import { FooterSection } from "./Components/footer";
import { useState } from "react";

export function User() {
  const [isOpen, setIsOpen] = useState(false);

  function openWindows() {
    setIsOpen(true);
  }

  function closeWindows() {
    setIsOpen(false);
  }

  return (
    <section>
      <NavBar />
      <div className="pt-[140px] mb-[100px] flex flex-col items-center">
        <h3 className="font-[BodoniModa] mt-[30px] font-[600] text-[43px] text-center">Cuenta</h3>
        <p className="mt-[5px] font-[Poppins] text-[15px] mb-[30px]">
          ¿Quiénes somos? ¿de dónde venimos? ¿a dónde vamos? Filosofía pura aquí...
        </p>

        <div className="bg-[#fff] mt-[20px] rounded-[12px] shadow-md shadow-[#9995] w-[40%] p-[20px]">
          <div className="flex items-center justify-between">
            <h5 className="font-[Poppins] font-[600] text-[20px]">Datos personales</h5>
            <div
              onClick={openWindows}
              className="border-[1px] font-[Poppins] cursor-pointer duration-200 hover:bg-[#9992] border-[#555] text-[15px] font-[500] rounded-[9px] px-[14px] pt-[5px] py-[4px]"
            >
              Editar
            </div>
          </div>
          <p className="text-[16px] mt-[15px] font-[600] font-[Poppins]">Nombre</p>
          <p className="text-[16px] font-[500] mt-[7px] font-[Poppins]">Jeremias Castro</p>
          <p className="text-[16px] mt-[15px] font-[600] font-[Poppins]">Correo</p>
          <p className="text-[16px] font-[500] mt-[7px] font-[Poppins]">jerecaslopez2019@gmail.com</p>
          <p className="text-[16px] font-[500] mt-[5px] text-emerald-800 font-[Poppins]">Verificado</p>
          <p className="text-[16px] cursor-pointer border-t-[1px] border-t-[#1115] pt-[15px] font-[600] underline mt-[22px] text-[#000] font-[Poppins]">
            Eliminar la cuenta
          </p>
          <p className="text-[16px] cursor-pointer font-[600] underline mt-[15px] text-[#000] font-[Poppins]">
            Cerrar Sesión
          </p>
        </div>

        {/* Wall con animación */}
        <div
          onClick={closeWindows}
          className={`fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#111b] z-[500] transition-all duration-[500ms] ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        ></div>

        {/* Window con animación */}
        <div
          className={`fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[45%] p-[25px] bg-[#fff] rounded-[10px] z-[600] transition-all duration-[500ms] ${
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
          }`}
        >
          <div className="flex items-center border-b-[1px] relative border-[#ccc] pb-[20px] justify-between">
            <h5 className="font-[Poppins] text-[#222] text-center w-[100%] font-[500] text-[20px]">Datos personales</h5>
            <svg
              onClick={closeWindows}
              className="absolute transition-all duration-[300ms] right-[0px] cursor-pointer hover:bg-[#ccc5] h-[35px] w-[35px] p-[4px] rounded-[50%]"
              xmlns="http://www.w3.org/2000/svg"
              height="25px"
              viewBox="0 -960 960 960"
              width="25px"
              fill="#5f6368"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </div>

          <div className="floating-label mt-[40px]">
            <input
              type="text"
              className="font-[Poppins] pt-[4px]"
              defaultValue="Jeremias Castro"
              id="nombre"
              placeholder=" "
            />
            <label htmlFor="nombre" className="font-[Poppins]">
              Nombre
            </label>
          </div>

          <div className="floating-label mt-[20px]">
            <input
              type="text"
              className="font-[Poppins] pt-[4px]"
              defaultValue="jerecaslopez2019@gmail.com"
              id="email"
              placeholder=" "
            />
            <label htmlFor="email" className="font-[Poppins]">
              Email
            </label>
          </div>

          <input
            type="submit"
            value="Guardar cambios"
            className="w-[100%] hover:bg-[#f90] bg-[#f6b000] transition duration-300 ease-in-out text-[#fff] text-[17px] font-[Poppins] text-center h-[53px] rounded-[10px] mt-[35px] font-[600]"
          />
        </div>
      </div>
      <FooterSection />
    </section>
  );
}
