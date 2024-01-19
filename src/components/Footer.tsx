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
      <footer className="px-20 py-10 bg-white grid grid-cols-5">
        <div className="flex flex-col gap-4 ">
          <button className="py-2.5 w-48 flex px-6 items-center bg-blue-600 text-white rounded-full font-medium">
            <span className="w-36">Join us</span> <ChevronRight />
          </button>
          <button className="py-2.5 w-48 flex px-6 items-center text-blue-600 border bg-white rounded-full font-medium">
            <span className="w-36">Agent Login</span> <UnlockKeyhole />
          </button>
        </div>
        <Links />
        <SmallLinks />
      </footer>
      <div className="py-10 px-20">
        <div className="px-20 w-full h-[1px] bg-gray-400"></div>
        <div className="py-10 flex justify-between items-center">
          <Logo />
          <p className="text-gray-500 font-semibold text-sm">
            © 2024 Serhant Real Estate, Inc. All Rights Reserved.
          </p>
          <div>
            <ul className="flex gap-4">
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
        <div className="px-20 w-full h-[1px] bg-gray-400"></div>
      </div>
    </>
  );
};
