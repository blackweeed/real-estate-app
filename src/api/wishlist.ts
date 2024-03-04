import { executeGraphql } from "./graphqlApi";
import {
	GetUserFavoritesDocument,
	WishListAddToDocument,
	WishListDeleteDocument,
} from "@/gql/graphql";

export const addtoWishList = async (PropertyID: string, token: string) => {
	const graphqlResponse = await executeGraphql({
		query: WishListAddToDocument,
		variables: { propertyId: PropertyID },
		headers: {
			Authorization: `Bearer ${token}`,
		},
		next: {
			tags: ["wishlist"],
		},
	});

	return graphqlResponse.addToFavorites?.success;
};
export const deleteFromWishlist = async (PropertyID: string, token: string) => {
	const graphqlResponse = await executeGraphql({
		query: WishListDeleteDocument,
		variables: { propertyId: PropertyID },
		headers: {
			Authorization: `Bearer ${token}`,
		},
		next: {
			tags: ["wishlist"],
		},
	});

	return graphqlResponse.removeFromFavorites?.success;
};
export const getWishList = async (userID: string, token: string) => {
	const graphqlResponse = await executeGraphql({
		query: GetUserFavoritesDocument,
		variables: { ID: userID },
		headers: {
			Authorization: `Bearer ${token}`,
		},
		// next: {
		// 	tags: ["wishlist"],
		// },
	});

	return graphqlResponse.user?.favorites;
};
