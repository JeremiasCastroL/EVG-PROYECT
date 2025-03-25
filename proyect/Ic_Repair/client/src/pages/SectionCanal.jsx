import { NavBar } from "./Components/navBar"
import { Link } from "react-router-dom"
import { FooterSection } from "./Components/footer"

export function Canal(){
    return (
        <section>
            <NavBar/>
            <NavBar/>
            <div className="pt-[100px]">
                <div className="absolute top-[100px] h-[90vh]  bg-gradient-to-b from-[#62C2FF] via-[#B3E8FF] to-[#f9f9f9] w-[100%] z-[-1]"></div>
                <div className="px-[80px] pb-[50px] pt-[50px]">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col gap-[20px] items-center mt-[40px]">
                        <img src="../../public/assets/evg_logo.jpg" alt="" className="h-[130px] w-[130px] rounded-[50%]"/>
                        <div className="flex justify-center items-center relative">
                            <img src="../../public/assets/youtube.webp" alt="" className="w-[120px] h-[50px] object-cover"/>
                            <h3 className="font-[800] text-[45px] text-[#111] font-[Poppins]">En vida de las Gallinas 2</h3>
                        </div>
                    </div>
                </div>
                </div>
                <div className="px-[120px] text-[17px] text-center font-[Poppins] mt-[0px]">
                        {/* <p>Somos un Canal de YouTube con más de 300k suscriptores, Iniciado el 3 de Enero del 2015, Más de 10 años impartiendo conocimientos y enseñanzas sobre aves, principalmente las gallinas, gallos y pollos.</p> */}
                </div>
                <div className="px-[120px] mt-[50px]">
                <h3 className="font-[800] text-[45px] text-[#111] font-[Poppins]">Historia</h3>
                        <p className="text-[17px] font-[Poppins] mt-[20px]">KFC, a subsidiary of Yum! Brands, Inc. (NYSE: YUM.), is a global chicken restaurant brand with a rich, decades-long history of success and innovation. It all started with one cook, Colonel Harland Sanders, who created a finger lickin’ good recipe more than 80 years ago, a list of secret herbs and spices scratched out on the back of the door to his kitchen. Today we still follow his formula for success, with real cooks breading and freshly preparing our delicious chicken by hand in more than 26,000 restaurants in over 150 countries and territories around the world.</p>
                </div>
                <div className="px-[120px]">
                       <h3 className="font-[Poppins] text-[32px] w-[250px] mt-[100px] font-[800]">Vídeos Exclusivos</h3>
                       {/* <h3 className="font-[800] text-[45px] text-[#111] mt-[100px] font-[Poppins]">Videos</h3> */}
                       <div className="flex mt-[30px] gap-[20px]">
                           <Link to="../youtube" className="w-[25%]">
                               <img src="../../public/assets/Miniatura de Youtube tour de ciclismo moderno azul amarillo_20250213_211843_0000.png" alt="" className="w-[340px] h-[148px] rounded-[10px] object-cover" />
                               <h3 className="font-[Poppins] mt-[10px] font-[700] text-[16px]">Te vamos a extrañar Llanerito - EVG</h3>
                               <p className="text-[14px] font-[Poppins]">Hace 10 días</p>
                           </Link>
                           <Link to="../youtube" className="w-[25%]">
                               <img src="../../public/assets/portada3.jpg" alt="" className="w-[340px] h-[148px] rounded-[10px] object-cover" />
                               <h3 className="font-[Poppins] mt-[10px] font-[700] text-[16px]">Te vamos a extrañar Llanerito - EVG</h3>
                               <p className="text-[14px] font-[Poppins]">Hace 10 días</p>
                           </Link>
                           <Link to="../youtube" className="w-[25%]">
                               <img src="../../public/assets/portada2.jpg" alt="" className="w-[340px] h-[148px] rounded-[10px] object-cover" />
                               <h3 className="font-[Poppins] mt-[10px] font-[700] text-[16px]">Te vamos a extrañar Llanerito - EVG</h3>
                               <p className="text-[14px] font-[Poppins]">Hace 10 días</p>
                           </Link>
                           <Link to="../youtube" className="w-[25%]">
                               <img src="../../public/assets/portada4.jpg" alt="" className="w-[340px] h-[148px] rounded-[10px] object-cover" />
                               <h3 className="font-[Poppins] mt-[10px] font-[700] text-[16px]">Te vamos a extrañar Llanerito - EVG</h3>
                               <p className="text-[14px] font-[Poppins]">Hace 10 días</p>
                           </Link>
                       </div>
                </div>
                <div className="px-[120px] relative mt-[100px]">
                      <h3 className="font-[800] text-[45px] text-[#111] font-[Poppins]">Galería</h3>
                      <div className="relative flex mt-[20px] flex-wrap justify-between">
                        <div className="absolute bg-gradient-to-b from-transparent to-[#f9f9f9] bottom-[0px] w-[100%] h-[200px]"></div>
                        <Link to="../galeria" className="absolute left-[50%] rounded-[30px] translate-x-[-50%] bottom-[10px] px-[30px] py-[12px] font-[Poppins] bg-[#ffd700] font-[800] text-[#fff]">Ver Más</Link>
                        <img src="../../public/assets/imag1.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag2.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag3.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag4.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag5.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag8.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag7.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag6.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag9.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag4.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag7.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                        <img src="../../public/assets/imag1.jpg" alt="" className="w-[16%] h-[auto] rounded-[10px] mt-[10px]"/>
                      </div>
                      <div className="fixed hidden bg-[#f5f5f5] w-[100vw] z-[900] items-center h-[100vh] top-[0px] left-[0px] flex justify-center">
                            <img src="../../public/assets/imag5.jpg" alt="" className="h-[95%] relative w-[auto]"/>
                            <Link className="bg-[#f90] rounded-[50%] absolute right-[60px] cursor-pointer top-[40px] w-[50px] h-[50px] flex justify-center items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 -960 960 960" width="27px" fill="#fff"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                            </Link>
                      </div>
                </div>
                <div className="px-[120px] mt-[100px]">
                      <h3 className="font-[800] text-[45px] text-[#111] font-[Poppins]">Reseñas</h3>
                      <div className="flex justify-between mt-[30px]">
                          <div className="w-[23%] px-[25px] py-[15px] rounded-[10px] bg-[#fff] flex flex-col justify-center pt-[25px] items-center">
                             {/* <h6 className="text-[40px] font-[800] font-[Poppins]">“</h6> */}
                                                         <img src="../../public/assets/uiface1.jpg" alt="" className="h-[110px]  w-[110px] rounded-[50%] object-cover"/>
                             <h5 className="font-[Poppins] mt-[22px] w-[100%] text-start font-[700] text-[24px]">Armando Casas</h5>
                             <p className="font-[Poppins] text-[15px] mt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing. Osapiente vitae obcaecati, repudiandae fugit amet natus iure ipsa magni rem deleniti.</p>
                          </div>
                          <div className="w-[23%] px-[25px] py-[15px] rounded-[10px] bg-[#fff] flex flex-col justify-center pt-[25px] items-center">
                             {/* <h6 className="text-[40px] font-[800] font-[Poppins]">“</h6> */}
                                                         <img src="../../public/assets/uiface2.jpg" alt="" className="h-[110px]  w-[110px] rounded-[50%] object-cover"/>
                             <h5 className="font-[Poppins] mt-[22px] w-[100%] text-start font-[700] text-[24px]">Jeremias López</h5>
                             <p className="font-[Poppins] text-[15px] mt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing. Osapiente vitae obcaecati, repudiandae fugit amet natus iure ipsa magni rem deleniti.</p>
                          </div>
                          <div className="w-[23%] px-[25px] py-[15px] rounded-[10px] bg-[#fff] flex flex-col justify-center pt-[25px] items-center">
                             {/* <h6 className="text-[40px] font-[800] font-[Poppins]">“</h6> */}
                                                         <img src="../../public/assets/uiface3.jpg" alt="" className="h-[110px]  w-[110px] rounded-[50%] object-cover"/>
                             <h5 className="font-[Poppins] mt-[22px] w-[100%] text-start font-[700] text-[24px]">Daniela Díaz</h5>
                             <p className="font-[Poppins] text-[15px] mt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing. Osapiente vitae obcaecati, repudiandae fugit amet natus iure ipsa magni rem deleniti.</p>
                          </div>
                          <div className="w-[23%] px-[25px] py-[15px] rounded-[10px] bg-[#fff] flex flex-col justify-center pt-[25px] items-center">
                             {/* <h6 className="text-[40px] font-[800] font-[Poppins]">“</h6> */}
                                                         <img src="../../public/assets/uiface4.jpg" alt="" className="h-[110px]  w-[110px] rounded-[50%] object-cover"/>
                             <h5 className="font-[Poppins] mt-[22px] w-[100%] text-start font-[700] text-[24px]">Javier Hungría C.</h5>
                             <p className="font-[Poppins] text-[15px] mt-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing. Osapiente vitae obcaecati, repudiandae fugit amet natus iure ipsa magni rem deleniti.</p>
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
                              <input type="text" placeholder="Ej: prueba@email.com" className="w-[500px] px-[20px] border-[1px] border-[#5559] rounded-[10px] h-[50px]"/>
                              <button className="bg-[#ffd700] font-[Poppins] font-[600] text-[#fff] rounded-[10px] h-[50px] px-[30px]">Me inscribo</button>
                           </div>
                           <p className="mt-[15px] text-[13px]">Al registrar tu dirección de email, reconoces haber leído y aceptas la política de privacidad de ¡HOLA!</p>
                    </div>
            </div>
            <FooterSection/>
        </section>
    )
}