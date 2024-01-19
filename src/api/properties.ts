import {
  GetPropertiesListDocument,
  PropertieGetbySlugDocument,
} from "@/gql/graphql";
import { executeGraphql } from "./graphqlApi";

export const getPropertiesList = async () => {
  const graphqlResponse = await executeGraphql({
    query: GetPropertiesListDocument,
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
