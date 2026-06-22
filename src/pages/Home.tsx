
import Card from "../components/Card";
import Typewriter from "../components/Typewriter";

function Home() {
    return (
        <>
            <Card>
                <div className=" flex-col items-start gap-4">
                    <Typewriter
                        className="text-3xl font-medium font-roboto-mono text-lime-300 select-none"
                        text='"welcome to my website! 😎"'
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
                            <span className="text-md text-cyan-300"> Home</span>
                        </code>
                    </div>

                    <div className="numbered-row"></div>

                    <div className="numbered-row text-md font-small text-lime-300">
                        <span>"""</span>
                    </div>

                    <div className="numbered-row text-md font-small text-lime-300">
                        hi, welcome!!
                    </div>

                    <div className="numbered-row text-md font-small text-lime-300">
                        
                    </div>

                    <div className="numbered-row text-md font-small text-lime-300">
                        <span>
                        this website is currently under construction, but feel free to take a look around!
                        </span>
                    </div>

                    <div className="numbered-row text-md font-small text-lime-300">
                        <span>"""</span>
                    </div>
                </div>
            </Card>
        </>
    );
}

export default Home;