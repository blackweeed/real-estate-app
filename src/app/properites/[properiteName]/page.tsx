import { ChevronRight } from "lucide-react";
import { type Metadata } from "next";
import Link from "next/link";
import { getSinglePropertieBySlug } from "@/api/properties";
import { Agent } from "@/components/Agent";
import { GoogleMaps } from "@/components/GoogleMaps";
import { GetInTouch } from "@/components/GetInTouch";
import { formatDate, formatPrice } from "@/app/utils";
import { ImageGallery } from "@/components/ImageGallery";
import { PropertieDescription } from "@/components/PropertieDescription";

type PropertiePageProps = {
	params: { properiteName: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: PropertiePageProps): Promise<Metadata> {
	const slug = params.properiteName;
	const propertie = await getSinglePropertieBySlug(slug);

	return {
		title: propertie?.title,
		description: propertie?.propertieFields?.propertyDescription,
	};
}

export default async function ProperitePage({ params }: PropertiePageProps) {
	const propertie = await getSinglePropertieBySlug(params.properiteName);

	return (
		<main className="mt-32 px-6 lg:px-20">
			<nav className="my-6 font-medium">
				<ul className="flex items-center gap-2 text-sm lg:gap-4 lg:text-base">
					<Link className="text-blue-600" href={"/"}>
						Strona Główna
					</Link>
					<ChevronRight size={18} />
					<Link className="text-blue-600" href={"/buy"}>
						Kup
					</Link>
					<ChevronRight size={18} />
					<li className="font-normal">{propertie?.title}</li>
				</ul>
			</nav>
			<div className="photoGallery">
				{propertie?.propertieFields?.images?.nodes.map((image, index) => {
					return (
						<ImageGallery
							key={index}
							image={image.mediaItemUrl}
							images={propertie.propertieFields?.images?.nodes}
							index={index}
							buyOrLease={propertie.propertieFields?.buyOrLease}
						/>
					);
				})}
			</div>
			<div>
				<h1 className="mt-4 text-3xl font-bold text-blue-600">
					{propertie?.propertieFields?.map?.city}
				</h1>
				<p className="my-1 text-2xl font-semibold text-gray-500">
					{formatPrice(propertie?.propertieFields?.price ?? 0)}
				</p>
				<div className="inline-flex gap-6 text-lg font-medium text-gray-500">
					<p>{propertie?.propertieFields?.numberOfRooms} Pokoje</p>
					<p>Powierzchnia {propertie?.propertieFields?.area}m²</p>
				</div>
			</div>
			<div className="flex flex-col lg:flex-row">
				<div className="basis-3/4">
					<PropertieDescription
						propertieDescription={propertie?.propertieFields?.propertyDescription ?? ""}
					/>
					<div className="mt-6 flex max-w-[900px] flex-col gap-2">
						<h2 className="mb-2 text-4xl font-bold text-blue-600 lg:text-5xl">Podsumowanie</h2>
						<div className="inline-flex gap-2 text-lg sm:text-xl">
							<p className="min-w-[200px] font-semibold lg:min-w-[280px]">Lokalizacja</p>
							<p className="text-base capitalize lg:text-xl">
								{propertie?.propertieFields?.map?.streetAddress}
							</p>
						</div>
						<div className="inline-flex gap-2 text-lg sm:text-xl">
							<p className="min-w-[200px] font-semibold lg:min-w-[280px]">Typ nieruchomości</p>
							<p className="text-base capitalize lg:text-xl">
								{propertie?.propertieFields?.typeOfDevelopment}
							</p>
						</div>
						<div className="inline-flex gap-2 text-lg sm:text-xl">
							<p className="min-w-[200px] font-semibold lg:min-w-[280px]">Dodane</p>
							<p className="text-base sm:text-xl">{formatDate(propertie?.date ?? "")}</p>
						</div>
						<div className="inline-flex gap-2 text-lg sm:text-xl">
							<p className="min-w-[200px] font-semibold lg:min-w-[280px]">Ostatnia aktualizacja</p>
							<p className="text-base sm:text-xl">{formatDate(propertie?.modified ?? "")}</p>
						</div>
					</div>
				</div>
				<div className="mx-auto mt-5 basis-1/4 lg:mt-0">
					<h3 className="text-center text-2xl font-semibold">Ekskluzywni agenci aukcji</h3>
					<div>
						{propertie?.propertieFields?.relationWithProperties?.nodes.map((item) => {
							return <Agent key={item.slug} slug={item.slug ?? ""} />;
						})}
					</div>
				</div>
			</div>
			<GoogleMaps
				latitude={propertie?.propertieFields?.map?.latitude ?? 0}
				longitude={propertie?.propertieFields?.map?.longitude ?? 0}
			/>
			<GetInTouch />
		</main>
	);
}
