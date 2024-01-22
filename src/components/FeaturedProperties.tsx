import { Filters } from "./Filters";
import { Propertie } from "./Propertie";
import { Pagination } from "./Pagination";
import { getPropertiesList } from "@/api/properties";

export const FeaturedProperties = async () => {
  const properties = await getPropertiesList();


  const page = [1, 2, 3, 4, 5];

  return (
    <section className="px-6 lg:px-20 pt-10 bg-white rounded-t-3xl relative -top-10 z-30">
      <div className="flex justify-between items-center">
        <div className="mb-5">
          <h2 className="text-3xl lg:text-4xl font-semibold text-blue-600">
            Wyróżnione nieruchomości
          </h2>
          <p className="text-sm lg:text-base text-gray-400 mb-6 mt-3">
            Sprawdź niektóre z naszych najbardziej ekskluzywnych domów,
            apartamentów, kamienic, i nie tylko.
          </p>
        </div>
        <Filters />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
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
