import Card from "../components/Card";
import Typewriter from "../components/Typewriter";

export default function NotFound() {
  return (
    <>
        <Card>
            <div className=" flex-col items-start gap-4">
                <Typewriter
                    className="text-3xl font-medium font-roboto-mono text-lime-300 select-none"
                    text="&quot;the page you're looking for doesn't exist!&quot;" 
                    speed={60}
                />
            </div>
        </Card>
    </>
  );
}