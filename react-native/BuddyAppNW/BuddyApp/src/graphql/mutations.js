/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRating = /* GraphQL */ `
  mutation CreateRating(
    $input: CreateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    createRating(input: $input, condition: $condition) {
      id
      type
      stars
      review
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateRating = /* GraphQL */ `
  mutation UpdateRating(
    $input: UpdateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    updateRating(input: $input, condition: $condition) {
      id
      type
      stars
      review
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteRating = /* GraphQL */ `
  mutation DeleteRating(
    $input: DeleteRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    deleteRating(input: $input, condition: $condition) {
      id
      type
      stars
      review
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createRequest = /* GraphQL */ `
  mutation CreateRequest(
    $input: CreateRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    createRequest(input: $input, condition: $condition) {
      id
      providerID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateRequest = /* GraphQL */ `
  mutation UpdateRequest(
    $input: UpdateRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    updateRequest(input: $input, condition: $condition) {
      id
      providerID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteRequest = /* GraphQL */ `
  mutation DeleteRequest(
    $input: DeleteRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    deleteRequest(input: $input, condition: $condition) {
      id
      providerID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createFavorite = /* GraphQL */ `
  mutation CreateFavorite(
    $input: CreateFavoriteInput!
    $condition: ModelFavoriteConditionInput
  ) {
    createFavorite(input: $input, condition: $condition) {
      id
      providerID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateFavorite = /* GraphQL */ `
  mutation UpdateFavorite(
    $input: UpdateFavoriteInput!
    $condition: ModelFavoriteConditionInput
  ) {
    updateFavorite(input: $input, condition: $condition) {
      id
      providerID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteFavorite = /* GraphQL */ `
  mutation DeleteFavorite(
    $input: DeleteFavoriteInput!
    $condition: ModelFavoriteConditionInput
  ) {
    deleteFavorite(input: $input, condition: $condition) {
      id
      providerID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
      id
      provider_pay_rate
      provider_service_fee
      user_service_fee
      taxes
      total
      userID
      providerID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTransaction = /* GraphQL */ `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
      id
      provider_pay_rate
      provider_service_fee
      user_service_fee
      taxes
      total
      userID
      providerID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTransaction = /* GraphQL */ `
  mutation DeleteTransaction(
    $input: DeleteTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    deleteTransaction(input: $input, condition: $condition) {
      id
      provider_pay_rate
      provider_service_fee
      user_service_fee
      taxes
      total
      userID
      providerID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createReservation = /* GraphQL */ `
  mutation CreateReservation(
    $input: CreateReservationInput!
    $condition: ModelReservationConditionInput
  ) {
    createReservation(input: $input, condition: $condition) {
      id
      future_date_time
      Transactions {
        id
        provider_pay_rate
        provider_service_fee
        user_service_fee
        taxes
        total
        userID
        providerID
        createdAt
        updatedAt
        __typename
      }
      userID
      providerID
      createdAt
      updatedAt
      reservationTransactionsId
      __typename
    }
  }
`;
export const updateReservation = /* GraphQL */ `
  mutation UpdateReservation(
    $input: UpdateReservationInput!
    $condition: ModelReservationConditionInput
  ) {
    updateReservation(input: $input, condition: $condition) {
      id
      future_date_time
      Transactions {
        id
        provider_pay_rate
        provider_service_fee
        user_service_fee
        taxes
        total
        userID
        providerID
        createdAt
        updatedAt
        __typename
      }
      userID
      providerID
      createdAt
      updatedAt
      reservationTransactionsId
      __typename
    }
  }
`;
export const deleteReservation = /* GraphQL */ `
  mutation DeleteReservation(
    $input: DeleteReservationInput!
    $condition: ModelReservationConditionInput
  ) {
    deleteReservation(input: $input, condition: $condition) {
      id
      future_date_time
      Transactions {
        id
        provider_pay_rate
        provider_service_fee
        user_service_fee
        taxes
        total
        userID
        providerID
        createdAt
        updatedAt
        __typename
      }
      userID
      providerID
      createdAt
      updatedAt
      reservationTransactionsId
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      firstname
      lastname
      age
      about_me
      nickname
      interests
      city
      state
      likes
      Favorites {
        nextToken
        __typename
      }
      Requests {
        nextToken
        __typename
      }
      user_star_rating
      Transactions {
        nextToken
        __typename
      }
      Bookings {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      firstname
      lastname
      age
      about_me
      nickname
      interests
      city
      state
      likes
      Favorites {
        nextToken
        __typename
      }
      Requests {
        nextToken
        __typename
      }
      user_star_rating
      Transactions {
        nextToken
        __typename
      }
      Bookings {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      firstname
      lastname
      age
      about_me
      nickname
      interests
      city
      state
      likes
      Favorites {
        nextToken
        __typename
      }
      Requests {
        nextToken
        __typename
      }
      user_star_rating
      Transactions {
        nextToken
        __typename
      }
      Bookings {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createProvider = /* GraphQL */ `
  mutation CreateProvider(
    $input: CreateProviderInput!
    $condition: ModelProviderConditionInput
  ) {
    createProvider(input: $input, condition: $condition) {
      id
      userID
      things_we_can_do
      pay_rate
      provider_star_rating
      likes
      available_now
      Requests {
        nextToken
        __typename
      }
      Favorites {
        nextToken
        __typename
      }
      Transactions {
        nextToken
        __typename
      }
      Bookings {
        nextToken
        __typename
      }
      User {
        id
        firstname
        lastname
        age
        about_me
        nickname
        interests
        city
        state
        likes
        user_star_rating
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      providerUserId
      owner
      __typename
    }
  }
`;
export const updateProvider = /* GraphQL */ `
  mutation UpdateProvider(
    $input: UpdateProviderInput!
    $condition: ModelProviderConditionInput
  ) {
    updateProvider(input: $input, condition: $condition) {
      id
      userID
      things_we_can_do
      pay_rate
      provider_star_rating
      likes
      available_now
      Requests {
        nextToken
        __typename
      }
      Favorites {
        nextToken
        __typename
      }
      Transactions {
        nextToken
        __typename
      }
      Bookings {
        nextToken
        __typename
      }
      User {
        id
        firstname
        lastname
        age
        about_me
        nickname
        interests
        city
        state
        likes
        user_star_rating
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      providerUserId
      owner
      __typename
    }
  }
`;
export const deleteProvider = /* GraphQL */ `
  mutation DeleteProvider(
    $input: DeleteProviderInput!
    $condition: ModelProviderConditionInput
  ) {
    deleteProvider(input: $input, condition: $condition) {
      id
      userID
      things_we_can_do
      pay_rate
      provider_star_rating
      likes
      available_now
      Requests {
        nextToken
        __typename
      }
      Favorites {
        nextToken
        __typename
      }
      Transactions {
        nextToken
        __typename
      }
      Bookings {
        nextToken
        __typename
      }
      User {
        id
        firstname
        lastname
        age
        about_me
        nickname
        interests
        city
        state
        likes
        user_star_rating
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      providerUserId
      owner
      __typename
    }
  }
`;
