import { NavBar } from "./Components/navBar";
import { FooterSection } from "./Components/footer";
import { Link } from "react-router-dom";

export function Tyc(){
    return (
        <section className="">
                  <NavBar />
                  <div className="px-[100px] flex pt-[130px] gap-[10px] items-center">
                        <Link to="/" className="font-[Poppins] text-[#111] text-[15px]">Home</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
                        <Link to="/terms-of-use" className="font-[Poppins] text-[#111] text-[15px]">CONDICIONES GENERALES DE USO</Link>
                    </div>

                  <div className="mt-[60px] px-[250px] font-[Poppins]">
<h3 className="font-[600] font-[Poppins] text-center text-[40px] mt-[50px]">Condiciones Generales de uso</h3>

<p className="text-[17px] font-[600] mt-[55px]">Abril del 2025</p>
<p className="mt-[25px]">
Tu privacidad es importante para nosotros. A continuación, te explicamos cómo recopilamos y usamos tu información.
</p>

<div>

<h4 className="font-[600] text-[19px] mt-[25px]">
1. Información que recopilamos
</h4>
<p className="mt-[10px]">
La única información personal que solicitamos es tu dirección de correo electrónico si decides suscribirte a nuestro newsletter.
</p>

<h4 className="font-[600] text-[19px] mt-[25px]">
2. Uso de la información
</h4>
<p className="mt-[10px] text-[16px]">
Usamos tu email únicamente para enviarte actualizaciones de nuevos artículos relacionados con gallinas y contenido relacionado con nuestro sitio.
</p>

<h4 className="font-[600] text-[19px] mt-[25px]">
3. Protección de datos
</h4>
<p className="mt-[10px] text-[16px]">
No compartimos, vendemos ni alquilamos tus datos personales con terceros. Utilizamos medidas básicas de seguridad para proteger tu información.
</p>

<h4 className="font-[600] text-[19px] mt-[25px]">
4. Cookies
</h4>
<p className="mt-[10px] text-[16px]">
Este sitio puede usar cookies para mejorar la experiencia de navegación. No se recopila información personal mediante cookies.
</p>

<h4 className="font-[600] text-[19px] mt-[25px]">
5. Tus derechos
</h4>
<p className="mt-[10px] text-[16px]">
Puedes darte de baja del newsletter en cualquier momento mediante el enlace incluido en cada correo. Si deseas eliminar tu correo por completo de nuestra base de datos, puedes contactarnos.
</p>
<h4 className="font-[600] text-[19px] mt-[25px]">
6. Cambios a esta política
</h4>
<p className="mt-[10px] text-[16px]">
Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Te notificaremos de los cambios significativos a través del sitio web.
</p>
</div>
                  </div>

<FooterSection />
        </section>
    )
}