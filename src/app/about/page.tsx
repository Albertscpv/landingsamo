const About = () => {
    return(
        <div className="min-h-screen p-4 flex flex-col gap-10 animate-fade-in text-justify">
            <h2 className="font-bold text-4xl my-2">Acerca de Samo D</h2>
            <p className="">La búsqueda de soluciones es una parte esencial del crecimiento de una empresa o compañía. Nuestra filosofía se basa en buscar siempre una solución a los problemas que surgen con el día a día. Buscamos solucionar aquellos inconvenientes que puedan surgir a la hora de crear una empresa e incentivar a los pequeños empresarios en el mundo digital y mantenerlos actualizados sobre lo que actualmente puede ser mejor o no para ellos.
            </p>
            <div className="flex flex-col gap-5">
                <div className="flex w-[100%] justify-between gap-5">
                    <img src="" alt="1" />
                    <img src="" alt="2" />
                </div>
                <div className="flex w-[100%] gap-5 justify-between">
                    <img src="" alt="3" />
                    <img src="" alt="4" />
                </div>
            </div>
            <h2 className="font-bold text-4xl my-2">Nuestra Visión</h2>
            <p>El éxito es algo que se consigue con el tiempo y nos vemos como la principal agencia de confianza para todos los emprendedores y para aquellos que buscan crecer. </p>

            <h2 className="font-bold text-4xl my-2">Nuestra Misión</h2>
            <p>Para cumplir los propósitos y metas hay que trabajar duro y progresar. Nuestra misión es guiar a los emprendedores en busca del éxito, nunca existirá un <b className="text-[var(--marked-text)]">no</b> por respuesta.</p>

            <h2 className="font-bold text-4xl my-2">Nuestros Valores</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam perspiciatis dolor nulla tempore nemo maxime magnam unde magni, beatae laboriosam possimus doloremque quos nisi neque voluptatum. Illo itaque vero dignissimos!</p>
        </div>

    )
} 
export default About;