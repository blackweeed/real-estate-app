/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment AgentDetails on WithAcfAgents {\n  agents {\n    email\n    phoneNumber\n    agentsLocation\n    agentsDescription\n    avatar {\n      node {\n        mediaItemUrl\n      }\n    }\n    relationWithProperties {\n      nodes {\n        slug\n      }\n    }\n  }\n}": types.AgentDetailsFragmentDoc,
    "query AgentGetBySlug($AgentID: ID!) {\n  agent(id: $AgentID, idType: SLUG) {\n    date\n    title\n    ...AgentDetails\n  }\n}": types.AgentGetBySlugDocument,
    "query GetAgentsList {\n  agents {\n    nodes {\n      date\n      title\n      slug\n      featuredImage {\n        node {\n          mediaItemUrl\n        }\n      }\n      agents {\n        email\n        phoneNumber\n      }\n    }\n  }\n}": types.GetAgentsListDocument,
    "query GetPropertiesList {\n  properties(first: 4) {\n    nodes {\n      slug\n      propertieFields {\n        map {\n          city\n          streetName\n          streetNumber\n          postCode\n          country\n          state\n        }\n        area\n        price\n        numberOfRooms\n        numberOfBeds\n        buyOrLease\n        images {\n          nodes {\n            mediaItemUrl\n          }\n        }\n      }\n    }\n  }\n}": types.GetPropertiesListDocument,
    "query GetPropertiesListPaginated {\n  properties {\n    nodes {\n      slug\n      propertieFields {\n        map {\n          city\n          streetName\n          streetNumber\n          postCode\n          country\n          state\n        }\n        area\n        price\n        numberOfRooms\n        numberOfBeds\n        buyOrLease\n        images {\n          nodes {\n            mediaItemUrl\n          }\n        }\n      }\n    }\n  }\n}": types.GetPropertiesListPaginatedDocument,
    "fragment PropertieDetails on WithAcfPropertieFields {\n  propertieFields {\n    map {\n      city\n      country\n      postCode\n      streetName\n      placeId\n      longitude\n      latitude\n      state\n      streetAddress\n    }\n    area\n    price\n    propertyDescription\n    numberOfRooms\n    numberOfBeds\n    numberOfBathrooms\n    buyOrLease\n    typeOfDevelopment\n    relationWithProperties {\n      nodes {\n        slug\n      }\n    }\n    images {\n      nodes {\n        mediaItemUrl\n      }\n    }\n  }\n}": types.PropertieDetailsFragmentDoc,
    "query PropertieGetbySlug($ProperiteID: ID!) {\n  propertie(id: $ProperiteID, idType: SLUG) {\n    modified\n    date\n    title\n    ...PropertieDetails\n  }\n}": types.PropertieGetbySlugDocument,
    "mutation SubmitForm($FirstName: String!, $SecondName: String!, $PhoneNumber: String!, $Comments: String!) {\n  submitGfForm(\n    input: {id: 1, fieldValues: [{id: 1, nameValues: {first: $FirstName, last: $SecondName}}, {id: 4, value: $PhoneNumber}, {id: 3, value: $Comments}]}\n  ) {\n    errors {\n      message\n      id\n    }\n    confirmation {\n      message\n    }\n  }\n}": types.SubmitFormDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment AgentDetails on WithAcfAgents {\n  agents {\n    email\n    phoneNumber\n    agentsLocation\n    agentsDescription\n    avatar {\n      node {\n        mediaItemUrl\n      }\n    }\n    relationWithProperties {\n      nodes {\n        slug\n      }\n    }\n  }\n}"): typeof import('./graphql').AgentDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query AgentGetBySlug($AgentID: ID!) {\n  agent(id: $AgentID, idType: SLUG) {\n    date\n    title\n    ...AgentDetails\n  }\n}"): typeof import('./graphql').AgentGetBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAgentsList {\n  agents {\n    nodes {\n      date\n      title\n      slug\n      featuredImage {\n        node {\n          mediaItemUrl\n        }\n      }\n      agents {\n        email\n        phoneNumber\n      }\n    }\n  }\n}"): typeof import('./graphql').GetAgentsListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPropertiesList {\n  properties(first: 4) {\n    nodes {\n      slug\n      propertieFields {\n        map {\n          city\n          streetName\n          streetNumber\n          postCode\n          country\n          state\n        }\n        area\n        price\n        numberOfRooms\n        numberOfBeds\n        buyOrLease\n        images {\n          nodes {\n            mediaItemUrl\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').GetPropertiesListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPropertiesListPaginated {\n  properties {\n    nodes {\n      slug\n      propertieFields {\n        map {\n          city\n          streetName\n          streetNumber\n          postCode\n          country\n          state\n        }\n        area\n        price\n        numberOfRooms\n        numberOfBeds\n        buyOrLease\n        images {\n          nodes {\n            mediaItemUrl\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').GetPropertiesListPaginatedDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment PropertieDetails on WithAcfPropertieFields {\n  propertieFields {\n    map {\n      city\n      country\n      postCode\n      streetName\n      placeId\n      longitude\n      latitude\n      state\n      streetAddress\n    }\n    area\n    price\n    propertyDescription\n    numberOfRooms\n    numberOfBeds\n    numberOfBathrooms\n    buyOrLease\n    typeOfDevelopment\n    relationWithProperties {\n      nodes {\n        slug\n      }\n    }\n    images {\n      nodes {\n        mediaItemUrl\n      }\n    }\n  }\n}"): typeof import('./graphql').PropertieDetailsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query PropertieGetbySlug($ProperiteID: ID!) {\n  propertie(id: $ProperiteID, idType: SLUG) {\n    modified\n    date\n    title\n    ...PropertieDetails\n  }\n}"): typeof import('./graphql').PropertieGetbySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation SubmitForm($FirstName: String!, $SecondName: String!, $PhoneNumber: String!, $Comments: String!) {\n  submitGfForm(\n    input: {id: 1, fieldValues: [{id: 1, nameValues: {first: $FirstName, last: $SecondName}}, {id: 4, value: $PhoneNumber}, {id: 3, value: $Comments}]}\n  ) {\n    errors {\n      message\n      id\n    }\n    confirmation {\n      message\n    }\n  }\n}"): typeof import('./graphql').SubmitFormDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
