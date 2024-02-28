import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/app/utils";

type SearchBarPropertieProps = {
	slug: string;
	image: string;
	price: number;
	title: string;
};

export const SearchBarPropertie = ({ slug, image, price, title }: SearchBarPropertieProps) => {
	return (
		<Link
			href={`/properties/${slug}`}
			key={slug}
			className="flex flex-wrap items-center gap-3 hover:opacity-70 lg:gap-6 "
		>
			<div className="relative h-12 w-20 overflow-hidden rounded-md lg:h-16 lg:w-24">
				<Image className="object-cover" fill src={image} alt="" />
			</div>
			<div>
				<p className="text-sm font-semibold lg:text-lg">{formatPrice(price ?? 0)}</p>
				<p>{title}</p>
			</div>
		</Link>
	);
};
