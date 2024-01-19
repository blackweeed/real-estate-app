import Image from "next/image";
import { getSinglePropertieBySlug } from "@/api/properties";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Agent } from "@/components/Agent";
import GoogleMaps from "@/components/GoogleMaps";
import { GetInTouch } from "@/components/GetInTouch";
import { formatDate } from "@/app/utils";
import { ImageGallery } from "@/components/ImageGallery";

export default async function ProperitePage({
  params,
}: {
  params: { properiteName: string };
}) {
  const propertie = await getSinglePropertieBySlug(params.properiteName);

  return (
    <main className="px-20">
      <nav className="my-6">
        <ul className="flex gap-4 items-center font-medium">
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
      <div
        className="grid gap-10 [&>*:first-child]:row-span-2"
        style={{
          gridTemplateColumns: "1fr 240px 240px",
          gridTemplateRows: "repeat(2, 224px)",
        }}
      >
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
          ${propertie?.propertieFields?.price}
        </p>
        <div className="inline-flex gap-6 text-lg text-gray-500 font-medium">
          <p>{propertie?.propertieFields?.numberOfRooms} Pokoje</p>
          <p>Powierzchnia {propertie?.propertieFields?.area}m²</p>
        </div>
      </div>
      <div className="flex ">
        <div className="basis-3/4">
          {" "}
          <div className="mt-6 max-w-[900px]">
            <h2 className="text-5xl font-bold text-blue-600">
              Opis nieruchomości
            </h2>
            <p
              className="mt-4 "
              dangerouslySetInnerHTML={{
                __html: propertie?.propertieFields?.propertyDescription ?? "",
              }}
            />
          </div>
          <div className="mt-6 max-w-[900px] flex flex-col gap-2">
            <h2 className="text-5xl font-bold text-blue-600 mb-2">
              Podsumowanie
            </h2>
            <div className="inline-flex gap-10 text-xl">
              <p className="font-semibold min-w-[280px]">Lokalizacja</p>
              <p className="capitalize">
                {propertie?.propertieFields?.map?.streetAddress}
              </p>
            </div>
            <div className="inline-flex gap-10 text-xl">
              <p className="font-semibold min-w-[280px]">Typ nieruchomości</p>
              <p className="capitalize">
                {propertie?.propertieFields?.typeOfDevelopment}
              </p>
            </div>
            <div className="inline-flex gap-10 text-xl">
              <p className="font-semibold min-w-[280px]">Dodane</p>
              <p>{formatDate(propertie?.date ?? "")}</p>
            </div>
            <div className="inline-flex gap-10 text-xl">
              <p className="font-semibold min-w-[280px]">
                Ostatnia aktualizacja
              </p>
              <p>{formatDate(propertie?.modified ?? "")}</p>
            </div>
          </div>
        </div>
        <div className="basis-1/4">
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
        longitude={propertie?.propertieFields?.map?.longitude}
        latitude={propertie?.propertieFields?.map?.latitude}
      />
      <GetInTouch />
    </main>
  );
}
