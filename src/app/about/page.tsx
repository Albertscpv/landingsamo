const About = () => {
    return(
        <div className="min-h-screen p-4 flex flex-col gap-10 animate-fade-in text-justify">
            <h2 className="font-bold text-4xl my-2">Acerca de Samo D</h2>
            <p className="">La búsqueda de soluciones es esencial para el crecimiento de cualquier empresa. Así como las raíces de un árbol buscan su espacio en la tierra, nuestra filosofía se centra en encontrar siempre una respuesta sólida a los desafíos que surgen en el día a día. 
            <br />
            <br />
            Nos enfocamos en resolver problemas que, como obstáculos en el camino, pueden surgir al crear un negocio, y motivamos a los emprendedores a crecer en el mundo digital, como un árbol que se expande hacia el cielo. Además, los mantenemos actualizados con las mejores prácticas y herramientas que se adaptan a sus necesidades y objetivos, permitiéndoles ver el panorama completo, como una estrella guía en una noche oscura.
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
            <p>
                Convertirnos en la agencia de referencia y confianza para emprendedores y empresas en crecimiento, acompañándolos en cada paso hacia el éxito sostenido y a largo plazo. 
            </p>
            <h2 className="font-bold text-4xl my-2">Nuestra Misión</h2>
            <p>
                Nuestra misión es ser el aliado incondicional de los emprendedores en su camino hacia el éxito, brindándoles guía y apoyo constantes. Creemos en el trabajo duro y el progreso continuo, por lo que jamás daremos un <b className="text-[var(--marked-text)]">"no"</b> por respuesta.
            </p>

            <h2 className="font-bold text-4xl my-2">Nuestros Valores</h2>
            <p>
            Nos guiamos por los valores de responsabilidad, confianza, respeto, paciencia y perseverancia. Estos principios son la base de nuestra relación con cada cliente, ayudándolos a avanzar con seguridad y constancia en su camino hacia el éxito.
            </p>
        </div>

    )
} 
export default About;