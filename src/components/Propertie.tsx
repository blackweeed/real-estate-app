import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/app/utils";
import { getSinglePropertieBySlug } from "@/api/properties";

export const Propertie = async ({ slug }: { slug: string }) => {
  const propertie = await getSinglePropertieBySlug(slug);

  return (
    <Link
      href={`/properites/${slug}`}
      className="w-full h-[360px] "
      key={propertie?.date}
    >
      <div className="w-full h-[80%] relative rounded-lg overflow-hidden cursor-pointer">
        <div className="z-30 bg-white/60 w-24 h-8 absolute top-3 left-3 flex justify-center items-center rounded-md text-blue-600 font-semibold uppercase">
          {propertie?.propertieFields?.buyOrLease}
        </div>
        <Image
          className="hover:scale-110 object-cover transition"
          src={propertie?.propertieFields?.images?.nodes[0].mediaItemUrl ?? ""}
          alt=""
          fill
        />
      </div>
      <p className="mt-2 font-semibold text-xl ">
        {formatPrice(propertie?.propertieFields?.price ?? 0)}
      </p>
      <p className="capitalize font-medium">
        {propertie?.propertieFields?.map?.streetName},{" "}
        {propertie?.propertieFields?.map?.city},{" "}
        {propertie?.propertieFields?.map?.postCode}
      </p>
      <p className="inline-flex items-center ">
        {propertie?.propertieFields?.numberOfBeds} Łóżek <Dot />
        {propertie?.propertieFields?.numberOfRooms} Pokoi <Dot />
        {propertie?.propertieFields?.area}m²
      </p>
    </Link>
  );
};
