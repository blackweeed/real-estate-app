import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { getSinglePropertieBySlug } from "@/api/properties";
import { Agent } from "@/components/Agent";
import {GoogleMaps} from "@/components/GoogleMaps";
import { GetInTouch } from "@/components/GetInTouch";
import { formatDate, formatPrice } from "@/app/utils";
import { ImageGallery } from "@/components/ImageGallery";
import { PropertieDescription } from "@/components/PropertieDescription";

export default async function ProperitePage({
  params,
}: {
  params: { properiteName: string };
}) {
  const propertie = await getSinglePropertieBySlug(params.properiteName);

  return (
    <main className="mt-32 px-6 lg:px-20">
      <nav className="my-6 font-medium">
        <ul className="flex gap-2 lg:gap-4 items-center text-sm lg:text-base">
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
      <div className="grid lg:gap-10 grid-cols-gallery grid-rows-gallery [&>*:first-child]:row-span-2">
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
        <h1 className="text-3xl font-bold text-blue-600 mt-4">
          {propertie?.propertieFields?.map?.city}
        </h1>
        <p className="text-2xl text-gray-500 font-semibold my-1">
          {formatPrice(propertie?.propertieFields?.price ?? 0)}
        </p>
        <div className="inline-flex gap-6 text-lg text-gray-500 font-medium">
          <p>{propertie?.propertieFields?.numberOfRooms} Pokoje</p>
          <p>Powierzchnia {propertie?.propertieFields?.area}m²</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="basis-3/4">
          <PropertieDescription
            propertieDescription={
              propertie?.propertieFields?.propertyDescription ?? ""
            }
          />
          <div className="mt-6 max-w-[900px] flex flex-col gap-2">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
              Podsumowanie
            </h2>
            <div className="inline-flex gap-2 text-lg sm:text-xl">
              <p className="font-semibold min-w-[200px] lg:min-w-[280px]">
                Lokalizacja
              </p>
              <p className="capitalize text-base lg:text-xl">
                {propertie?.propertieFields?.map?.streetAddress}
              </p>
            </div>
            <div className="inline-flex gap-2 text-lg sm:text-xl">
              <p className="font-semibold min-w-[200px] lg:min-w-[280px]">
                Typ nieruchomości
              </p>
              <p className="capitalize text-base lg:text-xl">
                {propertie?.propertieFields?.typeOfDevelopment}
              </p>
            </div>
            <div className="inline-flex gap-2 text-lg sm:text-xl">
              <p className="font-semibold min-w-[200px] lg:min-w-[280px]">
                Dodane
              </p>
              <p className="text-base sm:text-xl">
                {formatDate(propertie?.date ?? "")}
              </p>
            </div>
            <div className="inline-flex gap-2 text-lg sm:text-xl">
              <p className="font-semibold min-w-[200px] lg:min-w-[280px]">
                Ostatnia aktualizacja
              </p>
              <p className="text-base sm:text-xl">
                {formatDate(propertie?.modified ?? "")}
              </p>
            </div>
          </div>
        </div>
        <div className="basis-1/4 mt-5 lg:mt-0">
          <h3 className="text-2xl font-semibold text-center">
            Ekskluzywni agenci aukcji
          </h3>
          <div>
            {propertie?.propertieFields?.relationWithProperties?.nodes.map(
              (item) => {
                return <Agent key={item.slug} slug={item.slug} />;
              }
            )}
          </div>
        </div>
      </div>
      <GoogleMaps
        latitude={propertie?.propertieFields?.map?.latitude ?? 0}
        longitude={propertie?.propertieFields?.map?.longitude?? 0}
      />
      <GetInTouch />
    </main>
  );
}
