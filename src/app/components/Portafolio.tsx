import Image from "next/image"
const Portafolio = () =>{

    return(
        <>
        <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[400px]">
                <Image
                src="/rocket.jpg"
                alt="Rocket launch trail"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
                />
            </div>
            <div className="relative h-[500px]">
                <Image
                src="/Arte.jpeg"
                alt="Rocket launch trail"
                width={600}
                height={500}
                className="w-full h-full object-cover rounded-lg"
                />
            </div>
        </div>
        </>
    )
} 
export default Portafolio;