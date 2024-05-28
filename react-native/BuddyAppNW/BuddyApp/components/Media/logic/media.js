// import { autoSignIn } from '@aws-amplify/auth';
// import { uploadData, getUrl, remove, list } from 'aws-amplify/storage';



// //PUBLIC
// const publicPushPull = async() => {

//     //UPLOAD
//     const upload = async() => {

//         try {
//             const result = await uploadData({
//                 key: filename,
//                 data: file
//             }).result;
//             console.log('Succeeded: ', result);
//         } catch (error) {
//             console.log('Error : ', error);
//         }
//     }

//     //DOWNLOAD

//     const getUrlResult = await getUrl({
//         key: filename,
//     });

//     //DELETE
//     const remove = async() => {

//         try {
//             await remove({ key: filename });
//         } catch (error) {
//             console.log('Error ', error);
//         }
        
//     }
//     //LIST || READ
//     const read = async() => {

//         try {
//             const result = await list({
//                 prefix: 'photos/'
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     }
        
// }

// //PROTECTED
// const protectedPushPull = async() => {
    
//     //UPLOAD
    
//     const upload = async() => {
//         try {
//             const result = await uploadData({
//                 key: filename,
//                 data: file,
//                 options: {
//                     accessLevel: 'protected'
//                 }
//             }).result;
//             console.log('Succeeded: ', result);
//         } catch (error) {
//             console.log('Error : ', error);
//         }
//     }
    
//     //DOWNLOAD
    
//     const getUrlResult = await getUrl({
//       key: filename,
//       options: {
//         accessLevel: 'protected' 
//         }
//     });

//     //REMOVE
//     const remove = async() => {

//         try {
//             await remove({
//                 key: filename,
//                 options: {
//                     accessLevel: 'protected'
//                 }
//             });
//         } catch (error) {
//             console.log('Error ', error);
//         }
//     }

//     //LIST
//     const read = async() => {

//         try {
//             const result = await list({
//                 prefix: 'photos/',
//                 options: {
//                     accessLevel: 'protected'
//                 }
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     }

// }
    
    
// //PRIVATE
// const privatePushPull = async() => {

//     //UPLOAD
//     const upload = async() => {

//         try {
//             const result = await uploadData({
//                 key: filename,
//                 data: file,
//                 options: {
//                     accessLevel: 'private'
//                 }
//             }).result;
//             console.log('Succeeded: ', result);
//         } catch (error) {
//             console.log('Error : ', error);
//         }
//     }
        
//     //DOWNLOAD

//     const getUrlResult = await getUrl({
//         key: filename,
//         options: {
//             accessLevel: 'private' 
//         }
//     });

//     //REMOVE
//     const remove = async() => {

//         try {
//             await remove({
//                 key: filename,
//                 options: {
//                     accessLevel: 'private'
//                 }
//             });
//         } catch (error) {
//             console.log('Error ', error);
//         }
//     }
    
//     //LIST
//     const read = async() =>{

//         try {
//             const response = await list({
//                 prefix: 'photos/',
//                 options:  {
//                     accessLevel: 'private',
//                     }
//                 })
//                 console.log('Listed Items:', response.items);
//             } catch(error) {
//                 console.log('Error :', error);
//             }
//         }
//     }   