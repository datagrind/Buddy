// import { generateClient } from "aws-amplify/api";
// import { deleteRequests, updateRequests, createRequests } from './graphql/mutations';
// import { listRequestss, getRequests } from "../../../amplify/backend/api/BuddyAppNW/";

// const client = generateClient()



// //CREATE

// const newRequests = await client.graphql({
//     query: createRequests,
//     variables: {
//         input: {
// 		"user_id": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
// 		"providerID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
// 		"userID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
// 	}
//     }
// });;

// //READ

//     // List all items
// const allRequestss = await client.graphql({
//     query: listRequestss
// });
// console.log(allRequests);

//     // Get a specific item
// const oneRequests = await client.graphql({
//     query: getRequests,
//     variables: { id: 'YOUR_RECORD_ID' }
// });

// //UPDATE

// const updatedRequests = await client.graphql({
//     query: updateRequests,
//     variables: {
//         input: {
// 		"user_id": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
// 		"providerID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
// 		"userID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
// 	}
//     }
// });

// //DELETE

// const deletedRequests = await client.graphql({
//     query: deleteRequests,
//     variables: {
//         input: {
//             id: "YOUR_RECORD_ID"
//         }
//     }
// });

