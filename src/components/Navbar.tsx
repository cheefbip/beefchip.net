import { NavLink } from "react-router-dom";

function Navbar() {
	const tabClass = ({ isActive }: { isActive: boolean }) =>
		[
			"flex-h px-8 py-2 border-r border-zinc-700 text-lg font-roboto-mono",
			isActive
				? "bg-zinc-800 text-zinc-300"
				: "bg-zinc-900 text-zinc-600 hover:bg-zinc-800 hover:text-zinc-500",
		].join(" ");

	return (
		<nav
			className="
        bg-zinc-800
        h-10
        fixed
        w-full      
        border-b-0
        text-zinc-700
        text-left
        flex
        z-50
        items-stretch
        shadow-[0px_8px_0px_rgba(0,0,0,0.25)]"
		>
			<NavLink to="/" className={tabClass}>
				Home
			</NavLink>

			<NavLink to="/about" className={tabClass}>
				About
			</NavLink>

			<NavLink to="/work" className={tabClass}>
				Work
			</NavLink>

			<NavLink to="/contact" className={tabClass}>
				Contact
			</NavLink>
		</nav>
	);
}

export default Navbar;
