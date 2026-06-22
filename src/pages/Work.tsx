
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
                        text='"my projects"'
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
                            <span className="text-md text-cyan-300"> Work</span>
                        </code>
                    </div>

                    <div className="numbered-row"></div>

                    <div className="numbered-row text-md font-small text-lime-300">
                        <span>"""</span>
                    </div>

                    <div className="numbered-row text-md font-small text-lime-300">
                        the following are projects that i've worked on in the past
                    </div>

                    <div className="numbered-row text-md font-small text-lime-300">
                        
                    </div>

                    <div className="numbered-row text-md font-small text-lime-300">
                        click the links below to visit them!
                    </div>

                    <div className="numbered-row text-md font-small text-lime-300">
                        <span>"""</span>
                    </div>
                </div>
            </Card>

            <PolyDashRow />

            <BeefchipRow />
        </>
    );
}

export default About;