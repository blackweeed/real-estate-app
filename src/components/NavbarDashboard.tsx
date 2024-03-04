import { cookies } from "next/headers";
import { LogoutButton } from "./LogoutButton";
import { Logo } from "./Logo";
import { ActiveLink } from "./ActiveLink";
import { getCurrentUser } from "@/api/user";
import { Avatar } from "./Avatar";

export const NavbarDashboard = async () => {
	const links = [
		{ href: "/buy", label: "Kup" },
		{ href: "/rent", label: "Wynajmij" },
		{ href: "/sell", label: "Sprzedaj" },
		{ href: "/agents", label: "Agenci" },
	];

	const cookieStore = cookies();
	const res = cookieStore.get("OurSiteJWT");
	const token = res?.value;

	if (token) {
		const user = await getCurrentUser(token);
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
							<Avatar className="" />
							<p>
								{user?.firstName} {user?.lastName}
							</p>
							<LogoutButton />
						</div>
					</div>
				</div>
			</nav>
		);
	}
};
