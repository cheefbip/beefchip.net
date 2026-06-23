
import Card from "../components/Card";
import LucasRow from "../components/LucasRow";
import Typewriter from "../components/Typewriter";

function About() {
    return (
        <>
            <Card>
                <div className=" flex-col items-start gap-4">
                    <Typewriter
                        className="text-3xl font-medium font-roboto-mono text-lime-300 select-none"
                        text='"about me!"'
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
                            <span className="text-md text-cyan-300"> About</span>
                        </code>
                    </div>

                    <div className="numbered-row"></div>

                    <div className="numbered-row text-md font-small text-lime-300">
                        <span>"""</span>
                    </div>

                    <div className="numbered-row text-md font-small text-lime-300">
                        hi, i'm sergio!
                    </div>

                    <div className="numbered-row text-md font-small text-lime-300">
                        i'm a hobbyist, solo game developer and student based in California.
                    </div>

                    <div className="numbered-row text-md font-small text-lime-300">
                        <span>
                            feel free to check out my work or contact me for inquiries!
                        </span>
                    </div>

                    <div className="numbered-row text-md font-small text-lime-300">
                        <span>"""</span>
                    </div>
                </div>
            </Card>
            <LucasRow />
        </>
    );
}

export default About;