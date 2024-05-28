import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";


const favoriteSlice = createSlice({
    name: 'favoriteData',
    initialState: {
        data: {
            id: []
        },
        subData: {
            id: []
        }
    },
    reducers: {
        addfavoriteState: (state, action) => {
            let newArray = [...state.data.id, action.payload];
            state.data.id = newArray
        },
        setSubfavoriteState: (state, action) => {
            let newArray = [...state.data.id, action.payload];
            state.subData.id = newArray
        },
        removefavoriteState: (state, action) => {
            if (state.data.id.length <= 1){
                state.data.id = []
            } else {
                let array = state.data.id.filter(item => item !== action.payload);
                state.data.id = array
            }
        },
        
        resetfavoriteState: (state, action) => {
            state.data.id = [];
        },
        resetSubfavoriteState: (state, action) => {
            state.subData.id = [];
        },
    }
});


export const { addfavoriteState, setSubfavoriteState, removefavoriteState, resetfavoriteState, resetSubfavoriteState } = favoriteSlice.actions


export default favoriteSlice.reducer