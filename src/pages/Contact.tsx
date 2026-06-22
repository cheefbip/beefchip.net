
import BeefchipRow from "../components/BeefchipRow";
import Card from "../components/Card";
import PolyDashRow from "../components/PolyDashRow";
import Typewriter from "../components/Typewriter";

function About() {
    return (
        <>
            <Card>
                <div className=" flex-col items-start gap-4">
                    <Typewriter
                        className="text-3xl font-medium font-roboto-mono text-lime-300 select-none"
                        text='"contact me!"'
                    />
                </div>
            </Card>
            <Card delay={0.2}>
                <div className="numbered-rows text-left space-y-2 font-roboto-mono">
                    <div className="numbered-row text-md font-small text-red-400">
                        <code className="select-text text-md font-roboto-mono">
                            from
                            <span className="text-md text-cyan-300"> beefchip </span>
                            import
                            <span className="text-md text-cyan-300"> Contact</span>
                        </code>
                    </div>

                    <div className="numbered-row"></div>

                    <div className="numbered-row text-md font-small text-lime-300">
                        <span>"""</span>
                    </div>

                    <div className="numbered-row text-md font-small text-lime-300">
                        if you have any important questions, feel free to hit up my mail below.
                    </div>

                    <div className="numbered-row text-md font-small text-lime-300">
                        i may not respond, but i do read everything!:
                    </div>
                    <div className="numbered-row text-md font-small text-lime-300">
                        <span>"""</span>
                    </div>

					<div className="numbered-row">
						<code className="select-text text-md font-roboto-mono">
							<span className="text-yellow-200">print</span>
							<span className="text-zinc-300">(</span>
							<a 
                                href="mailto:sergio@beefchip.net"
                                className="text-lime-300 hover:text-cyan-300 hover:boxshadow-cyan-100">
								"
								<span className="underline">
									sergio@beefchip.net
								</span>
								"
							</a>
							<span className="text-zinc-300">)</span>
						</code>
					</div>
                </div>
            </Card>
        </>
    );
}

export default About;