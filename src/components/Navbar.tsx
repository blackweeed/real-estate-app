"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ToggleMenuButton } from "./ToggleMenuButton";
import { ToggleAgentMenuButton } from "./ToggleAgentMenuButton";

export const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);  

  const links = [
    {
      href: "/buy",
      name: "Kup",
    },
    {
      href: "/rent",
      name: "Wynajmij",
    },
    {
      href: "/sell",
      name: "Sprzedaj",
    },
    {
      href: "/agents",
      name: "Agenci",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollingUp = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);

      if (scrollingUp) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`${
        !visible && "hidden"
      } bg-white w-[90%] mx-auto px-4 lg:px-20 py-4 rounded-full z-40 shadow-lg mt-4 fixed left-0 right-0 top-0 `}
    >
      <div className="flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-2 lg:gap-4 ">
          <div className="hidden lg:flex gap-4">
            {links.map((link) => (
              <Link key={link.name} href={link.href}>
                {link.name}
              </Link>
            ))}
          </div>
          <ToggleAgentMenuButton />
          <Link
            className="px-2 lg:px-4 py-2 bg-blue-600 text-white rounded-full inline-flex gap-2 justify-between items-center"
            href=""
          >
            <p className="hidden lg:block">Znajdź</p>{" "}
            <Search size={20} strokeWidth={2.4} />
          </Link>
          <ToggleMenuButton />
        </div>
      </div>
    </nav>
  );
};
