import { AlignRight, Menu, Search, User } from "lucide-react";
import Link from "next/link";
import { Logo } from "./Logo";
import { ToggleMenuButton } from "./ToggleMenuButton";

export const Navbar = () => {
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

  return (
    <nav className="bg-white w-[90%] mx-auto px-20 py-4 rounded-full z-30">
      <div className="flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-4">
          {links.map((link) => (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          ))}
          <Link href="/" className="p-2 border-2 rounded-full">
            <User size={20} />
          </Link>
          <Link
            className="px-4 py-2 bg-blue-600 text-white rounded-full inline-flex gap-2 justify-between items-center"
            href=""
          >
            Znajdz <Search size={20} strokeWidth={2.4} />
          </Link>
          <ToggleMenuButton />
        </div>
      </div>
    </nav>
  );
};
