import { ChevronRight, Facebook, Instagram, Twitch, Twitter, UnlockKeyhole } from "lucide-react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Links } from "./Links";
import { SmallLinks } from "./SmallLinks";

export const Footer = () => {
	const icons = [
		{ link: "/facebook", icon: <Facebook /> },
		{ link: "/instagram", icon: <Instagram /> },
		{ link: "/twiter", icon: <Twitter /> },
		{ link: "/twith", icon: <Twitch /> },
	];

	return (
		<>
			<footer className="bg-white px-6 py-10 lg:flex lg:justify-around lg:px-20 ">
				<div className="mb-8 flex flex-row gap-4 lg:mb-0 lg:flex-col">
					<button className="flex w-48 items-center rounded-full bg-blue-600 px-6 py-2.5 font-medium text-white">
						<span className="w-20 lg:w-36">Dołącz</span> <ChevronRight />
					</button>
					<button className="flex w-48 items-center rounded-full border bg-white px-6 py-2.5 font-medium text-blue-600">
						<span className="w-20 lg:w-36">Login</span> <UnlockKeyhole />
					</button>
				</div>
				<div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-x-20">
					<Links />
					<SmallLinks />
				</div>
			</footer>
			<div className="px-20 py-10">
				<div className="h-[1px] w-full bg-gray-400 px-6 lg:px-20"></div>
				<div className="flex flex-col items-center justify-between gap-2 py-10 lg:flex-row">
					<Logo />
					<p className="text-sm font-semibold text-gray-500">
						© 2024 Twoje Nieruchomości, Inc. Prawa zarezerwowane.
					</p>
					<div>
						<ul className="mt-3 flex gap-4 lg:mt-0">
							{icons.map((icon) => {
								return (
									<Link
										key={icon.link}
										className="rounded-full border border-gray-500 p-4 hover:border-blue-600 hover:text-blue-600"
										href={icon.link}
									>
										{icon.icon}
									</Link>
								);
							})}
						</ul>
					</div>
				</div>
				<div className="h-[1px] w-full bg-gray-400 px-6 lg:px-20"></div>
			</div>
		</>
	);
};
