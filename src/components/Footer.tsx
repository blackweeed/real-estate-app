import {
  ChevronRight,
  Facebook,
  Instagram,
  Twitch,
  Twitter,
  UnlockKeyhole,
} from "lucide-react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Links } from "./Links";
import { SmallLinks } from "./SmallLinks";

export const Footer = () => {
  const icons = [
    { link: "/facebook", icon: <Facebook /> },
    { link: "/instagram", icon: <Instagram /> },
    { link: "/twiter", icon: <Twitter /> },
    { link: "/twith", icon: <Twitch /> },
  ];

  return (
    <>
      <footer className="px-6 lg:px-20 py-10 bg-white lg:flex lg:justify-around ">
        <div className="flex flex-row lg:flex-col gap-4 mb-8 lg:mb-0">
          <button className="py-2.5 w-48 flex px-6 items-center bg-blue-600 text-white rounded-full font-medium">
            <span className="w-20 lg:w-36">Dołącz</span> <ChevronRight />
          </button>
          <button className="py-2.5 w-48 flex px-6 items-center text-blue-600 border bg-white rounded-full font-medium">
            <span className="w-20 lg:w-36">Login</span> <UnlockKeyhole />
          </button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-x-20">
          <Links />
          <SmallLinks />
        </div>
      </footer>
      <div className="py-10 px-20">
        <div className="px-6 lg:px-20 w-full h-[1px] bg-gray-400"></div>
        <div className="py-10 flex flex-col gap-2 lg:flex-row justify-between items-center">
          <Logo />
          <p className="text-gray-500 font-semibold text-sm">
            © 2024 Serhant Real Estate, Inc. Prawa zarezerwowane.
          </p>
          <div>
            <ul className="flex gap-4 mt-3 lg:mt-0">
              {icons.map((icon) => {
                return (
                  <Link
                    key={icon.link}
                    className="p-4 border border-gray-500 hover:border-blue-600 hover:text-blue-600 rounded-full"
                    href={icon.link}
                  >
                    {icon.icon}
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="px-6 lg:px-20 w-full h-[1px] bg-gray-400"></div>
      </div>
    </>
  );
};
