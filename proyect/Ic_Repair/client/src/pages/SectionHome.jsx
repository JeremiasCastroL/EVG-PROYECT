import { Link } from "react-router-dom"
import { NavBar } from "./Components/navBar"
import React, { useState } from "react";
// import { NavBar } from "./Components/navBar";
import { BlogBox } from "../components/componentHome/BlogBox";
import { PeopleBox } from "../components/componentHome/PoepleBox";
import { FooterSection } from "./Components/footer";


const items = [
    { url: "../../public/assets/gallina1.jpg", name: "7 cosas que no sabías sobre las gallinas", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
    { url: "../../public/assets/gallina2.jpg", name: "¿Qué raza de gallina ponedora es adecuada para ti?", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
    { url: "../../public/assets/gallina3.png", name: "Como mantener a tus gallinas saludables todo el año", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
    { url: "../../public/assets/gallina4.webp", name: "¿Qué raza de gallina ponedora es adecuada para ti?", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
    { url: "../../public/assets/gallina2.jpg", name: "7 cosas que no sabías sobre las gallinas", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
    { url: "../../public/assets/gallina3.png", name: "7 cosas que no sabías sobre las gallinas", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
    { url: "../../public/assets/gallina4.webp", name: "Como mantener a tus gallinas saludables todo el año", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
    { url: "../../public/assets/gallina1.jpg", name: "¿Qué raza de gallina ponedora es adecuada para ti?", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
    { url: "../../public/assets/gallina2.jpg", name: "Como tener a nuestras gallinas más bonitas y felices", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
    { url: "../../public/assets/gallina4.webp", name: "Alimento de pollos dependiendo de la edad", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
  ];

const items2 = [
        { url: "../../public/assets/gallinero1.jpg", name: "7 cosas que no sabías sobre las gallinas", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
        { url: "../../public/assets/gallinero2.jpg", name: "¿Qué raza de gallina ponedora es adecuada para ti?", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
        { url: "../../public/assets/gallinero3.jpg", name: "Como mantener a tus gallinas saludables todo el año", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
        { url: "../../public/assets/gallinero2.jpg", name: "¿Qué raza de gallina ponedora es adecuada para ti?", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
        { url: "../../public/assets/gallinero3.jpg", name: "7 cosas que no sabías sobre las gallinas", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
        { url: "../../public/assets/gallinero1.jpg", name: "7 cosas que no sabías sobre las gallinas", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
        { url: "../../public/assets/gallinero3.jpg", name: "Como mantener a tus gallinas saludables todo el año", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
        { url: "../../public/assets/gallinero2.jpg", name: "¿Qué raza de gallina ponedora es adecuada para ti?", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
        { url: "../../public/assets/gallinero1.jpg", name: "Como tener a nuestras gallinas más bonitas y felices", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
        { url: "../../public/assets/gallinero3.jpg", name: "Alimento de pollos dependiendo de la edad", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
      ];

const items3 = [
        { url: "../../public/assets/raza1.webp", name: "Ayam Cemani", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
        { url: "../../public/assets/raza2.webp", name: "Gallina Fenix", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
        { url: "../../public/assets/raza3.jpg", name: "Gallina Frizzle", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
        { url: "../../public/assets/raza4.webp", name: "Gllina Sultán", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
        { url: "../../public/assets/raza2.webp", name: "Gllina Fenix", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
        { url: "../../public/assets/raza3.jpg", name: "Ayam Cemani", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
        { url: "../../public/assets/raza1.webp", name: "Gallina Sultán", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
        { url: "../../public/assets/raza2.webp", name: "Gllina Frizzle", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
        { url: "../../public/assets/raza3.jpg", name: "Galina Fenix", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
        { url: "../../public/assets/raza1.webp", name: "Ayam Cemani", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
      ];

const items4 = [
        { url: "../../public/assets/uiface1.jpg", name: "Ayam Cemani", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
        { url: "../../public/assets/uiface2.jpg", name: "Gallina Fenix", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
        { url: "../../public/assets/uiface3.jpg", name: "Gallina Frizzle", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
        { url: "../../public/assets/uiface4.jpg", name: "Gllina Sultán", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
        { url: "../../public/assets/uiface2.jpg", name: "Gllina Fenix", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
        { url: "../../public/assets/uiface1.jpg", name: "Ayam Cemani", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
        { url: "../../public/assets/uiface3.jpg", name: "Gallina Sultán", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
        { url: "../../public/assets/uiface4.jpg", name: "Gllina Frizzle", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
        { url: "../../public/assets/uiface2.jpg", name: "Galina Fenix", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
        { url: "../../public/assets/uiface1.jpg", name: "Ayam Cemani", description: "Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum."},
      ];

  const itemsPerPage = 4;
  const itemsPerPage2 = 4

export function Home(){
    const [index, setIndex] = useState(0);
    
      const prevSlide = () => {
        setIndex((prev) => Math.max(prev - itemsPerPage, 0));
      };
    
      const nextSlide = () => {
        setIndex((prev) =>
          Math.min(prev + itemsPerPage, items.length - itemsPerPage)
        );
      };
    return (
        <section className="">
             <NavBar/>
            {/* <div className="relative">
                    <div className=" bg-[linear-gradient(to_right,black_20%,transparent_80%)] h-[100%] left-[0] absolute top-[0] w-[700px]"></div>
                    <img src="../../public/assets/banner1.jpg"  alt="" className="h-[400px] w-[100%] object-cover"/>
                    </div> */}
            <div className="bg-[#ffd700] h-[100vh] pt-[100px] relative">

                    <div className="absolute left-[100px] top-[50%] translate-y-[-50%]">
                         <h3 className="font-[700] text-[50px] font-[Poppins] w-[500px] text-[#fff]">En vida de las gallinas</h3>
                         <p className="w-[650px] text-[#fff] mt-[13px] text-[22px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur cum neque eos necessitatibus culpa corporis repudiandae eius nesciunt.</p>
                    </div>
            </div>
            <div className="px-[80px] mt-[100px] pb-[90px]">
                <h3 className="font-[700] text-[50px] mb-[40px] font-[Poppins] w-[100%] text-center text-[#111]">TODO SOBRE GALLINAS</h3>
                <h4 className="font-[Poppins] text-[28px] font-[800] mt-[90px]">Últimos videos:</h4>
                <div className="mt-[15px] flex gap-[15px] ">
                    <Link to="youtube.com/" className="w-[20%] bg-[#fff] pb-[10px] rounded-[9px]">
                        <img src="../../public/assets/portada2.jpg" alt="" className="h-[110px] rounded-[12px] object-cover"/>
                        <h4 className="font-[Poppins] text-[#222] line-clamp-2 text-[17px] font-[600] mt-[10px] px-[10px]">Comida para tus pollitos segun su edad</h4>
                    </Link>
                    {/* <iframe className="rounded-[12px] overflow-hidden" width="560" height="" src="https://www.youtube.com/embed/ytlLS9LakaM?si=4-ZglxR2woW39kWB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    <Link to="youtube.com/" className="w-[20%] bg-[#fff] pb-[10px] rounded-[9px]">
                        <img src="../../public/assets/Miniatura de Youtube tour de ciclismo moderno azul amarillo_20250213_211843_0000.png" alt="" className="h-[110px] rounded-[12px] object-cover"/>
                        <h4 className="font-[Poppins] text-[#222] line-clamp-2 text-[16px] font-[600] mt-[10px]">7 cosas que no sabías de la reproducción de las gallinas</h4>
                    </Link>
                    <Link to="youtube.com/" className="w-[20%] bg-[#fff] pb-[10px] rounded-[9px]">
                        <img src="../../public/assets/portada3.jpg" alt="" className="h-[110px] w-[300px] rounded-[12px] object-cover"/>
                        <h4 className="font-[Poppins] text-[#222] line-clamp-2 text-[16px] font-[600] mt-[10px]">Como tener a nuestras gallinas más bonitas y felices</h4>
                    </Link>
                    <Link to="youtube.com/" className="w-[20%] bg-[#fff] pb-[10px] rounded-[9px]">
                        <img src="../../public/assets/portada4.jpg" alt="" className="h-[110px] w-[300px] rounded-[12px] object-cover"/>
                        <h4 className="font-[Poppins] text-[#222] line-clamp-2 text-[16px] font-[600] mt-[10px]">Como mantener a tus gallinas saludables todo el año</h4>
                    </Link>
                    <Link to="youtube.com/" className="w-[20%] bg-[#fff] pb-[10px] rounded-[9px]">
                        <img src="../../public/assets/portada5.jpg" alt="" className="h-[110px] w-[300px] rounded-[12px] object-cover"/>
                        <h4 className="font-[Poppins] text-[#222] line-clamp-2 text-[16px] font-[600] mt-[10px]">¿Cómo reacciona un pato a la playa?</h4>
                    </Link>
                    <Link to="youtube.com/" className="w-[20%] bg-[#fff] pb-[10px] rounded-[9px]">
                        <img src="../../public/assets/portada6.jpg" alt="" className="h-[110px] w-[300px] rounded-[12px] object-cover"/>
                        <h4 className="font-[Poppins] text-[#222] line-clamp-2 text-[16px] font-[600] mt-[10px]">Nacieron los patitos bebé</h4>
                    </Link>
                </div>
                <div>
                    <h3 className="font-[Poppins] text-[32px] w-[250px] mt-[100px] font-[800]">Alimentación</h3>
                    <div className="mt-[30px] relative overflow-hidden rounded-lg">
                              <div
                                className="flex transition-transform duration-500"
                                style={{
                                  transform: `translateX(-${index * (100 / itemsPerPage)}%)`,
                                }}
                              >
                                {items.map((item, i) => (
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
                                  index >= items.length - itemsPerPage
                                    ? "bg-[#eee5] "
                                    : "text-[#999]"
                                }`}
                              >
                                chevron_right
                              </span>
                        </div>
                </div>
                <div>
                    <h3 className="font-[Poppins] text-[32px] w-[250px] mt-[100px] font-[800]">Gallineros</h3>
                    <div className="mt-[30px] relative overflow-hidden rounded-lg">
                              <div
                                className="flex transition-transform duration-500"
                                style={{
                                  transform: `translateX(-${index * (100 / itemsPerPage2)}%)`,
                                }}
                              >
                                {items2.map((item2, i) => (
                                  <div
                                    key={i}
                                    className="w-1/4 p-2 flex justify-center shrink-0"
                                    style={{ flex: `0 0 ${100 / itemsPerPage2}%` }}
                                  >
                                    <BlogBox urlBlog={item2.url} nameBlog={item2.name} infBlog={item2.description} className=""/>
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
                                  index >= items.length - itemsPerPage
                                    ? "bg-[#eee5] "
                                    : "text-[#999]"
                                }`}
                              >
                                chevron_right
                              </span>
                        </div>
                </div>
                <div>
                    <h3 className="font-[Poppins] text-[32px] w-[250px] mt-[100px] font-[800]">Razas de gallinas</h3>
                    <div className="mt-[30px] relative overflow-hidden rounded-lg">
                              <div
                                className="flex transition-transform duration-500"
                                style={{
                                  transform: `translateX(-${index * (100 / itemsPerPage2)}%)`,
                                }}
                              >
                                {items3.map((item3, i) => (
                                  <div
                                    key={i}
                                    className="w-1/4 p-2 flex justify-center shrink-0"
                                    style={{ flex: `0 0 ${100 / itemsPerPage2}%` }}
                                  >
                                    <BlogBox urlBlog={item3.url} nameBlog={item3.name} infBlog={item3.description} className=""/>
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
                                  index >= items.length - itemsPerPage
                                    ? "bg-[#eee5] "
                                    : "text-[#999]"
                                }`}
                              >
                                chevron_right
                              </span>
                        </div>
                </div>
                <div>
                    <h3 className="font-[Poppins] text-[32px] w-[250px] mt-[100px] font-[800]">Experiencias y consejos</h3>
                    <div className="mt-[30px] relative overflow-hidden rounded-lg">
                              <div
                                className="flex transition-transform duration-500"
                                style={{
                                  transform: `translateX(-${index * (100 / itemsPerPage2)}%)`,
                                }}
                              >
                                {items4.map((item, i) => (
                                  <div
                                    key={i}
                                    className="w-1/4 p-2 flex justify-center shrink-0"
                                    style={{ flex: `0 0 ${100 / itemsPerPage2}%` }}
                                  >
                                    <PeopleBox urlBlog={item.url} nameBlog={item.name} infBlog={item.description} className=""/>
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
                                  index >= items.length - itemsPerPage
                                    ? "bg-[#eee5] "
                                    : "text-[#999]"
                                }`}
                              >
                                chevron_right
                              </span>
                        </div>
                </div>
            </div>
                <div className="bg-[#fff] px-[80px] pt-[30px]">
                    <h3 className="font-[Poppins] text-[#111] text-[34px] w-[350px] mt-[100px] font-[800]">Sobre En vida de las Gallinas</h3>
                    <h3 className="font-[Poppins] text-[#111] text-[65px] w-[100%] text-center mt-[50px] font-[800]">GALERÍA</h3>
                    <div className="flex mt-[30px] justify-center flex-wrap">
                        <div className="flex flex-col justify-center w-[625px] mt-[15px] pb-[10px] rounded-[16px]">
                               <img src="../../public/assets/imag2.jpg" alt="" className="h-[344px] w-[625px] relative rounded-[16px] object-cover"/>
                         </div>
                    </div>
                    <h3 className="font-[Poppins] text-[#111] text-[65px] w-[100%] text-center mt-[80px] font-[800]">NUESTRAS GALLINAS</h3>
                    <div className="flex mt-[30px] justify-center flex-wrap">
                        <div className="flex flex-col justify-center w-[625px] mt-[15px] pb-[10px] rounded-[16px]">
                               <img src="../../public/assets/ourgallinas.webp" alt="" className="h-[344px] w-[625px] relative rounded-[16px] object-cover"/>
                        </div>
                    </div>
                </div>
                    
                    <div className="pt-[90px] mt-[50px] bg-[#FFF9DB] pb-[90px] flex justify-center flex-col items-center">
                           <div className="flex flex-col justify-center items-center">
                               <h4 className="font-[700] font-[Poppins] text-[33px] text-[#]">Suscribete a nuestro</h4>
                               <h4  className="font-[800] font-[Poppins] text-[52px]">NEWSLETTER</h4>
                           </div>
                           <p className="font-[Poppins] mt-[15px]">Recibe un email con las nuevas noticias de En vida de las gallinas</p>
                           <div className="flex gap-[13px] items-center mt-[15px]">
                              <input type="text" placeholder="Ej: prueba@email.com" className="w-[500px] focus:border-[#999] focus:border-[2px] outline-none duration-100 px-[20px] border-[1px] border-[#5559] rounded-[10px] h-[50px]"/>
                              <button className="bg-[#ffd700] duration-200 hover:bg-[#f90] font-[Poppins] font-[600] text-[#fff] rounded-[10px] h-[50px] px-[30px]">Me inscribo</button>
                           </div>
                           <p className="mt-[15px] text-[13px]">Al registrar tu dirección de email, reconoces haber leído y aceptas la política de privacidad de ¡HOLA!</p>
                    </div>
                                  <FooterSection/>
                    
        </section>
    )
}