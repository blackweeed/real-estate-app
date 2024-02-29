export const formatPrice = (price: number) => {
	const formattedPrice = new Intl.NumberFormat("pl-PL", {
		style: "currency",
		currency: "PLN",
	}).format(price);

	return formattedPrice;
};

export function formatDate(inputDate: string) {
	const daysOfWeek = [
		"niedziela",
		"poniedziałek",
		"wtorek",
		"środa",
		"czwartek",
		"piątek",
		"sobota",
	];
	const months = [
		"stycznia",
		"lutego",
		"marca",
		"kwietnia",
		"maja",
		"czerwca",
		"lipca",
		"sierpnia",
		"września",
		"października",
		"listopada",
		"grudnia",
	];

	// Utwórz obiekt Date na podstawie inputDate
	const parsedDate = new Date(inputDate);

	// Pobierz dzień tygodnia, dzień miesiąca i miesiąc
	const dayOfWeek = daysOfWeek[parsedDate.getDay()];
	const dayOfMonth = parsedDate.getDate();
	const month = months[parsedDate.getMonth()];
	const year = parsedDate.getFullYear();

	// Zmiana pierwszej litery na dużą
	const formattedDayOfWeek = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
	const formattedMonth = month.charAt(0).toUpperCase() + month.slice(1);

	// Zwróć sformatowaną datę
	const formattedDate = `${formattedDayOfWeek}, ${dayOfMonth} ${formattedMonth} ${year}`;
	return formattedDate;
}

export function capitalizeFirstLetter(string: string) {
	if (!string) return "";
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export const disableScroll = () => {
	document.body.style.overflow = "hidden";
};

export const enableScroll = () => {
	document.body.style.overflow = "unset";
};
