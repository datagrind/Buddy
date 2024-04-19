
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
import loggerMiddleware from '../middleware/logger'
import monitorReducerEnhancer from '../enhancers/monitorReducer'
import { store } from '../store'

Amplify.configure(amplifyconfig);

// const reducer = () => {}

// const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)
// const composedEnhancers = compose(middlewareEnhancer, monitorReducerEnhancer)

// const store = createStore(rootReducer, undefined, composedEnhancers) //createStore deprecated
// const store = configureStore(reducer, {})


export default function RootLayout() {

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