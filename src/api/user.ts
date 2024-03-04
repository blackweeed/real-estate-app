import { executeGraphql } from "./graphqlApi";
import { UserGetDocument } from "@/gql/graphql";

export const getCurrentUser = async (token: string) => {
	try {
		const graphqlResponse = await executeGraphql({
			query: UserGetDocument,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		// Sprawdzenie, czy w odpowiedzi znajdują się błędy GraphQL
		if (graphqlResponse.errors) {
			console.error("Błędy GraphQL:", graphqlResponse.errors);
			// Możesz tutaj zwrócić null lub rzucić wyjątek, w zależności od potrzeb aplikacji
			throw new Error("Błąd podczas wykonywania zapytania GraphQL");
		}

		return graphqlResponse.viewer;
	} catch (error) {
		console.error("Błąd podczas pobierania danych użytkownika:", error);
		// Zwrócenie null lub obsłużenie błędu w inny sposób
		return null;
	}
};
