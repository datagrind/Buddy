import { getUrl, list } from "@aws-amplify/storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setfilePathState, setmainPhotoState, setphotoState } from "../../slices/photoSlice/photoSlice";


const arraysEqual = (arr1, arr2) => {
    if (arr1.length === 0 || arr2 ===0 ) return true
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  };


async function listS3Image() {
    try {
      const response = await list({
        path: ({identityId}) => `private/${identityId}/album/2024/`,
      });
      const newArray = response.items.map(item => item.path);
    return newArray
    } catch(error) {
      console.log('Error:', error);
    }
  }


const getUrlResult = createAsyncThunk(
    'photoData/getUrlResult',
    async (_, { getState, dispatch }) => {
        const state = getState().photoData
        const pathArray = await listS3Image();
        const urlArray = []
        for (const path of pathArray) {
            try {
                const result = await getUrl({
                    path: path,
                    options: {
                        validateObjectExistence: true,
                        expiresIn: 20,
                        useAccelerateEndpoint: false,
                    }
                });
                urlArray.push(result.url.toString())
            } catch (error) {
                console.log('Error:', error.message);
                if (error.message === 'NotFound') {
                    dispatch(setmainPhotoState(''));
                }
            }
        }

            if (!arraysEqual(urlArray, state.data.photos)){
                dispatch(setmainPhotoState(urlArray[0]));
                dispatch(setphotoState(urlArray))
            }
            if (!arraysEqual(pathArray, state.data.filePath)){
                dispatch(setfilePathState(pathArray))
            }

        return urlArray;
    }
);


export { getUrlResult }
