import WindowCard from "./WindowCard";

function BeefchipRow() {
	return (
		<section className="flex items-stretch w-full items-center gap-8">
			<WindowCard delay={0.8} title="beefchip.net" className="w-full">
				<div className="numbered-rows text-left font-roboto-mono">
					<div className="numbered-row text-md font-small text-red-400">
						<code className="select-text text-md font-roboto-mono">
							from
							<span className="text-md text-cyan-300"> beefchip </span>
							import
							<span className="text-md text-cyan-300"> Website</span>
						</code>
					</div>

					<div className="numbered-row" />

					<p className="numbered-row text-md font-small text-zinc-400">
						<span># the site you're viewing RIGHT NOW !</span>
					</p>

					<div className="numbered-row" />

					<p className="numbered-row text-md font-small text-zinc-400">
						<span># it serves as the backend API for Poly Dash!</span>
					</p>

					<div className="numbered-row"></div>

					<p className="numbered-row text-md font-small text-zinc-400">
						<span>
							# it's open source, feel free to check it out on github! (opens in new tab):
						</span>
					</p>
					<div className="numbered-row">
						<code className="select-text text-md font-roboto-mono">
							<span className="text-yellow-200">print</span>
							<span className="text-zinc-300">(</span>
							<a 
                                href="https://github.com/cheefbip/beefchip.net"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lime-300 hover:text-cyan-300 hover:boxshadow-cyan-100">
								"
								<span className="underline">
									https://github.com/cheefbip/beefchip.net
								</span>
								"
							</a>
							<span className="text-zinc-300">)</span>
						</code>
					</div>
				</div>
			</WindowCard>
		</section>
	);
}

export default BeefchipRow;
