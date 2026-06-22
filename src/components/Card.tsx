import { motion } from "framer-motion";

type CardProps = {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
};

function Card({
  children,
  className = "",
  delay = 0,
}: CardProps) {
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
      {children}
    </motion.div>
  );
}

export default Card;