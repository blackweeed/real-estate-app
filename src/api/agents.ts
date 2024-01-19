import { AgentGetBySlugDocument, GetAgentsListDocument } from "@/gql/graphql";
import { executeGraphql } from "./graphqlApi";

export const getAgentsList = async () => {
  const graphqlResponse = await executeGraphql({
    query: GetAgentsListDocument,
  });

  return graphqlResponse.agents?.nodes;
};

export const getSingleAgentBySlug = async (AgentID: string) => {
  const graphqlResponse = await executeGraphql({
    query: AgentGetBySlugDocument,
    variables: { AgentID: AgentID },
  });

  return graphqlResponse.agent;
};
