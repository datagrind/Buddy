import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { userData } from "../../../constants";


const profileDetailsSlice = createSlice({
    name: 'profileDetailsData',
    initialState: {
        data: userData,
        subData: userData
    },
    reducers: {
        setprofileDetailsState: (state, action) => {
            state.data = action.payload 
        },
        setSubprofileDetailsState: (state, action) => {
            state.subData = action.payload 
        },
        resetprofileDetailsState: (state, action) => {
            state.data = userData;
        },
        resetSubprofileDetailsState: (state, action) => {
            state.subData = userData;
        },
    }
});


export const { setprofileDetailsState, setSubprofileDetailsState, resetprofileDetailsState, resetSubprofileDetailsState } = profileDetailsSlice.actions


export default profileDetailsSlice.reducer