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
    "query GetPropertiesList {\n  properties(first: 10) {\n    nodes {\n      slug\n      propertieFields {\n        map {\n          city\n          streetName\n          streetNumber\n          postCode\n          country\n          state\n        }\n        area\n        price\n        numberOfRooms\n        numberOfBeds\n        buyOrLease\n        images {\n          nodes {\n            mediaItemUrl\n          }\n        }\n      }\n    }\n  }\n}": types.GetPropertiesListDocument,
    "query GetPropertiesListBuyOrLease($buyOrLease: String!) {\n  properties(where: {buyOrLease: $buyOrLease}) {\n    nodes {\n      slug\n      propertieFields {\n        map {\n          city\n          streetName\n          streetNumber\n          postCode\n          country\n          state\n        }\n        area\n        price\n        numberOfRooms\n        numberOfBeds\n        buyOrLease\n        images {\n          nodes {\n            mediaItemUrl\n          }\n        }\n      }\n    }\n  }\n}": types.GetPropertiesListBuyOrLeaseDocument,
    "query GetPropertiesListPaginated {\n  properties {\n    nodes {\n      slug\n      propertieFields {\n        map {\n          city\n          streetName\n          streetNumber\n          postCode\n          country\n          state\n        }\n        area\n        price\n        numberOfRooms\n        numberOfBeds\n        buyOrLease\n        images {\n          nodes {\n            mediaItemUrl\n          }\n        }\n      }\n    }\n  }\n}": types.GetPropertiesListPaginatedDocument,
    "fragment PropertieDetails on WithAcfPropertieFields {\n  propertieFields {\n    map {\n      city\n      country\n      postCode\n      streetName\n      placeId\n      longitude\n      latitude\n      state\n      streetAddress\n    }\n    area\n    price\n    propertyDescription\n    numberOfRooms\n    numberOfBeds\n    numberOfBathrooms\n    buyOrLease\n    typeOfDevelopment\n    relationWithProperties {\n      nodes {\n        slug\n      }\n    }\n    images {\n      nodes {\n        mediaItemUrl\n      }\n    }\n  }\n}": types.PropertieDetailsFragmentDoc,
    "query PropertieGetbySlug($ProperiteID: ID!) {\n  propertie(id: $ProperiteID, idType: SLUG) {\n    modified\n    date\n    title\n    ...PropertieDetails\n  }\n}": types.PropertieGetbySlugDocument,
    "query SearchForm($query: String!, $buyOrLease: String!) {\n  properties(where: {buyOrLease: $buyOrLease, search: $query}) {\n    nodes {\n      title\n      slug\n      propertieFields {\n        price\n        map {\n          city\n          streetName\n          postCode\n        }\n      }\n      featuredImage {\n        node {\n          mediaItemUrl\n        }\n      }\n    }\n  }\n}": types.SearchFormDocument,
    "mutation SubmitForm($FirstName: String!, $SecondName: String!, $PhoneNumber: String!, $Comments: String!) {\n  submitGfForm(\n    input: {id: 1, fieldValues: [{id: 5, nameValues: {first: $FirstName, last: $SecondName}}, {id: 7, value: $PhoneNumber}, {id: 8, value: $Comments}]}\n  ) {\n    errors {\n      message\n      id\n    }\n    confirmation {\n      message\n    }\n  }\n}": types.SubmitFormDocument,
    "mutation UserSignIn($userName: String!, $password: String!) {\n  login(input: {username: $userName, password: $password}) {\n    authToken\n    user {\n      id\n      name\n      email\n    }\n  }\n}": types.UserSignInDocument,
    "mutation UserSignUp($username: String!, $email: String!, $firstName: String!, $lastName: String!, $password: String!) {\n  registerUser(\n    input: {username: $username, email: $email, firstName: $firstName, lastName: $lastName, password: $password}\n  ) {\n    user {\n      databaseId\n    }\n  }\n}": types.UserSignUpDocument,
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
export function graphql(source: "query GetPropertiesList {\n  properties(first: 10) {\n    nodes {\n      slug\n      propertieFields {\n        map {\n          city\n          streetName\n          streetNumber\n          postCode\n          country\n          state\n        }\n        area\n        price\n        numberOfRooms\n        numberOfBeds\n        buyOrLease\n        images {\n          nodes {\n            mediaItemUrl\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').GetPropertiesListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetPropertiesListBuyOrLease($buyOrLease: String!) {\n  properties(where: {buyOrLease: $buyOrLease}) {\n    nodes {\n      slug\n      propertieFields {\n        map {\n          city\n          streetName\n          streetNumber\n          postCode\n          country\n          state\n        }\n        area\n        price\n        numberOfRooms\n        numberOfBeds\n        buyOrLease\n        images {\n          nodes {\n            mediaItemUrl\n          }\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').GetPropertiesListBuyOrLeaseDocument;
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
export function graphql(source: "query SearchForm($query: String!, $buyOrLease: String!) {\n  properties(where: {buyOrLease: $buyOrLease, search: $query}) {\n    nodes {\n      title\n      slug\n      propertieFields {\n        price\n        map {\n          city\n          streetName\n          postCode\n        }\n      }\n      featuredImage {\n        node {\n          mediaItemUrl\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').SearchFormDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation SubmitForm($FirstName: String!, $SecondName: String!, $PhoneNumber: String!, $Comments: String!) {\n  submitGfForm(\n    input: {id: 1, fieldValues: [{id: 5, nameValues: {first: $FirstName, last: $SecondName}}, {id: 7, value: $PhoneNumber}, {id: 8, value: $Comments}]}\n  ) {\n    errors {\n      message\n      id\n    }\n    confirmation {\n      message\n    }\n  }\n}"): typeof import('./graphql').SubmitFormDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UserSignIn($userName: String!, $password: String!) {\n  login(input: {username: $userName, password: $password}) {\n    authToken\n    user {\n      id\n      name\n      email\n    }\n  }\n}"): typeof import('./graphql').UserSignInDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation UserSignUp($username: String!, $email: String!, $firstName: String!, $lastName: String!, $password: String!) {\n  registerUser(\n    input: {username: $username, email: $email, firstName: $firstName, lastName: $lastName, password: $password}\n  ) {\n    user {\n      databaseId\n    }\n  }\n}"): typeof import('./graphql').UserSignUpDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
