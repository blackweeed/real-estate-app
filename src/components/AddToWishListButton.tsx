import { Heart } from "lucide-react";
import { handleWishList } from "@/app/actions";

export const AddtoWishListButton = ({
	propertyId,
	token,
	isFavorite,
}: {
	propertyId: string;
	token: string;
	isFavorite: boolean;
}) => {
	return (
		<div
			className="absolute right-3 top-3 z-20 flex h-8 w-fit items-center justify-center rounded-md bg-white/60 px-2 font-semibold uppercase text-blue-600"
			onClick={async (e) => {
				e.preventDefault();
				try {
					const res = await handleWishList(propertyId, token, isFavorite);
					alert(res);
				} catch (error) {
					alert("Błąd aktualizacji listy życzeń");
					console.log(error);
				}
			}}
		>
			<button type="submit">
				<Heart className={`${isFavorite && "fill-blue-600"}`} />
			</button>
		</div>
	);
};
