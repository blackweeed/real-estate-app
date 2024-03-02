import { Logo } from "./Logo";
import { ActiveLink } from "./ActiveLink";
import { ChevronDown } from "lucide-react";

export const NavbarDashboard = () => {
	const links = [
		{ href: "/buy", label: "Kup" },
		{ href: "/rent", label: "Wynajmij" },
		{ href: "/sell", label: "Sprzedaj" },
		{ href: "/agents", label: "Agenci" },
	];

	return (
		<nav
			className={`sticky top-0 z-40 mx-auto mt-4 w-full rounded-full bg-white px-8 py-4  lg:px-20 `}
		>
			<div className="flex items-center justify-between">
				<Logo />
				<div className="flex items-center gap-2 lg:gap-4 ">
					<div className="hidden gap-4 lg:flex">
						{links.map((link) => (
							<ActiveLink key={link.label} href={link.href}>
								{link.label}
							</ActiveLink>
						))}
					</div>
					<div className="ml-2 flex items-center gap-2">
						<div className="h-10 w-10 rounded-full bg-gray-200"></div>
						<p>Andrzej Wajda</p>
						<ChevronDown />
					</div>
				</div>
			</div>
		</nav>
	);
};
