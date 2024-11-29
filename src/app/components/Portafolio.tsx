"use client";
import Image from "next/image";
import GitHubProjects from "@/app/components/apiComponents/GitHubProjects";

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
          <div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative h-[400px]">
              <Image
                src="/mainImages/rocket.jpg"
                alt="Rocket launch trail"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/mainImages/Arte.jpeg"
                alt="Rocket launch trail"
                width={600}
                height={500}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
        </div>
      <h2 className="my-2">Algunos aplicaciones en las que trabajamos:</h2> 
        <hr />
      <div className="my-4">
        <GitHubProjects/>
      </div>
    </>
  );
};
export default Portafolio;
