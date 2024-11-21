const Goals = () => {
  return (
    <section className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4 bg-black text-white">
      <div>
        <img
          src="/rocket.jpg" // Cambia por tu imagen
          alt="Rocket launch"
          className="rounded-lg"
        />
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2">Our goals:</h3>
        <p>To innovate and bring efficient solutions for the modern world.</p>
      </div>
    </section>
  );
};

export default Goals;
