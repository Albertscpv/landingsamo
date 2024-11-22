const CodeComponent = () => {
  return (
    <div className="bg-[#1E1E1E] rounded-lg p-6 font-mono text-sm overflow-x-auto">
      <pre className="text-white">
        <code>
          <span className="text-[#C586C0]">const</span>{" "}
          <span className="text-[#DCDCAA]">Greetings</span> = () =&gt; {"{"}
          {"\n"}  <span className="text-[#C586C0]">return</span> (
          {"\n"}    {"<>"}
          {"\n"}      {"<h2>"}Welcome to my HQ{"</h2>"}
          {"\n"}      {"<p>"}
          {"\n"}        Here you will see how we work and the future
          {"\n"}        projects that we will develop to make efficient your
          {"\n"}        life.
          {"\n"}      {"</p>"}
          {"\n"}      {"<span>"}
          {"\n"}        Innovation in solutions, Efficiency in results.
          {"\n"}      {"</span>"}
          {"\n"}    {"</>"}
          {"\n"}  )
          {"\n"}{"}"}
        </code>
      </pre>
      <p className="mt-8 text-gray-400 italic">Can you find the mistake?</p>
    </div>
  );
};
export default CodeComponent;
