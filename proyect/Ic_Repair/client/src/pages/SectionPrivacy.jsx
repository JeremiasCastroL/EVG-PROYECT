import { NavBar } from "./Components/navBar"
import { FooterSection } from "./Components/footer"
import { Link } from "react-router-dom"

export function Privacy(){
    return (
        <section className="">
            <NavBar/>
            <div className="px-[100px] flex pt-[130px] gap-[10px] items-center">
                        <Link to="/" className="font-[Poppins] text-[#111] text-[15px]">Home</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
                        <Link to="/privacy-policies" className="font-[Poppins] text-[#111] text-[15px]">POLITICAS DE PRIVACIDAD</Link>
                    </div>

                  <div className="mt-[60px] px-[250px] font-[Poppins]">
<h3 className="font-[600] font-[Poppins] text-center text-[40px] mt-[50px]">Politicas de Privacidad</h3>

<p className="text-[17px] font-[600] mt-[55px]">Abril del 2025</p>
<p className="mt-[25px]">
Bienvenido/a a nuestro sitio web de blogs informativos sobre gallinas. Al acceder y utilizar esta web, aceptas los siguientes términos y condiciones. Si no estás de acuerdo con ellos, por favor no uses este sitio.
</p>

<div>

<h4 className="font-[600] text-[19px] mt-[25px]">
1. Uso del sitio
</h4>
<p className="mt-[10px]">
Este sitio tiene como finalidad brindar contenido educativo e informativo sobre gallinas, su crianza, cuidado y curiosidades. El contenido publicado es de carácter general y no sustituye asesoría profesional.
</p>

<h4 className="font-[600] text-[19px] mt-[25px]">
2. Propiedad intelectual
</h4>
<p className="mt-[10px] text-[16px]">
Todos los textos, imágenes, logotipos, y contenidos son propiedad del sitio o de sus respectivos autores, salvo que se indique lo contrario. No está permitido copiar, distribuir o reproducir el contenido sin autorización previa.
</p>

<h4 className="font-[600] text-[19px] mt-[25px]">
3. Newsletter
</h4>
<p className="mt-[10px] text-[16px]">
Puedes suscribirte al newsletter para recibir actualizaciones sobre nuevos artículos. El correo electrónico que proporciones será tratado con respeto y seguridad (ver nuestra Política de Privacidad). Puedes darte de baja en cualquier momento mediante el enlace en los correos.
</p>

<h4 className="font-[600] text-[19px] mt-[25px]">
4. Limitación de responsabilidad
</h4>
<p className="mt-[10px] text-[16px]">
No nos hacemos responsables por daños o perjuicios derivados del uso de la información publicada. El uso de la información es bajo tu propio riesgo.
</p>

<h4 className="font-[600] text-[19px] mt-[25px]">
5. Modificaciones
</h4>
<p className="mt-[10px] text-[16px]">
Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor una vez publicadas en esta misma página.
</p>
</div>
                  </div>

            <FooterSection/>
        </section>
    )
}