import Link from "next/link";

export const Links = () => {
  const links = [
    { label: "kup", link: "/buy" },
    { label: "wynajmij", link: "/rent" },
    { label: "sprzedaj", link: "/sell" },
    { label: "agenci", link: "/agents" },
    { label: "kontakt", link: "/contact" },
  ];

  return (
    <div>
      <ul className="flex flex-col gap-4">
        {links.map((link) => {
          return (
            <Link
              key={link.label}
              href={`${link.link}`}
              className="capitalize text-2xl lg:text-3xl font-bold text-blue-600 hover:underline hover:decoration-wavy transition-all duration-500"
            >
              {link.label}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
