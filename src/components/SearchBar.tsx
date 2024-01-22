import { ChevronDown, LocateFixed, Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="bg-white flex w-[92%] lg:w-[60%] py-2.5 lg:py-5 rounded-full mt-6 justify-between items-center pl-6 lg:pl-12 pr-4">
      <div className="inline-flex items-center gap-1.5 cursor-pointer">
        Kup <ChevronDown size={20} strokeWidth={1.5} />
      </div>
      <div className="w-[50vw] lg:w-[40vw] flex items-center justify-between border px-6 border-black/40 rounded-lg">
        <input
          type="text"
          placeholder="Szukaj po adresie lub okolicy"
          className="text-sm w-full py-2.5 outline-none"
        />
        <LocateFixed
          strokeWidth={1.5}
          className="hidden lg:block cursor-pointer"
        />
      </div>
      <button className="p-2 lg:p-3 rounded-full bg-blue-600">
        <Search color="white" size={21} strokeWidth={2.6} />
      </button>
    </div>
  );
};
