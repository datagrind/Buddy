// import { generateClient } from "aws-amplify/api";
// import { updateReservations, createReservations, deleteReservations } from './graphql/mutations';
// import { listReservationss, getReservations } from "./graphql/queries";

// const client = generateClient()


// //CREATE

// const newReservations = await client.graphql({
//     query: createReservations,
//     variables: {
//         input: {
// 		"transaction_id": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
// 		"future_date_time": "1970-01-01T12:30:23.999Z",
// 		"Transactions": /* Provide a Transactions instance here */,
// 		"userID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
// 		"providerID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
// 	}
//     }
// });

// //READ

//     // List all items
// const allReservationss = await client.graphql({
//     query: listReservationss
// });
// console.log(allReservations);

//     // Get a specific item
// const oneReservations = await client.graphql({
//     query: getReservations,
//     variables: { id: 'YOUR_RECORD_ID' }
// });

// //UPDATE

// const updatedReservations = await client.graphql({
//     query: updateReservations,
//     variables: {
//         input: {
// 		"transaction_id": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
// 		"future_date_time": "1970-01-01T12:30:23.999Z",
// 		"Transactions": /* Provide a Transactions instance here */,
// 		"userID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
// 		"providerID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d"
// 	}
//     }
// });

// //DELETE

// const deletedReservations = await client.graphql({
//     query: deleteReservations,
//     variables: {
//         input: {
//             id: "YOUR_RECORD_ID"
//         }
//     }
// });

