import { executeGraphql } from "./graphqlApi";
import {
	GetPropertiesListBuyOrLeaseDocument,
	GetPropertiesListDocument,
	PropertieGetbySlugDocument,
} from "@/gql/graphql";

export const getPropertiesList = async () => {
	const graphqlResponse = await executeGraphql({
		query: GetPropertiesListDocument,
	});

	return graphqlResponse.properties?.nodes;
};
export const GetPropertiesListBuyOrLease = async (buyOrLease: string) => {
	const graphqlResponse = await executeGraphql({
		query: GetPropertiesListBuyOrLeaseDocument,
		variables: { buyOrLease: buyOrLease },
	});

	return graphqlResponse.properties?.nodes;
};

export const getSinglePropertieBySlug = async (PropertyID: string) => {
	const graphqlResponse = await executeGraphql({
		query: PropertieGetbySlugDocument,
		variables: { ProperiteID: PropertyID },
	});

	return graphqlResponse.propertie;
};
