import { Propertie } from "./Propertie";

export const ActiveListings = async ({ data }) => {
  return (
    <section className="py-10 ">
      <h2 className="text-4xl font-semibold text-blue-600">Aktywne ofert</h2>
      <p className="text-base text-gray-400 mb-6 max-w-[700px]">
        Odkryj naszą profesjonalnie dobraną kolekcję nieruchomości na sprzedaż.
        Z skupiając się na jakości i wartości, oferujemy jedne z najlepszych
        nieruchomości na rynku.
      </p>

      <div className="grid grid-cols-3 gap-10">
        {data.map((slug) => {
          return <Propertie key={slug.slug} slug={slug.slug} />;
        })}
      </div>
    </section>
  );
};
