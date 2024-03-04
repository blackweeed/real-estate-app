import { executeGraphql } from "./graphqlApi";
import { RefreshAuthTokenDocument } from "@/gql/graphql";

export const refreshToken = async (token: string) => {
	const graphqlResponse = await executeGraphql({
		query: RefreshAuthTokenDocument,
		variables: { token },
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return graphqlResponse.refreshJwtAuthToken?.authToken;
};
