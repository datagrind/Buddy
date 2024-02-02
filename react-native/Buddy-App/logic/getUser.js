import axios from 'axios';

export const getUser = async () => {

  try {
    const response = await axios.get('https://randomuser.me/api/');
    const userData = response.data;

    // console.log('Raw Response:', response); // Log the entire response object
    // console.log('Parsed JSON Data:', userData); // Log the parsed JSON data

    return userData;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error to propagate it to the caller if needed
  }
}
