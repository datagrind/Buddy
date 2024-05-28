import { createSlice } from "@reduxjs/toolkit";
import { datesData } from "../../../constants";
import { useEffect } from "react";


const searchProviderSlice = createSlice({
    name: 'providerData',
    initialState: {
        data: datesData,
        subData: datesData
    },
    reducers: {
        setProviderState: (state, action) => {
            state.data = action.payload 
        },
        setSubProviderState: (state, action) => {
            state.subData = action.payload 
        },
        resetProviderState: (state, action) => {
            state.data = datesData;
        },
        resetSubProviderState: (state, action) => {
            state.subData = datesData;
        },
    }
});


export const { setProviderState, setSubProviderState, resetProviderState, resetSubProviderState } = searchProviderSlice.actions


export default searchProviderSlice.reducer