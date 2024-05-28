// import { generateClient } from "aws-amplify/api";
// import { listTransactionss, getTransactions } from "./graphql/queries";
// import { createTransactions, updateTransactions, deleteTransactions } from './graphql/mutations';

// const client = generateClient()



// //CRUD

// const newTransactions = await client.graphql({
//     query: createTransactions,
//     variables: {
//         input: {
// 		"provider_service_fee": 123.45,
// 		"user_service_fee": 123.45,
// 		"taxes": 123.45,
// 		"total": 123.45,
// 		"userID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
// 		"providerID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
// 		"Reservations": /* Provide a Reservations instance here */
// 	}
//     }
// });

// //READ

//     // List all items
// const allTransactionss = await client.graphql({
//     query: listTransactionss
// });
// console.log(allTransactions);

//     // Get a specific item
// const oneTransactions = await client.graphql({
//     query: getTransactions,
//     variables: { id: 'YOUR_RECORD_ID' }
// });

// //UPDATE

// const updatedTransactions = await client.graphql({
//     query: updateTransactions,
//     variables: {
//         input: {
// 		"provider_service_fee": 123.45,
// 		"user_service_fee": 123.45,
// 		"taxes": 123.45,
// 		"total": 123.45,
// 		"userID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
// 		"providerID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
// 		"Reservations": /* Provide a Reservations instance here */
// 	}
//     }
// });

// //DELETE

// const deletedTransactions = await client.graphql({
//     query: deleteTransactions,
//     variables: {
//         input: {
//             id: "YOUR_RECORD_ID"
//         }
//     }
// });

