// import { generateClient } from "aws-amplify/api";
// import { createUserProfile, updateUserProfile, deleteUserProfile } from '../../../src/graphql/mutations';
// import { listUserProfiles, getUserProfile } from "../../../src/graphql/queries";

// const client = generateClient()


// //CREATE

// const newUser = await client.graphql({
//     query: createUser,
//     variables: {
//         input: {
// 		"firstname": "Lorem ipsum dolor sit amet",
// 		"lastname": "Lorem ipsum dolor sit amet",
// 		"age": 1020,
// 		"about_me": "Lorem ipsum dolor sit amet",
// 		"nickname": "Lorem ipsum dolor sit amet",
// 		"interests": [],
// 		"city": "Lorem ipsum dolor sit amet",
// 		"state": "Lorem ipsum dolor sit amet",
// 		"likes": 1020,
// 		"Favorites": [],
// 		"Requests": [],
// 		"user_star_rating": 1020,
// 		"BU_id": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
// 		"Reservations": [],
// 		"Ratings": [],
// 		"Transactions": []
// 	}
//     }
// });
// //READ

//     // List all items
// const allUsers = await client.graphql({
//     query: listUsers
// });
// console.log(allUser);

//     // Get a specific item
// const oneUser = await client.graphql({
//     query: getUser,
//     variables: { id: 'YOUR_RECORD_ID' }
// });

// //UPDATE

// const updatedUser = await client.graphql({
//     query: updateUser,
//     variables: {
//         input: {
// 		"firstname": "Lorem ipsum dolor sit amet",
// 		"lastname": "Lorem ipsum dolor sit amet",
// 		"age": 1020,
// 		"about_me": "Lorem ipsum dolor sit amet",
// 		"nickname": "Lorem ipsum dolor sit amet",
// 		"interests": [],
// 		"city": "Lorem ipsum dolor sit amet",
// 		"state": "Lorem ipsum dolor sit amet",
// 		"likes": 1020,
// 		"Favorites": [],
// 		"Requests": [],
// 		"user_star_rating": 1020,
// 		"BU_id": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
// 		"Reservations": [],
// 		"Ratings": [],
// 		"Transactions": []
// 	}
//     }
// });

// //DELETE

// const deletedUser = await client.graphql({
//     query: deleteUser,
//     variables: {
//         input: {
//             id: "YOUR_RECORD_ID"
//         }
//     }
// });

