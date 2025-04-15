import { FunctionBox } from "../funtionBox";


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


export function Section3(){
    return (
        <section>
            <div>
                <h3 className="font-[Poppins] text-[32px] w-[250px] mt-[100px] font-[800]">Alimentación</h3>
                <FunctionBox values={items}></FunctionBox>
            </div>
            <div>
                <h3 className="font-[Poppins] text-[32px] w-[250px] mt-[100px] font-[800]">Gallineros</h3>
                <FunctionBox values={items2}></FunctionBox>
            </div>
            <div>
                <h3 className="font-[Poppins] text-[32px] w-[250px] mt-[100px] font-[800]">Razas de gallinas</h3>
                <FunctionBox values={items3}></FunctionBox>
            </div>
            <div>
                <h3 className="font-[Poppins] text-[32px] w-[250px] mt-[100px] font-[800]">Experiencias y consejos</h3>
                <FunctionBox values={items4}></FunctionBox>
            </div>
        </section>
    )
}
