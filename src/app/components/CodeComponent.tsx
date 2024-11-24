const CodeComponent = () => {
  return (
    <div className="bg-[#1E1E1E] rounded-lg p-6 font-mono text-sm overflow-x-auto">
      <pre className="text-white">
        <code>
          <span className="text-[#C586C0]">const</span>{" "}
          <span className="text-[#DCDCAA]">Saludos</span> = () =&gt; {"{"}
          {"\n"}  <span className="text-[#C586C0]">return</span> (
          {"\n"}    {"<>"}
          {"\n"}      {"<h2>"}Saludos a todos, {"</h2>"}
          {"\n"}      {"<p>"}
          {"\n"}        En este lugar encontrarás las cosas que nos identifican 
          {"\n"}        y por lo que 
          {"\n"}        estaremos trabajando durante el tiempo que decidan 
          {"\n"}        darme su confianza.
          {"\n"}        
          {"\n"}        ¿Porqué me refiero a Samo como si fuese alguien?
          {"\n"}        
          {"\n"}        Hemos decidido que haremos de Samo algo más que un 
          {"\n"}        simple nombre, lo haremos una referencia y 
          {"\n"}        
          {"\n"}        Como lo dice la  frase: 
          {"\n"}      {"</p>"}
          {"\n"}      {"<span>"}
          {"\n"}        Noblesse Oblige
          {"\n"}      {"</span>"}
          {"\n"}      Usa tus fortalezas, para ayudar a otros.
          {"\n"}    {"</>"}
          {"\n"}  )
          {"\n"}{"}"}
        </code>
      </pre>
    </div>
  );
};
export default CodeComponent;
