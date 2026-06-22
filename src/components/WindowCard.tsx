import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type WindowCardProps = {
	title?: React.ReactNode;
	children?: React.ReactNode;
	className?: string;
	delay?: number;
};

function WindowCard({ children, title, className = "", delay = 0 }: WindowCardProps) {
	return (
		<motion.div
			initial={{
				opacity: 0,
				y: -8,
			}}
			animate={{
				opacity: 1,
				y: 0,
			}}
			transition={{
				duration: 0.3,
				delay,
				ease: "easeOut",
			}}
			className={`
                overflow-hidden
                border
                rounded-lg
                bg-[#202227]
                border-zinc-500
                shadow-[0px_8px_0px_rgba(0,0,0,0.25)]
                p-2
                mt-4
                ${className}
            `}
		>


            <div className="
				flex
				items-center
				justify-between
				border-b-1 bg-zinc-900 px-4 py-2 border-zinc-500 mb-2 -mt-2 -mx-2 shadow-[0px_8px_16px_rgba(0,0,0,.25)]
				text-zinc-400
				text-2xl
				font-roboto-mono
			">
				{title || "Window"}
					<span>
						<span className="
							rounded-full
							inline-block
							w-4 h-4
							bg-yellow-300
							border border-yellow-100
							shadow-[0_0_6px_rgba(253,224,71,0.35)]
							hover:shadow-[0_0_12px_rgba(253,224,71,0.8)]
							transition-all
						" />
						<span className="
							rounded-full
							inline-block
							bg-cyan-400
							ml-2
							w-4
							h-4
							border-cyan-300
							border-1
						" />
						<span className="
							rounded-full
							inline-block
							bg-red-400
							ml-2
							w-4
							h-4
							border-red-300
							border-1
						" />
					</span>
			</div>

			{children}
		</motion.div>
	);
}

export default WindowCard;
