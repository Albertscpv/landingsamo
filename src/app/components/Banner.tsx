import Image from "next/image"
const Banner = () => {
    return(
        <div className="relative h-[300px] w-full">
        <Image
          src="/3Hermanos.jpg"
          alt="Space galaxy banner"
          width={1200}
          height={300}
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute top-4 right-4 flex gap-2">
            Posibles funciones extra
        </div> */}
      </div>
    )
}
export default Banner;