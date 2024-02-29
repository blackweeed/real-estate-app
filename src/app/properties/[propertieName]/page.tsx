import { type Metadata } from "next";
import { getSinglePropertieBySlug } from "@/api/properties";
import { Agent } from "@/components/Agent";
import { GoogleMaps } from "@/components/GoogleMaps";
import { GetInTouch } from "@/components/GetInTouch";
import { formatDate, formatPrice } from "@/app/utils";
import { ImageGallery } from "@/components/ImageGallery";
import { Description } from "@/components/Description";
import { Breadcrumb } from "@/components/Breadcrumb";

type PropertiePageProps = {
	params: { propertieName: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: PropertiePageProps): Promise<Metadata> {
	const slug = params.propertieName;
	const propertie = await getSinglePropertieBySlug(slug);

	return {
		title: propertie?.title,
		description: propertie?.propertieFields?.propertyDescription,
	};
}

export default async function ProperitePage({ params }: PropertiePageProps) {
	const propertie = await getSinglePropertieBySlug(params.propertieName);

	return (
		<main className="mt-32 px-6 lg:px-20">
			<Breadcrumb previousPage={{ title: "Kup", link: "/buy" }} title={propertie?.title ?? ""} />
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
				<h1 className="mt-4 text-2xl font-bold text-blue-600 lg:text-3xl">
					{propertie?.propertieFields?.map?.city}
				</h1>
				<p className="my-1 text-xl font-semibold text-gray-500 lg:text-2xl">
					{formatPrice(propertie?.propertieFields?.price ?? 0)}
				</p>
				<div className="inline-flex flex-wrap gap-2 text-base font-medium text-gray-500 lg:gap-6 lg:text-lg">
					<p>{propertie?.propertieFields?.numberOfRooms} Pokoje</p>
					<p>{propertie?.propertieFields?.numberOfBathrooms} Łazienki</p>
					<p>{propertie?.propertieFields?.numberOfBeds} Łóżka</p>
					<p>Powierzchnia {propertie?.propertieFields?.area}m²</p>
				</div>
			</div>
			<div className="flex flex-col lg:flex-row">
				<div className="basis-3/4">
					<h2 className="mt-6 text-3xl font-bold text-blue-600 lg:text-5xl">Opis nieruchomości</h2>
					<Description description={propertie?.propertieFields?.propertyDescription ?? ""} />
					<div className="mt-6 flex max-w-[900px] flex-col gap-2">
						<h2 className="mb-2 text-3xl font-bold text-blue-600 lg:text-5xl">Podsumowanie</h2>
						<div className="flex-wrap gap-2  text-lg sm:text-xl lg:inline-flex">
							<p className="min-w-[200px] font-semibold lg:min-w-[280px]">Lokalizacja</p>
							<p className="text-base capitalize lg:text-xl">
								{propertie?.propertieFields?.map?.streetAddress}
							</p>
						</div>
						<div className="inline-flex flex-wrap gap-2 text-lg sm:text-xl">
							<p className="min-w-[200px] font-semibold lg:min-w-[280px]">Typ nieruchomości</p>
							<p className="text-base capitalize lg:text-xl">
								{propertie?.propertieFields?.typeOfDevelopment}
							</p>
						</div>
						<div className="inline-flex flex-wrap gap-2 text-lg sm:text-xl">
							<p className="min-w-[200px] font-semibold lg:min-w-[280px]">Dodane</p>
							<p className="text-base sm:text-xl">{formatDate(propertie?.date ?? "")}</p>
						</div>
						<div className="inline-flex flex-wrap gap-2 text-lg sm:text-xl">
							<p className="min-w-[200px] font-semibold lg:min-w-[280px]">Ostatnia aktualizacja</p>
							<p className="text-base sm:text-xl">{formatDate(propertie?.modified ?? "")}</p>
						</div>
					</div>
				</div>
				<div className="mt-5 basis-1/4 lg:mx-auto lg:mt-0">
					<h3 className="text-center text-2xl font-semibold">Ekskluzywni agenci aukcji</h3>
					{propertie?.propertieFields?.relationWithProperties?.nodes.map((item) => {
						return <Agent key={item.slug} slug={item.slug ?? ""} />;
					})}
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
