import Card from "./Card";

function FeatureRow() {
  return (
    <section className="flex items-stretch w-full items-center gap-8">
      <Card delay={0.4} className="w-2/3">
        <div className="numbered-rows text-left space-y-2 font-roboto-mono">
          <div className="numbered-row text-md font-small text-red-400">
            <code className="select-text text-md font-roboto-mono">
              from
              <span className="text-md text-cyan-300"> beefchip </span>
              import
              <span className="text-md text-cyan-300"> Cat</span>
            </code>
          </div>

          <div className="numbered-row"></div>

          <p className="numbered-row text-md font-small text-zinc-400">
            <span># this is Lucas, my orange tabby! he is two years old.</span>
          </p>

          <div className="numbered-row"></div>

          <div className="numbered-row">
            <code className="select-text text-md font-roboto-mono">
              <span className="text-yellow-200">print</span>
              <span className="text-zinc-300">(</span>
              <span className="text-lime-300">
                "he loves to sniff cologne and likes staring out windows!"
              </span>
              <span className="text-zinc-300">)</span>
            </code>
          </div>

          <div className="numbered-row"></div>

          <div className="numbered-row">
            <code className="select-text text-md font-roboto-mono">
              <span className="text-red-400">class </span>
              <span className="text-cyan-300">Lucas</span>
              <span className="text-zinc-300">(</span>
              <span className="text-cyan-300">Cat</span>
              <span className="text-zinc-300">)</span>
              <span className="text-zinc-50 font-bold">:</span>
            </code>
          </div>

          <div className="numbered-row">
            <code className="select-text text-md font-roboto-mono pl-8">
              <span className="text-red-400">def </span>
              <span className="text-cyan-300">__init__</span>
              <span className="text-zinc-300">(</span>
              <span className="text-teal-200 italic">self</span>
              <span className="text-zinc-300">)</span>
              <span className="text-zinc-50 font-bold">:</span>
            </code>
          </div>

          <div className="numbered-row ">
            <code className="select-text text-md font-roboto-mono pl-16">
              <span className="text-red-400">super</span>
              <span className="text-zinc-300">()</span>
              <span className="text-zinc-50 font-bold">.</span>
              <span className="text-cyan-300">__init__</span>
              <span className="text-zinc-300">()</span>
            </code>
          </div>

          
          <div className="numbered-row">
            <code className="select-text text-md font-roboto-mono pl-16">
              <span className="text-teal-200 italic">self</span>
              <span className="text-zinc-50 font-bold">.</span>
              <span className="text-blue-400">age</span>
              <span className="text-red-400"> = </span>
              <span className="text-yellow-300">2</span>
            </code>
          </div>

          <div className="numbered-row">
            <code className="select-text text-md font-roboto-mono pl-16">
              <span className="text-teal-200 italic">self</span>
              <span className="text-zinc-50 font-bold">.</span>
              <span className="text-blue-400">type</span>
              <span className="text-red-400"> = </span>
              <span className="text-lime-300">"tabby"</span>
            </code>
          </div>

          <div className="numbered-row">
            <code className="select-text text-md font-roboto-mono pl-16">
              <span className="text-teal-200 italic">self</span>
              <span className="text-zinc-50 font-bold">.</span>
              <span className="text-blue-400">interests</span>
              <span className="text-red-400"> = </span>
              <span className="text-zinc-300">[</span>
            </code>
          </div>

          <div className="numbered-row">
            <code className="select-text text-md font-roboto-mono pl-24">
              <span className="text-lime-300">"sunbathing"</span>
              <span className="text-zinc-50 font-bold">,</span>
            </code>
          </div>

          <div className="numbered-row">
            <code className="select-text text-md font-roboto-mono pl-24">
              <span className="text-lime-300">"window gazing"</span>
              <span className="text-zinc-50 font-bold">,</span>
            </code>
          </div>

          <div className="numbered-row">
            <code className="select-text text-md font-roboto-mono pl-24">
              <span className="text-lime-300">"sniffing perfume"</span>
              <span className="text-zinc-50 font-bold">,</span>
            </code>
          </div>

          <div className="numbered-row">
            <code className="select-text text-md font-roboto-mono pl-24">
              <span className="text-lime-300">"sleeping"</span>
            </code>
          </div>

          <div className="numbered-row">
            <code className="select-text text-md font-roboto-mono pl-16">
              <span className="text-zinc-300">]</span>
            </code>
          </div>

          <div className="numbered-row"></div>

        </div>
      </Card>

      <Card delay={0.6} className="w-1/3">
        <img
          src="/Lucas.webp"
          alt="Lucas, the cat!"
          draggable={false}
          className="h-full w-auto rounded-md object-cover select-none"
        />
      </Card>
    </section>
  );
}

export default FeatureRow;
