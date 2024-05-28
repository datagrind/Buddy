// import { generateClient } from "aws-amplify/api";
// import { deleteRatings, createRatings, updateRatings, deleteRatings } from './graphql/mutations';
// import { listRatingss, getRatings } from "./graphql/queries";

// const client = generateClient()


// //CREATE

// const newRatings = await client.graphql({
//     query: createRatings,
//     variables: {
//         input: {
// 		"stars": 1020,
// 		"review": "Lorem ipsum dolor sit amet",
// 		"providerID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
// 		"userID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
// 	}
//     }
// });

// //READ

//     // List all items
// const allRatingss = await client.graphql({
//     query: listRatingss
// });
// console.log(allRatings);

//     // Get a specific item
// const oneRatings = await client.graphql({
//     query: getRatings,
//     variables: { id: 'YOUR_RECORD_ID' }
// });

// //UPDATE

// const updatedRatings = await client.graphql({
//     query: updateRatings,
//     variables: {
//         input: {
// 		"stars": 1020,
// 		"review": "Lorem ipsum dolor sit amet",
// 		"providerID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
// 		"userID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
// 	}
//     }
// });

// //DELETE

// const deletedRatings = await client.graphql({
//     query: deleteRatings,
//     variables: {
//         input: {
//             id: "YOUR_RECORD_ID"
//         }
//     }
// });

