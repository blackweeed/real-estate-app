import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type previousPageProps = {
	title: string;
	link: string;
};

export const Breadcrumb = ({
	title,
	previousPage,
}: {
	title: string;
	previousPage: previousPageProps;
}) => {
	return (
		<nav className="my-6 font-medium">
			<ul className="flex items-center gap-2 text-sm lg:gap-4 lg:text-base">
				<Link className="text-blue-600" href={"/"}>
					Home
				</Link>
				<ChevronRight size={18} />
				<Link className="text-blue-600" href={previousPage.link}>
					{previousPage.title}
				</Link>
				<ChevronRight size={18} />
				<li className="truncate font-normal">{title}</li>
			</ul>
		</nav>
	);
};
