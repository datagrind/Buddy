
import React from 'react'
import { Slot } from "expo-router";
import { SessionProvider } from '../ctx';
import "../global.css"
import { Amplify } from 'aws-amplify';
import amplifyconfig from '../src/amplifyconfiguration.json';
import { Authenticator } from '@aws-amplify/ui-react-native';
import { Provider } from 'react-redux'
import { applyMiddleware, compose, configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from '../context/middleware/logger'
import { store } from '../context/store'
// import * as Updates from 'expo-updates'
import { useEffect } from 'react';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';






const handleError = (error, isFatal) => {
  // fetch
  console.log(error, isFatal);
  alert(error.name);
};

setJSExceptionHandler((error, isFatal) => {
  console.log('caught global error');
  handleError(error, isFatal);
}, true);

Amplify.configure(amplifyconfig);

// const reducer = () => {}

// const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)
// const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer)

// const store = createStore(rootReducer, undefined, composedEnhancers) //createStore deprecated
// const store = configureStore(reducer, {})


export default function RootLayout() {

  // async function onFetchUpdateAsync() {
  //   try {
  //     const update = await Updates.checkForUpdateAsync();

  //     if (update.isAvailable){
  //       await Updates.fetchUpdateAsync()
  //       await Updates.reloadAsync()
  //     } 

  //   } catch (error) {
  //     // alert( `Error fetching latest Expo update: ${ error } ` )
  //     console.log( `Error fetching latest Expo update: ${ error } ` )
  //   }
  // }

  // useEffect(()=>{
  //   onFetchUpdateAsync()
  // },[])
  


    return (
      <Provider store={store}>
        <Authenticator.Provider>
          <SessionProvider>
          <Slot/>
          </SessionProvider>
        </Authenticator.Provider>
      </Provider>
      );
}