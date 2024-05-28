// import { generateClient } from "aws-amplify/api";
// import { listFavoritess, getFavorites } from "./graphql/queries";
// import { createFavorites, updateFavorites, deleteFavorites } from './graphql/mutations';

// const client = generateClient()


// //CREATE

// const newFavorites = await client.graphql({
//     query: createFavorites,
//     variables: {
//         input: {
// 		"user_id": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
// 		"providerID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
// 		"userID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
// 	}
//     }
// });


// //READ

//     // List all items
// const allFavoritess = await client.graphql({
//     query: listFavoritess
// });
// console.log(allFavorites);

//     // Get a specific item
// const oneFavorites = await client.graphql({
//     query: getFavorites,
//     variables: { id: 'YOUR_RECORD_ID' }
// });

// //UPDATE

// const updatedFavorites = await client.graphql({
//     query: updateFavorites,
//     variables: {
//         input: {
// 		"user_id": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
// 		"providerID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
// 		"userID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
// 	}
//     }
// });

// //DELETE

// const deletedFavorites = await client.graphql({
//     query: deleteFavorites,
//     variables: {
//         input: {
//             id: "YOUR_RECORD_ID"
//         }
//     }
// });