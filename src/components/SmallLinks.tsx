import Link from "next/link";

export const SmallLinks = () => {
	const oferty = [
		"Kupno Mieszkań",
		"Wynajem Lokali",
		"Sprzedaż Działek",
		"Oferty Luksusowe",
		"Komercyjne Nieruchomości",
	];

	const oNas = ["O Firmie", "Nasz Zespół", "Opinie Klientów", "Kariera", "Blog"];

	const pomoc = [
		"Centrum Pomocy",
		"Jak to działa?",
		"Pytania i odpowiedzi",
		"Polityka Prywatności",
		"Warunki Użytkowania",
	];

	const headLinkStyles = "mb-6 mt-6 text-lg font-semibold text-gray-500 lg:mt-0";
	const linkStyles = "font-semibold text-blue-600 hover:opacity-60";

	return (
		<>
			<div className="mt-8 lg:mt-0">
				<h4 className={headLinkStyles}>Oferty</h4>
				<ul className="flex flex-col gap-3">
					{oferty.map((item) => (
						<Link key={item} className={linkStyles} href={``}>
							{item}
						</Link>
					))}
				</ul>
			</div>
			<div>
				<h4 className={headLinkStyles}>O nas</h4>
				<ul className="flex flex-col gap-3">
					{oNas.map((item) => (
						<Link key={item} className={linkStyles} href={``}>
							{item}
						</Link>
					))}
				</ul>
			</div>
			<div>
				<h4 className={headLinkStyles}>Pomoc</h4>
				<ul className="flex flex-col gap-3">
					{pomoc.map((item) => (
						<Link key={item} className={linkStyles} href={``}>
							{item}
						</Link>
					))}
				</ul>
			</div>
		</>
	);
};
