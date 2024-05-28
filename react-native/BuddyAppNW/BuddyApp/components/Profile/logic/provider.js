// import { createProviderProfile, updateProviderProfile, deleteProviderProfile} from './graphql/mutations';
// import { generateClient } from "aws-amplify/api";
// import { listProviderProfiles, getProviderProfile } from "./graphql/queries";

// const client = generateClient()


// //CREATE

// const newProvider = await client.graphql({
//     query: createProvider,
//     variables: {
//         input: {
// 		"user_id": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
// 		"things_we_can_do": [],
// 		"pay_rate": 123.45,
// 		"provider_star_rating": 1020,
// 		"likes": 1020,
// 		"available_now": true,
// 		"Requests": [],
// 		"Favorites": [],
// 		"BP_id": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
// 		"Reservations": [],
// 		"Ratings": [],
// 		"Transactions": []
// 	}
//     }
// });

// //READ

// 	// List all items
// const allProviders = await client.graphql({
//     query: listProviders
// });
// console.log(allProvider);

//     // Get a specific item
// const oneProvider = await client.graphql({
//     query: getProvider,
//     variables: { id: 'YOUR_RECORD_ID' }
// });


// //UPDATE

// const updatedProvider = await client.graphql({
//     query: updateProvider,
//     variables: {
//         input: {
// 		"user_id": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
// 		"things_we_can_do": [],
// 		"pay_rate": 123.45,
// 		"provider_star_rating": 1020,
// 		"likes": 1020,
// 		"available_now": true,
// 		"Requests": [],
// 		"Favorites": [],
// 		"BP_id": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
// 		"Reservations": [],
// 		"Ratings": [],
// 		"Transactions": []
// 	}
//     }
// });

// //DELETE

// const deletedProvider = await client.graphql({
//     query: deleteProvider,
//     variables: {
//         input: {
//             id: "YOUR_RECORD_ID"
//         }
//     }
// });