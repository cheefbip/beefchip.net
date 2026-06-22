import Card from "./Card";
import WindowCard from "./WindowCard";

function PolyDashRow() {
	return (
		<section className="flex items-stretch w-full items-center gap-8">
			<WindowCard delay={0.4} title="Poly Dash" className="w-2/3">
				<div className="numbered-rows text-left font-roboto-mono">
					<div className="numbered-row text-md font-small text-red-400">
						<code className="select-text text-md font-roboto-mono">
						from
						<span className="text-md text-cyan-300"> beefchip </span>
						import
						<span className="text-md text-cyan-300"> Game</span>
						</code>
					</div>

					<div className="numbered-row" />

					<div className="numbered-row text-md font-small text-lime-300">
						<span>"""</span>
					</div>

					<div className="numbered-row text-md font-small text-lime-300">
						a musically oriented platformer where players, jump, fly, and dash to the music!
					</div>

					<div className="numbered-row text-md font-small text-lime-300">
						play other people's levels, or create your own!
					</div>

					<div className="numbered-row text-md font-small text-lime-300">
						<span>"""</span>
					</div>

					<div className="numbered-row" />
					
					<p className="numbered-row text-md font-small text-zinc-400">
						<span># millions of user-made levels!</span>
					</p>
					
					<div className="numbered-row" />
					
					<p className="numbered-row text-md font-small text-zinc-400">
						<span># a robust level editor with 100+ objects to build with!</span>
					</p>
					
					<div className="numbered-row" />
					
					<p className="numbered-row text-md font-small text-zinc-400">
						<span># play by yourself or with friends!</span>
					</p>
					
					<div className="numbered-row" />
					
					<p className="numbered-row text-md font-small text-zinc-400">
						<span># playable on all platforms (PC, console, mobile)</span>
					</p>
					
					<div className="numbered-row" />
					
					<p className="numbered-row text-md font-small text-zinc-400">
						<span># play the game here! (opens in new tab):</span>
					</p>

					<div className="numbered-row">
						<code className="select-text text-md font-roboto-mono">
							<span className="text-yellow-200">print</span>
							<span className="text-zinc-300">(</span>
							<a 
                                href="https://www.roblox.com/games/15282120493/Poly-Dash"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lime-300 hover:text-cyan-300 hover:boxshadow-cyan-100">
								"
								<span className="underline">
									https://www.roblox.com/games/15282120493/Poly-Dash
								</span>
								"
							</a>
							<span className="text-zinc-300">)</span>
						</code>
					</div>
				</div>
			</WindowCard>

			<Card delay={0.6} className="w-1/2">
				<img
					src="/PolyDashThumbnail.webp"
					alt="Poly Dash, the game!"
					draggable={false}
					className="h-full w-auto rounded-md object-cover select-none"
				/>
			</Card>
		</section>
	);
}

export default PolyDashRow;
