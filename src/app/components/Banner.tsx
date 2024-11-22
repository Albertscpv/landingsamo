import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-72 sm:h-96 w-full">
      <Image
        src="/3Hermanos.jpg"
        alt="Space galaxy banner"
        fill
        className="object-cover rounded-lg"
      />
      {/* <div className="absolute top-4 right-4 flex gap-2">
          Posibles funciones extra
      </div> */}
    </div>
  );
};

export default Banner;
