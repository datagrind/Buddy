/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSignUpData = /* GraphQL */ `
  query GetSignUpData($id: ID!) {
    getSignUpData(id: $id) {
      id
      firstname
      lastname
      email
      provider
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSignUpData = /* GraphQL */ `
  query ListSignUpData(
    $filter: ModelSignUpDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSignUpData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstname
        lastname
        email
        provider
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
