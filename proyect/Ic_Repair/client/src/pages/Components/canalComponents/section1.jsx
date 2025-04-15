export function Section1(){
    return (
        <section className="pt-[100px]">
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
        </section>
    )
}