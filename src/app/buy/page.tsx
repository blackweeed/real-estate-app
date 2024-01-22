import { FeaturedProperties } from "@/components/FeaturedProperties";
import { GetInTouch } from "@/components/GetInTouch";

export default async function Buy() {
  return (
    <section className="mt-32">
      <FeaturedProperties />
      <GetInTouch />
    </section>
  );
}
