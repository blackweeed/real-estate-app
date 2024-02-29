import Link from "next/link";

export const Pagination = ({ pageNumber, page }: { pageNumber: string; page: number }) => {
	return (
		<Link
			href={`/buy/${page}`}
			className={`${
				Number(pageNumber) === page && "bg-black text-white"
			} flex h-12 w-12 items-center justify-center rounded-full border border-black lg:h-14 lg:w-14`}
		>
			{page}
		</Link>
	);
};
