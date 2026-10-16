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
          {"\n"}        Aquí encontrarás lo que nos define
          {"\n"}        y aquello en lo que
          {"\n"}        trabajaremos mientras nos regales
          {"\n"}        tu confianza.
          {"\n"}
          {"\n"}        ¿Por qué hablamos de Tkyo como si fuera alguien?
          {"\n"}
          {"\n"}        Porque queremos que sea más que un
          {"\n"}        nombre: una referencia de trabajo bien hecho.
          {"\n"}
          {"\n"}        Nuestro lema:
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
