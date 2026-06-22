import { useEffect, useMemo, useState } from "react";
import { Howl } from "howler";

interface TypewriterProps {
	text: string;
	speed?: number;
	className?: string;
}

const keypressSound = new Howl({
	src: ["/sounds/keypress.mp3"],
	volume: 0.5,
});

export default function Typewriter({
	text,
	speed = 75,
	className = "",
}: TypewriterProps) {
	const [count, setCount] = useState(0);

	// Returns an array containing all identified unicode characters in {text}
	const graphemes = useMemo(() => {
		const segmenter = new Intl.Segmenter(undefined, {
			granularity: "grapheme",
		});

		return [...segmenter.segment(text)].map((segment) => segment.segment);
	}, [text]);

	useEffect(() => {
		setCount(0);

		let cancelled = false;
		let timeoutId: number;

		const typeNext = (index: number) => {
			if (cancelled || index >= graphemes.length) {
				return;
			}

			const id = keypressSound.play();
			keypressSound.rate(0.8 + Math.random() * 0.4, id);
			keypressSound.volume(0.35 + Math.random() * 0.3, id);

			setCount(index + 1);

			let variance = 0.8 + Math.random() * 0.4;

			if (graphemes[index] == " ") {
				variance *= 3;
			} else if (Math.random() < 0.1) {
				variance *= 2;
			}

			const delay = speed * variance;

			timeoutId = window.setTimeout(() => {
				typeNext(index + 1);
			}, delay);
		};

		timeoutId = window.setTimeout(() => {
			typeNext(0);
		}, speed);

		return () => {
			cancelled = true;
			clearTimeout(timeoutId);
		};
	}, [graphemes, speed]);

	return (
		<span className={`font-mono ${className}`}>
			{graphemes.slice(0, count).join("")}
			<span className="typewriter-cursor text-zinc-50">|</span>
		</span>
	);
}
