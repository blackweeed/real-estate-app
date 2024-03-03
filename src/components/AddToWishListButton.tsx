import { Heart } from "lucide-react";
import { addToWishList } from "@/app/actions";

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
					// Call your async action here
					await addToWishList(propertyId, token);
					alert("dodano");

					// Handle success here
				} catch (error) {
					// Handle error here
					alert("Error adding to wishlist");
				}
			}}
		>
			<button type="submit">
				<Heart className={`${isFavorite && "fill-blue-600"}`} />
			</button>
		</div>
	);
};
