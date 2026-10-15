import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-72 sm:h-[26rem] w-full overflow-hidden">
      <Image
        src="/mainImages/3Hermanos.jpg"
        alt="Banner de Tkyo"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/50 to-transparent" />
      <div className="absolute bottom-8 left-6 md:left-12">
        <p className="font-mono text-sm text-[var(--accent)] mb-2">$ ./bienvenidos</p>
        <h1 className="font-mono text-5xl sm:text-7xl font-bold tracking-tight">
          Tkyo<span className="text-[var(--accent)]">.</span>
        </h1>
        <p className="mt-2 text-gray-300 max-w-md">
          Identidad digital para emprendedores. Noblesse oblige.
        </p>
      </div>
    </div>
  );
};

export default Banner;
