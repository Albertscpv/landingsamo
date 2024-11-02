import Image from "next/image"
import gargantua from "@/app/assets/gargantua.jpg"
import nebulosa from "@/app/assets/nebulosa.jpg"
import herbig from "@/app/assets/herbig.jpg"
import supernova from "@/app/assets/supernova.jpg"



const Services = () => {
    return(
        <div className="min-h-screen mx-2 p-4 flex flex-col gap-10 animate-fade-in text-justify">
            <h2 className="font-bold text-4xl animate-fade-in-up">
                Conozca nuestros servicios: 
            </h2>
            <div className="flex flex-row w-[100%] flex-wrap gap-4 justify-between text-white">
                <div className="w-[20%] bg-white h-[400px] rounded-lg p-6 overflow-hidden relative shadow-lg shadow-white/30 border border-[#000] shadow-white animate-fade-in-right transition-all duration-1000">
                    <Image  src={nebulosa} 
                            alt="gargantua pick"
                            layout="fill"
                            objectFit="cover"
                            className=""
                    />
                    <div className="absolute inset-0 bg-black/40   p-4 flex flex-col justify-between">
                        <h3 className="font-bold text-2xl">Nebulosa</h3>
                        <span>Paquete Nebu</span>
                        <p></p>
                        <button className="p-2 bg-white rounded-lg text-black hover:bg-black/40 border hover:text-white transition-all duration-700">Ver más</button>
                    </div>    
                </div>
                <div className="w-[20%] bg-white h-[400px] rounded-lg p-6 overflow-hidden relative shadow-lg shadow-white/30 border border-[#000] shadow-white animate-fade-in-right transition-all duration-1000">
                <Image  src={herbig} 
                            alt="gargantua pick"
                            layout="fill"
                            objectFit="cover"
                            className=""
                    />
                    <div className="absolute inset-0 bg-black/40   p-4 flex flex-col justify-between">
                        <h3 className="font-bold text-2xl">Herbig</h3>
                        <span>Paquete Her</span>
                        <p></p>
                        <button className="p-2 bg-white rounded-lg text-black hover:bg-black/40 border hover:text-white transition-all duration-700">Ver más</button>
                    </div> 
                </div>

                <div className="w-[20%] bg-white h-[400px] rounded-lg p-6 overflow-hidden relative shadow-lg shadow-white/30 border border-[#000] shadow-white animate-fade-in-right transition-all duration-1000">
                <Image  src={supernova} 
                            alt="gargantua pick"
                            layout="fill"
                            objectFit="cover"
                            className=""
                    />
                    <div className="absolute inset-0 bg-black/40  p-4 flex flex-col justify-between">
                        <h3 className="font-bold text-2xl">SuperNova</h3>
                        <span>Paquete Nova</span>
                        <p></p>
                        <button className="p-2 bg-white rounded-lg text-black hover:bg-black/40 border hover:text-white transition-all duration-700">Ver más</button>
                    </div> 
                </div>

                <div className="w-[20%] bg-white h-[400px] rounded-lg p-6 overflow-hidden relative shadow-lg shadow-white/30 border border-[#000] shadow-white animate-fade-in-right transition-all duration-1000">
                    <Image  src={gargantua} 
                            alt="gargantua pick"
                            layout="fill"
                            objectFit="cover"
                            className=""
                    />
                    <div className="absolute inset-0 bg-black/40   p-4 flex flex-col justify-between">
                        <h3 className="font-bold text-2xl">Gargantúa</h3>
                        <span>Paquete Gargantúa</span>
                        <p></p>
                        <button className="p-2 bg-white rounded-lg text-black hover:bg-black/40 border hover:text-white transition-all duration-700">Ver más</button>
                    </div>
                </div>
            </div>
        </div>
    )
} 
export default Services;