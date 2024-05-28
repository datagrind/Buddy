import { createSlice } from "@reduxjs/toolkit";


const photoSlice = createSlice({
    name: 'photoData',
    initialState: {
        data: {
            photos: [],
            filePath: [],
            mainPhoto:'',
        },
        subData: {
            photos: []
        },
        status: 'idle',
        error: null,
    },
    reducers: {
        addphotoState: (state, action) => {
            let newArray = []
             newArray.push(action.payload);
            state.data.photos = newArray
        },
        setphotoState: (state, action) => {
            let newArray = action.payload;
            state.data.photos = newArray
        },
        addfilePathState: (state, action) => {
            let newArray = []
             newArray.push(action.payload);
            state.data.filePath = newArray
        },
        setfilePathState: (state, action) => {
            let newArray = action.payload;
            state.data.filePath = newArray
        },
        setmainPhotoState: (state, action) => {
            state.data.mainPhoto = action.payload
        },
        addSubphotoState: (state, action) => {
            let newArray = []
             newArray.push(action.payload);
            state.subData.photos = newArray
        },
        setSubphotoState: (state, action) => {
            let newArray = action.payload;
            state.subData.photos = newArray
        },
        removephotoState: (state, action) => {
            if (state.data.photos.length <= 1){
                state.data.photos = []
            } else {
                let array = state.data.photos.filter(item => item !== action.payload);
                state.data.photos = array
            }
        },
        removefilePathState: (state, action) => {
            if (state.data.filePath.length <= 1){
                state.data.filePath = []
            } else {
                let array = state.data.filePath.filter(item => item !== action.payload);
                state.data.filePath = array
            }
        },
        
        resetphotoState: (state, action) => {
            state.data.photos = [];
        },
        resetfilePathState: (state, action) => {
            state.data.filePath = [];
        },
        resetSubphotoState: (state, action) => {
            state.subData.photos = [];
        },
    },
    extraReducers: (builder) => {
        const getUrlResultActionTypes = {
          pending: 'photoData/getUrlResult/pending',
          fulfilled: 'photoData/getUrlResult/fulfilled',
          rejected: 'photoData/getUrlResult/rejected',
        };
        builder
          .addCase(getUrlResultActionTypes.pending, (state) => {
            state.status = 'loading';
            state.error = null;
          })
          .addCase(getUrlResultActionTypes.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.error = null;
            state.data.photos = action.payload;
          })
          .addCase(getUrlResultActionTypes.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      },});





    export const { 
        addphotoState, 
        setphotoState, 
        addfilePathState, 
        setfilePathState, 
        setmainPhotoState, 
        addSubphotoState, 
        setSubphotoState, 
        removephotoState, 
        removefilePathState, 
        resetphotoState, 
        resetfilePathState, 
        resetSubphotoState 
    } = photoSlice.actions



export default photoSlice.reducer