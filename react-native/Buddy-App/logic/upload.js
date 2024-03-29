import { uploadData } from 'aws-amplify/storage';



export const upload = async ( { filename, file }) => {

    try {
        const result = await uploadData({
            key: filename,
            data: file,
            options: {
            accessLevel: 'private'
            }
        }).result;
        console.log('Succeeded: ', result);
    } catch (error) {
        console.log('Error : ', error);
    }
}