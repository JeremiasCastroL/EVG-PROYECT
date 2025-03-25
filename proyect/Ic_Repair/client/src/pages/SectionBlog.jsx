
import { Link } from "react-router-dom"
import { NavBar } from "./Components/navBar"
import { FooterSection } from "./Components/footer"

export function Blog(){
    return (
        <section className=" pt-[100px]">
             <NavBar/>
            <div className="px-[80px] flex mt-[50px] gap-[10px] items-center">
                <Link to="" className="font-[Poppins] text-[#111] text-[14px]">Home</Link>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
                <Link to="" className="font-[Poppins] text-[#111] text-[14px]">Apicultura</Link>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
                <Link to="" className="font-[Poppins] text-[#111] text-[14px]">Blog</Link>   
            </div>
            <div className="flex w-[100%] px-[80px] mt-[30px]">
                <div className="flex flex-col w-[50%] pr-[17px] justify-center">
                <div className="flex justify-between mt-[0px] w-[100%]">
                           {/* <h3 className="text-[15px] font-[Poppins]">Actualizado el 25 Octubre del 2025</h3> */}
                           <div className="flex justify-center mt-[] items-center bg-[#f90] rounded-[50%] px-[7px] py-[7px]">
                           <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#fff"><path d="M680-80q-50 0-85-35t-35-85q0-6 3-28L282-392q-16 15-37 23.5t-45 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q24 0 45 8.5t37 23.5l281-164q-2-7-2.5-13.5T560-760q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-24 0-45-8.5T598-672L317-508q2 7 2.5 13.5t.5 14.5q0 8-.5 14.5T317-452l281 164q16-15 37-23.5t45-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T720-200q0-17-11.5-28.5T680-240q-17 0-28.5 11.5T640-200q0 17 11.5 28.5T680-160ZM200-440q17 0 28.5-11.5T240-480q0-17-11.5-28.5T200-520q-17 0-28.5 11.5T160-480q0 17 11.5 28.5T200-440Zm480-280q17 0 28.5-11.5T720-760q0-17-11.5-28.5T680-800q-17 0-28.5 11.5T640-760q0 17 11.5 28.5T680-720Zm0 520ZM200-480Zm480-280Z"/></svg>
                           </div>
                      </div>
                       <h4 className="font-[Poppins] text-[35px] mt-[20px] font-[800]">Conoce cómo alimentar a una gallina ponedora en las primeras semanas de vida</h4>
                       <p className="font-[Poppins] text-[17px] pb-[30px] text-[#555] mt-[10px]">En la avicultura, la alimentación y cuidado de las gallinas es un asunto importante</p>
                </div>
                <div className="w-[50%]">
                      <img src="../../public/assets/gallina2.jpg" alt="" className="h-[400px] w-[100%] rounded-[12px] object-cover"/>
                </div>
            </div>
            <div className="mt-[60px] px-[80px] flex">
                  <div className="font-[Poppins] w-[68%]">
                      <p className="text-[16px]">
                           En la avicultura, la alimentación y cuidado de las gallinas es un asunto importante. Las gallinas ponedoras, por ejemplo, necesitan contar con una alimentación especial para producir huevos que posean cáscaras que no se rompan con facilidad. 
                           Generalmente, la dieta nutricional de este tipo de aves requiere nutrientes específicos que las ayude a generar el calcio que sus crías necesitan para poder desarrollarse. En este sentido, en el siguiente artículo encontrarás consejos a tomar en cuenta para brindarles alimentos ricos en proteínas desde sus primeras semanas de vida. 
                      </p>
                      <h5 className="font-[700] text-[17px] mt-[14px]">
                           ¿Qué debe comer una gallina ponedora durante sus primeras semanas de vida?
                      </h5>
                      <p className="text-[16px] mt-[10px]">
                           Antes de pensar en darle alimento, debes tener en cuenta que, desde su nacimiento hasta aproximadamente las ocho semanas de vida, una gallina ponedora es conocida únicamente como pollita o polluela. Esto debido a que es aún demasiado pequeña. 
                           Debido a su corta edad, necesita contar con un alimento nutritivo y balanceado para que pueda establecer adecuadamente su salud e inmunidad ósea. Este debe contar con proteínas, aminoácidos, vitaminas y minerales completos. Las polluelas, antes de convertirse en gallinas, deben consumir este tipo de alimento inicial hasta que sean capaces de comer alimento de cultivo. 
                      </p>
                      <h5 className="font-[700] text-[17px] mt-[14px]">
                          ¿Cómo debo alimentar a una gallina ponedora en las siguientes semanas?
                      </h5>
                      <p className="text-[16px] mt-[10px]">
                          Para las siguientes semanas, es necesario que conozcas el proceso de crecimiento de una gallina ponedora. Este se resume de la siguiente manera:
                      </p>
                      <ul className="text-[17px] font-[700] mt-[10px] list-disc pl-5">
                           <li>Crecimiento durante los ocho a dieciséis meses de nacida</li>
                      </ul>
                      <p className="text-[16px] mt-[10px]">
                           Durante esta etapa de crecimiento es una buena idea hacer la transición de alimento inicial al de cultivo. Este último debe contener proteínas y un nivel de calcio ligeramente menor al brindado durante las semanas anteriores. Asimismo, tiene que incluir omega-3 y otros nutrientes esenciales, como granos y cereales, para apoyar la digestión y la salud de la pollita. 
                      </p>
                      <p className="text-[16px] mt-[10px]">
                           Es en estas semanas en las que la polluela ya es capaz de ovular e iniciar un período reproductivo. Por lo mismo, ya está apta para ser llamada gallina ponedora.
                      </p>
                      <ul className="text-[17px] font-[700] mt-[10px] list-disc pl-5">
                           <li>Crecimiento durante los dieciséis a más meses de nacida</li>
                      </ul>
                      <p className="text-[16px] mt-[10px]">
                           El alimento, específicamente en el periodo de reproducción e incubación, debe estar centrado en una dieta balanceada, incluyendo tanto proteínas como calcio para promover la formación de huevos con cáscaras fuertes. De lo contrario, las deficiencias de calcio pueden resultar en huevos con cáscaras extremadamente delgadas y gallinas con problemas en las patas. 
                      </p>
                      <p className="text-[16px] mt-[10px]">
                           Siendo así, asegúrate de que consuman de entre 2 a 3% más de calcio en su alimento. Para esto, puedes proporcionarles alimentos como conchas, ostras y caliza. Hay avicultores que optan por usar las propias cáscaras de huevo de gallinas como fuente de calcio. 
                      </p>
                      <p className="text-[16px] mt-[10px]">
                           En caso desees hacer lo mismo, debes cocinarlas y limpiarlas a fondo. Asimismo, tritúralas hasta obtener un polvo fino y agrégalas a su alimento habitual. De esta manera, no reconocerán lo que están comiendo y no intentarán comerse sus propios huevos. 
                      </p>
                      <h5 className="font-[700] text-[17px] mt-[14px]">
                          ¿Qué otros alimentos pueden consumir una gallina ponedora?
                      </h5>
                      <p className="text-[16px] mt-[10px]">
                          La mayoría de las personas suele creer que, para necesitar huevos fuertes, una gallina de este tipo necesita muchas más proteínas que calcio. Esta información no puede estar más alejada de la verdad. Lo cierto es que mientras las gallinas de carne necesitan un 20-24% de proteína en su dieta, las gallinas ponedoras solo necesitan un 16% o menos.
                      </p>
                      <p className="text-[16px] mt-[10px]">
                          Por lo tanto, si deseas complementar su dieta, puedes proporcionarles insectos, bayas, semillas y granos. Incluso, y si así lo quieres, puedes dejar que tu gallina busque libremente los bichos que más sean de su agrado. Solo asegúrate de vigilar lo que ingiere. 
                      </p>
                      <div className="text-[16px] gap-[5px] items-center flex mt-[10px]">
                           <h3>Quizás te interese:</h3>
                           <Link className="text-[#00f]">Conceptos básicos de bioseguridad para avicultores</Link>
                      </div>
                  </div>
                  <div className="w-[32%] flex items-start justify-end">
                    <img src="../../../public/assets/publicidad2.jpg" alt="" />
                     
                  </div>
            </div>
            <div className="px-[80px]">
                    <h3 className="font-[Poppins] text-[32px] w-[250px] mt-[100px] font-[800]">Relacionados</h3>
                    <div className="flex gap-[15px] mt-[30px] justify-between flex-wrap">
                         <div className="w-[260px] mt-[15px] pb-[10px] rounded-[16px]">
                            <img src="../../public/assets/gallina1.jpg" alt="" className="h-[258px] w-[100%] rounded-[12px] object-cover"/>
                            <h4 className="font-[Poppins] font-[600] text-[18px] mt-[17px] px-[0px]">7 cosas que no sabías sobre las gallinas</h4>
                            <p className="font-[Poppins] text-[14px] mt-[3px] px-[0px] line-clamp-2">Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum.</p>
                            <div className="font-[Poppins] flex items-center text-[14px] mt-[6px] px-[0px]">
                                    <p className="text-[25px] text-[#ffd700]"> ● </p>
                                    <p className=""> 25 Octubre del 2025 </p>
                            </div>
                         </div>
                         <div className="w-[260px] mt-[15px] pb-[10px] rounded-[16px]">
                            <img src="../../public/assets/gallina2.jpg" alt="" className="h-[258px] w-[100%] rounded-[12px] object-cover"/>
                            <h4 className="font-[Poppins] font-[600] text-[18px] mt-[17px] px-[0px]">¿Qué raza de gallina ponedora es adecuada para ti?</h4>
                            <p className="font-[Poppins] text-[14px] mt-[3px] px-[0px] line-clamp-2">Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum.</p>
                            <div className="font-[Poppins] flex items-center text-[14px] mt-[6px] px-[0px]">
                                    <p className="text-[25px] text-[#ffd700]"> ● </p>
                                    <p className=""> 25 Octubre del 2025 </p>
                            </div>
                         </div>
                         <div className="w-[260px] mt-[15px] pb-[10px] rounded-[16px]">
                            <img src="../../public/assets/gallina3.png" alt="" className="h-[258px] w-[100%] rounded-[12px] object-cover"/>
                            <h4 className="font-[Poppins] font-[600] text-[18px] mt-[17px] px-[0px]">7 cosas que no sabías sobre las gallinas</h4>
                            <p className="font-[Poppins] text-[14px] mt-[3px] px-[0px] line-clamp-2">Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum.</p>
                            <div className="font-[Poppins] flex items-center text-[14px] mt-[6px] px-[0px]">
                                    <p className="text-[25px] text-[#ffd700]"> ● </p>
                                    <p className=""> 25 Octubre del 2025 </p>
                            </div>
                         </div>
                         <div className="w-[260px] mt-[15px] pb-[10px] rounded-[16px]">
                            <img src="../../public/assets/gallina4.webp" alt="" className="h-[258px] w-[100%] rounded-[12px] object-cover"/>
                            <h4 className="font-[Poppins] font-[600] text-[18px] mt-[17px] px-[0px]">7 cosas que no sabías sobre las gallinas</h4>
                            <p className="font-[Poppins] text-[14px] mt-[3px] px-[0px] line-clamp-2">Lorem ipsum, amet consectetur adipisicing elit. Eligendi alias sunt sed laborum.</p>
                            <div className="font-[Poppins] flex items-center text-[14px] mt-[6px] px-[0px]">
                                    <p className="text-[25px] text-[#ffd700]"> ● </p>
                                    <p className=""> 25 Octubre del 2025 </p>
                            </div>
                         </div>
                    </div>
                </div>
              <FooterSection/>
        </section>
    )
}