import { configureStore } from "@reduxjs/toolkit";
import providerReducer from "./slices/searchProviderSlice/searchProviderSlice"
import profileDetailsReducer from './slices/profileDetailsSlice/profileDetailsSlice'
import favoriteReducer from "./slices/favoriteSlice/favoriteSlice";
import photoReducer from './slices/photoSlice/photoSlice'




export const store = configureStore({
    reducer: {
        providerData: providerReducer,
        profileDetailsData: profileDetailsReducer,
        favoriteData: favoriteReducer,
        photoData: photoReducer,
    }
})



export const RootState = store.getState
export const AppDispatch = store.dispatch