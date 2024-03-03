import { executeGraphql } from "./graphqlApi";
import { GetUserFavoritesDocument, WishListAddToDocument } from "@/gql/graphql";

export const addtoWishList = async (PropertyID: string, token: string) => {
	const graphqlResponse = await executeGraphql({
		query: WishListAddToDocument,
		variables: { propertyId: PropertyID },
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return graphqlResponse.addToFavorites?.success;
};
export const getWishList = async (userID: string, token: string) => {
	const graphqlResponse = await executeGraphql({
		query: GetUserFavoritesDocument,
		variables: { ID: userID },
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return graphqlResponse.user?.favorites;
};
