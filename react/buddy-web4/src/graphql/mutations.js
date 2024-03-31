/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSignUpData = /* GraphQL */ `
  mutation CreateSignUpData(
    $input: CreateSignUpDataInput!
    $condition: ModelSignUpDataConditionInput
  ) {
    createSignUpData(input: $input, condition: $condition) {
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
export const updateSignUpData = /* GraphQL */ `
  mutation UpdateSignUpData(
    $input: UpdateSignUpDataInput!
    $condition: ModelSignUpDataConditionInput
  ) {
    updateSignUpData(input: $input, condition: $condition) {
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
export const deleteSignUpData = /* GraphQL */ `
  mutation DeleteSignUpData(
    $input: DeleteSignUpDataInput!
    $condition: ModelSignUpDataConditionInput
  ) {
    deleteSignUpData(input: $input, condition: $condition) {
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
