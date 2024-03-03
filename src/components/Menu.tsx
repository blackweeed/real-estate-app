import React, { useEffect } from "react";
import { ChevronRight, Phone, Search, UnlockKeyhole, X } from "lucide-react";
import { Logo } from "./Logo";
import { Links } from "./Links";
import { SmallLinks } from "./SmallLinks";
import { disableScroll, enableScroll } from "@/app/utils";

type MenuProps = {
	setToggle: (toggle: boolean) => void;
};

export const Menu = ({ setToggle }: MenuProps) => {
	useEffect(() => {
		disableScroll();

		return () => enableScroll();
	}, []);

	return (
		<div className="z-50 h-[90%] w-[94%] overflow-y-scroll rounded-3xl bg-white p-10 lg:h-[94%]">
			<nav className="flex justify-between">
				<Logo setToggle={setToggle} />
				<div className="flex items-center gap-5">
					<button className="hidden w-56 items-center rounded-full border-[1.7px] bg-white px-6 py-2.5 font-semibold text-blue-600 lg:flex">
						<span className="w-36">+48 788 788 788 </span> <Phone size={21} strokeWidth={2.5} />
					</button>
					<button className="flex items-center rounded-full bg-blue-600 px-2.5 py-2.5 font-semibold text-white lg:w-56 lg:px-6">
						<span className="hidden w-36 lg:block">Znajdź dom</span>{" "}
						<Search size={21} strokeWidth={2.5} />
					</button>
					<button
						onClick={() => setToggle(false)}
						className="flex items-center justify-center rounded-full border-[1.7px] p-2.5"
					>
						<X />
					</button>
				</div>
			</nav>
			<div className="mt-8 flex flex-col justify-around gap-4">
				<div className="block justify-around lg:flex">
					<Links setToggle={setToggle} />
					<SmallLinks />
				</div>
				<div className="mr-44 mt-4 flex flex-col justify-end gap-3 lg:mt-0 lg:flex-row lg:gap-8">
					<button className="flex w-48 items-center rounded-full bg-blue-600 px-6 py-2.5 font-medium text-white">
						<span className="w-36">Dołącz do nas</span> <ChevronRight />
					</button>
					<button className="flex w-48 items-center rounded-full border bg-white px-6 py-2.5 font-medium text-blue-600">
						<span className="w-36">Agent Login</span> <UnlockKeyhole />
					</button>
				</div>
			</div>
		</div>
	);
};
