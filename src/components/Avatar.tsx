import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Avatar = ({ className }: { className: string }) => {
	return (
		<Link href="/dashboard" className="relative block h-10 w-10 overflow-hidden  rounded-full p-2">
			<Image
				fill
				src="/images/default-avatar.png"
				alt="default avatar"
				className="overflow-hidden object-cover"
			/>
		</Link>
	);
};
