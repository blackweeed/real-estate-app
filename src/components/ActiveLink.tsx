"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { type Route } from "next";
import { twMerge } from "tailwind-merge";

export const ActiveLink = ({ href, children }: { href: Route; children: ReactNode }) => {
	const pathname = usePathname();
	const isActive = pathname === href;
	return (
		<Link
			href={href}
			className={twMerge(`font-medium hover:opacity-70`, isActive && "font-semibold text-blue-600")}
		>
			{children}
		</Link>
	);
};
