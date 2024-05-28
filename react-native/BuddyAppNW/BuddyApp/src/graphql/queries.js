/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRating = /* GraphQL */ `
  query GetRating($id: ID!) {
    getRating(id: $id) {
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
export const listRatings = /* GraphQL */ `
  query ListRatings(
    $filter: ModelRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        stars
        review
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRequest = /* GraphQL */ `
  query GetRequest($id: ID!) {
    getRequest(id: $id) {
      id
      providerID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRequests = /* GraphQL */ `
  query ListRequests(
    $filter: ModelRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        providerID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getFavorite = /* GraphQL */ `
  query GetFavorite($id: ID!) {
    getFavorite(id: $id) {
      id
      providerID
      userID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listFavorites = /* GraphQL */ `
  query ListFavorites(
    $filter: ModelFavoriteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFavorites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        providerID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const requestsByProviderID = /* GraphQL */ `
  query RequestsByProviderID(
    $providerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    requestsByProviderID(
      providerID: $providerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        providerID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const requestsByUserID = /* GraphQL */ `
  query RequestsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    requestsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        providerID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const favoritesByProviderID = /* GraphQL */ `
  query FavoritesByProviderID(
    $providerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFavoriteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    favoritesByProviderID(
      providerID: $providerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        providerID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const favoritesByUserID = /* GraphQL */ `
  query FavoritesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFavoriteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    favoritesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        providerID
        userID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
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
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const transactionsByUserID = /* GraphQL */ `
  query TransactionsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    transactionsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const transactionsByProviderID = /* GraphQL */ `
  query TransactionsByProviderID(
    $providerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    transactionsByProviderID(
      providerID: $providerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getReservation = /* GraphQL */ `
  query GetReservation($id: ID!) {
    getReservation(id: $id) {
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
export const listReservations = /* GraphQL */ `
  query ListReservations(
    $filter: ModelReservationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReservations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        future_date_time
        userID
        providerID
        createdAt
        updatedAt
        reservationTransactionsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const reservationsByUserID = /* GraphQL */ `
  query ReservationsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelReservationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reservationsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        future_date_time
        userID
        providerID
        createdAt
        updatedAt
        reservationTransactionsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const reservationsByProviderID = /* GraphQL */ `
  query ReservationsByProviderID(
    $providerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelReservationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    reservationsByProviderID(
      providerID: $providerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        future_date_time
        userID
        providerID
        createdAt
        updatedAt
        reservationTransactionsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getProvider = /* GraphQL */ `
  query GetProvider($id: ID!) {
    getProvider(id: $id) {
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
export const listProviders = /* GraphQL */ `
  query ListProviders(
    $filter: ModelProviderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProviders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        things_we_can_do
        pay_rate
        provider_star_rating
        likes
        available_now
        createdAt
        updatedAt
        providerUserId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
