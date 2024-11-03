import Image from "next/image";
import gargantua from "@/app/assets/gargantua.jpg";
import nebulosa from "@/app/assets/nebulosa.jpg";
import herbig from "@/app/assets/herbig.jpg";
import supernova from "@/app/assets/supernova.jpg";

const Services = () => {
    return (
        <div className="min-h-screen mx-2 p-4 flex flex-col gap-10 animate-fade-in">
            <h2 className="font-bold text-4xl animate-fade-in-up">
                Conozca nuestros servicios: 
            </h2>
            <div className="flex flex-wrap justify-between text-white gap-4">
                <div className="flex flex-col w-full sm:w-[48%] md:w-[20%] bg-white h-[400px] rounded-lg p-6 overflow-hidden relative  border border-[#fff] animate-fade-in-right transition-all duration-1000">
                    <Image
                        src={nebulosa}
                        alt="Nebulosa"
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-between ">
                        <h3 className="font-bold text-2xl">Nebulosa</h3>
                        <span>Paquete Nebu</span>
                        <button className="p-2 bg-white rounded-lg text-black hover:bg-black/40 border hover:text-white transition-all duration-700">Ver más</button>
                    </div>
                </div>

                <div className="flex flex-col w-full sm:w-[48%] md:w-[20%] bg-white h-[400px] rounded-lg p-6 overflow-hidden relative  border border-[#fff] animate-fade-in-right transition-all duration-1000">
                    <Image
                        src={herbig}
                        alt="Herbig"
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-between ">
                        <h3 className="font-bold text-2xl">Herbig</h3>
                        <span>Paquete Her</span>
                        <button className="p-2 bg-white rounded-lg text-black hover:bg-black/40 border hover:text-white transition-all duration-700">Ver más</button>
                    </div>
                </div>

                <div className="flex flex-col w-full sm:w-[48%] md:w-[20%] bg-white h-[400px] rounded-lg p-6 overflow-hidden relative  border border-[#fff] animate-fade-in-right transition-all duration-1000">
                    <Image
                        src={supernova}
                        alt="Supernova"
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-between ">
                        <h3 className="font-bold text-2xl">Supernova</h3>
                        <span>Paquete Nova</span>
                        <button className="p-2 bg-white rounded-lg text-black hover:bg-black/40 border hover:text-white transition-all duration-700">Ver más</button>
                    </div>
                </div>

                <div className="flex flex-col w-full sm:w-[48%] md:w-[20%] bg-white h-[400px] rounded-lg p-6 overflow-hidden relative  border border-[#fff] animate-fade-in-right transition-all duration-1000">
                    <Image
                        src={gargantua}
                        alt="Gargantúa"
                        layout="fill"
                        objectFit="cover"
                    />
                    <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-between ">
                        <h3 className="font-bold text-2xl">Gargantúa</h3>
                        <span>Paquete Gargantúa</span>
                        <button className="p-2 bg-white rounded-lg text-black hover:bg-black/40 border hover:text-white transition-all duration-700">Ver más</button>
                    </div>
                </div>
            </div>
            <div className="text-white p-4">
                        <h4 className="font-bold text-4xl">¿Buscas algo más?</h4>
                        <ul className="list-disc list-inside my-4">
                            <li>S1</li>
                            <li>S2</li>
                            <li>S3</li>
                            <li>S4</li>
                            <li>S5</li>
                            <li>S6</li>
                        </ul>
                    </div>
        </div>
    );
};

export default Services;
