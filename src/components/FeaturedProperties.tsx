import { getPropertiesList } from "@/api/properties";
import Link from "next/link";
import { Filters } from "./Filters";
import { Propertie } from "./Propertie";
import { ChevronRight } from "lucide-react";
import { GetInTouch } from "./GetInTouch";
import { Pagination } from "./Pagination";

export const FeaturedProperties = async () => {
  const properties = await getPropertiesList();

  const currentPage = "HomePage";

  const page = [1, 2, 3, 4, 5];

  return (
    <section className="px-20 pt-10 bg-white rounded-t-3xl relative -top-10 z-30">
      <div className="flex justify-between items-center">
        <div className="my-8">
          <h2 className="text-4xl font-semibold text-blue-600">
            Wyróżnione nieruchomości
          </h2>
          <p className="text-base text-gray-400 mb-6">
            Sprawdź niektóre z naszych najbardziej ekskluzywnych domów,
            apartamentów, kamienic, i nie tylko.
          </p>
        </div>
        <Filters />
      </div>
      <div className="grid grid-cols-3 gap-10">
        {properties?.map((propertie) => {
          return <Propertie key={propertie.slug} slug={propertie.slug ?? ""} />;
        })}
      </div>
      <div className="flex gap-4 justify-center my-12">
        {page.map((page) => (
          <Pagination key={page} page={page} pageNumber="1" />
        ))}
      </div>
    </section>
  );
};
