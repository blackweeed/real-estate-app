import { cookies } from "next/headers";
import { LogoutButton } from "./LogoutButton";
import { Avatar } from "./Avatar";
import { Logo } from "./Logo";
import { ActiveLink } from "./ActiveLink";
import { getCurrentUser } from "@/api/user";
import { links } from "@/app/constants";

export const NavbarDashboard = async () => {
	const cookieStore = cookies();
	const res = cookieStore.get("OurSiteJWT");
	const token = res?.value;

	if (token) {
		const user = await getCurrentUser(token);
		return (
			<nav className={`sticky top-0 z-40 flex h-20 w-full bg-white px-8  lg:px-20 `}>
				<div className="flex w-full items-center justify-between">
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
