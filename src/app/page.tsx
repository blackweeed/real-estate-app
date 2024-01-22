import Image from "next/image";
import { SearchBar } from "../components/SearchBar";
import { FeaturedProperties } from "../components/FeaturedProperties";
import { GetInTouch } from "@/components/GetInTouch";

export default async function Home() {
  return (
    <main>
      <div className="w-full h-[80vh] relative">
        <div className="absolute z-30 inset-0 flex flex-col gap-4 justify-center items-center ">
          <h1
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
            className="text-3xl lg:text-5xl text-white font-bold tracking-wide text-center"
          >
            Znajdź swój wymarzony dom.
          </h1>
          <h2
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
            className="text-xl lg:text-2xl text-white font-bold tracking-wide"
          >
            Z nami to proste!
          </h2>
          <SearchBar />
        </div>
        <div
          className="absolute w-full h-full z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.15) 70%, rgba(0, 0, 0, 0.55) 110%)",
          }}
        />
        <Image
          src="/images/bg-img.jpg"
          alt="bg-image"
          fill
          className="object-cover"
          priority
        />
      </div>
      <FeaturedProperties />
      <div className="px-6">
        <GetInTouch />
      </div>
    </main>
  );
}
