/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRating = /* GraphQL */ `
  subscription OnCreateRating($filter: ModelSubscriptionRatingFilterInput) {
    onCreateRating(filter: $filter) {
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
export const onUpdateRating = /* GraphQL */ `
  subscription OnUpdateRating($filter: ModelSubscriptionRatingFilterInput) {
    onUpdateRating(filter: $filter) {
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
export const onDeleteRating = /* GraphQL */ `
  subscription OnDeleteRating($filter: ModelSubscriptionRatingFilterInput) {
    onDeleteRating(filter: $filter) {
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
export const onCreateRequest = /* GraphQL */ `
  subscription OnCreateRequest($filter: ModelSubscriptionRequestFilterInput) {
    onCreateRequest(filter: $filter) {
      id
      providerID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateRequest = /* GraphQL */ `
  subscription OnUpdateRequest($filter: ModelSubscriptionRequestFilterInput) {
    onUpdateRequest(filter: $filter) {
      id
      providerID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteRequest = /* GraphQL */ `
  subscription OnDeleteRequest($filter: ModelSubscriptionRequestFilterInput) {
    onDeleteRequest(filter: $filter) {
      id
      providerID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateFavorite = /* GraphQL */ `
  subscription OnCreateFavorite($filter: ModelSubscriptionFavoriteFilterInput) {
    onCreateFavorite(filter: $filter) {
      id
      providerID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateFavorite = /* GraphQL */ `
  subscription OnUpdateFavorite($filter: ModelSubscriptionFavoriteFilterInput) {
    onUpdateFavorite(filter: $filter) {
      id
      providerID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteFavorite = /* GraphQL */ `
  subscription OnDeleteFavorite($filter: ModelSubscriptionFavoriteFilterInput) {
    onDeleteFavorite(filter: $filter) {
      id
      providerID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
  ) {
    onCreateTransaction(filter: $filter) {
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
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
  ) {
    onUpdateTransaction(filter: $filter) {
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
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
  ) {
    onDeleteTransaction(filter: $filter) {
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
export const onCreateReservation = /* GraphQL */ `
  subscription OnCreateReservation(
    $filter: ModelSubscriptionReservationFilterInput
  ) {
    onCreateReservation(filter: $filter) {
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
export const onUpdateReservation = /* GraphQL */ `
  subscription OnUpdateReservation(
    $filter: ModelSubscriptionReservationFilterInput
  ) {
    onUpdateReservation(filter: $filter) {
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
export const onDeleteReservation = /* GraphQL */ `
  subscription OnDeleteReservation(
    $filter: ModelSubscriptionReservationFilterInput
  ) {
    onDeleteReservation(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateProvider = /* GraphQL */ `
  subscription OnCreateProvider(
    $filter: ModelSubscriptionProviderFilterInput
    $owner: String
  ) {
    onCreateProvider(filter: $filter, owner: $owner) {
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
export const onUpdateProvider = /* GraphQL */ `
  subscription OnUpdateProvider(
    $filter: ModelSubscriptionProviderFilterInput
    $owner: String
  ) {
    onUpdateProvider(filter: $filter, owner: $owner) {
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
export const onDeleteProvider = /* GraphQL */ `
  subscription OnDeleteProvider(
    $filter: ModelSubscriptionProviderFilterInput
    $owner: String
  ) {
    onDeleteProvider(filter: $filter, owner: $owner) {
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
