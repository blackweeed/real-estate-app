import { Home } from "lucide-react";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      className="text-3xl font-bold text-blue-600 flex items-center gap-2"
      href="/"
    >
      <Home strokeWidth={2.75} absoluteStrokeWidth />{" "}
      małopolskie-nieruchomości.pl
    </Link>
  );
};
