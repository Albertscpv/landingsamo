import Image from "next/image";

const Portafolio = () => {
  return (
    <>
      <div className="my-6 font-bold text-2xl text-center md:text-left">
        <h2>Nuestros Proyectos:</h2>
      </div>
      <hr />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-6">
        <div className="relative h-[300px] sm:h-[350px] lg:h-[400px]">
          <Image
            src="/portafolio/Soda506/Soda506P1.jpg"
            alt="Rocket launch trail"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative h-[300px] sm:h-[350px] lg:h-[400px]">
          <Image
            src="/portafolio/Soda506/Soda506P2.jpg"
            alt="Rocket launch trail"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative h-[300px] sm:h-[350px] lg:h-[400px]">
          <Image
            src="/portafolio/Soda506/Soda506P3.jpg"
            alt="Rocket launch trail"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative h-[300px] sm:h-[350px] lg:h-[400px]">
          <Image
            src="/portafolio/Soda506/Soda506P4.jpg"
            alt="Rocket launch trail"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default Portafolio;
