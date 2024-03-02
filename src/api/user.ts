import { executeGraphql } from "./graphqlApi";
import { UserGetDocument } from "@/gql/graphql";

export const getCurrentUser = async (token: string) => {
	const graphqlResponse = await executeGraphql({
		query: UserGetDocument,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	return graphqlResponse.viewer;
};
