import { executeGraphql } from "./graphqlApi";
import { RefreshAuthTokenDocument } from "@/gql/graphql";
export const refreshToken = async (token: string) => {
	try {
		const graphqlResponse = await executeGraphql({
			query: RefreshAuthTokenDocument,
			variables: { token },
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		// Sprawdź, czy odpowiedź zawiera błędy
		if (graphqlResponse.errors) {
			console.error("GraphQL Error:", graphqlResponse.errors);
			// Możesz tutaj zdecydować, czy chcesz rzucić błąd, czy zwrócić null
			throw new Error("Error refreshing JWT token");
		}

		return graphqlResponse.refreshJwtAuthToken?.authToken;
	} catch (error) {
		// Obsługa wyjątków związanych z siecią lub innymi błędami wykonania
		console.error("Error during token refresh:", error);
		// Zdecyduj, co zwrócić lub rzucić, gdy wystąpi wyjątek
		return null; // Na przykład zwróć null, aby sygnalizować problem
	}
};
// import { executeGraphql } from "./graphqlApi";
// import { RefreshAuthTokenDocument } from "@/gql/graphql";

// export const refreshToken = async (token: string) => {
// 	const graphqlResponse = await executeGraphql({
// 		query: RefreshAuthTokenDocument,
// 		variables: { token },
// 		headers: {
// 			Authorization: `Bearer ${token}`,
// 		},
// 	});

// 	return graphqlResponse.refreshJwtAuthToken?.authToken;
// };
