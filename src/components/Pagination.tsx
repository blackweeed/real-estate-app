import Link from "next/link";

export const Pagination = ({ pageNumber, page }: { pageNumber: string; page: number }) => {
	return (
		<Link
			href={`/buy/${page}`}
			className={`${
				Number(pageNumber) === page && "bg-black text-white"
			} flex h-14 w-14 items-center justify-center rounded-full border border-black`}
		>
			{page}
		</Link>
	);
};
