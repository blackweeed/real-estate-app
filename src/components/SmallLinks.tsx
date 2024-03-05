import Link from "next/link";
import { oferts, aboutUs, help } from "@/app/constants";

export const SmallLinks = () => {
	const headLinkStyles = "mb-6 mt-6 text-lg font-semibold text-gray-500 lg:mt-0";
	const linkStyles = "font-semibold text-blue-600 hover:opacity-60";

	return (
		<>
			<div className="mt-8 lg:mt-0">
				<h4 className={headLinkStyles}>Oferty</h4>
				<ul className="flex flex-col gap-3">
					{oferts.map((item) => (
						<Link key={item} className={linkStyles} href={``}>
							{item}
						</Link>
					))}
				</ul>
			</div>
			<div>
				<h4 className={headLinkStyles}>O nas</h4>
				<ul className="flex flex-col gap-3">
					{aboutUs.map((item) => (
						<Link key={item} className={linkStyles} href={``}>
							{item}
						</Link>
					))}
				</ul>
			</div>
			<div>
				<h4 className={headLinkStyles}>Pomoc</h4>
				<ul className="flex flex-col gap-3">
					{help.map((item) => (
						<Link key={item} className={linkStyles} href={``}>
							{item}
						</Link>
					))}
				</ul>
			</div>
		</>
	);
};
