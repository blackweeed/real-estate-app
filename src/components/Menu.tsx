import React from "react";
import { Logo } from "./Logo";
import { ChevronRight, Phone, Search, UnlockKeyhole, X } from "lucide-react";
import { Links } from "./Links";
import { SmallLinks } from "./SmallLinks";

type MenuProps = {
  setToggle: (toggle: boolean) => void;
};

export const Menu = ({ setToggle }: MenuProps) => {
  return (
    <div className="w-[94%] h-[94%] p-10 bg-white rounded-3xl overflow-hidden">
      <nav className="flex justify-between">
        <Logo />
        <div className="flex items-center gap-5">
          <button className="py-2.5 w-56 flex px-6 items-center text-blue-600 bg-white rounded-full font-semibold border-[1.7px]">
            <span className="w-36">1-887-SERHANT </span>{" "}
            <Phone size={21} strokeWidth={2.5} />
          </button>
          <button className="py-2.5 w-56 flex px-6 items-center bg-blue-600 text-white rounded-full font-semibold">
            <span className="w-36">Find a house</span>{" "}
            <Search size={21} strokeWidth={2.5} />
          </button>
          <button
            onClick={() => setToggle(false)}
            className="p-2.5 flex items-center justify-center border-[1.7px] rounded-full"
          >
            <X />
          </button>
        </div>
      </nav>
      <div className="flex flex-col gap-4 mt-8 justify-around">
        <div className="flex justify-around">
          <Links />
          <SmallLinks />
        </div>
        <div className="flex gap-8 justify-end mr-44">
          <button className="py-2.5 w-48 flex px-6 items-center bg-blue-600 text-white rounded-full font-medium">
            <span className="w-36">Join us</span> <ChevronRight />
          </button>
          <button className="py-2.5 w-48 flex px-6 items-center text-blue-600 border bg-white rounded-full font-medium">
            <span className="w-36">Agent Login</span> <UnlockKeyhole />
          </button>
        </div>
      </div>
    </div>
  );
};
