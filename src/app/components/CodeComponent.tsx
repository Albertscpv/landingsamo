const CodeComponent = () => {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[#0f0f15] overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)]">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-xs text-gray-500">saludos.tsx</span>
      </div>
      <pre className="p-6 font-mono text-sm overflow-x-auto text-white">
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
          {"\n"}        ¿Por qué me refiero a Tkyo como si fuese alguien?
          {"\n"}
          {"\n"}        Hemos decidido que haremos de Tkyo algo más que un
          {"\n"}        simple nombre, lo haremos una referencia y
          {"\n"}
          {"\n"}        Como lo dice la frase:
          {"\n"}      {"</p>"}
          {"\n"}      {"<span>"}
          {"\n"}        <span className="text-[var(--accent)]">Noblesse Oblige</span>
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
