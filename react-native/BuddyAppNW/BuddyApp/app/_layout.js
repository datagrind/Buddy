
import React from 'react'
import { Slot } from "expo-router";
import { SessionProvider } from '../ctx';
import "../global.css"
import { Amplify } from 'aws-amplify';
import amplifyconfig from '../src/amplifyconfiguration.json';
import { Authenticator } from '@aws-amplify/ui-react-native';
Amplify.configure(amplifyconfig);


export default function Root() {

    return (
      <Authenticator.Provider>
        <SessionProvider>
          <Slot/>
        </SessionProvider>
      </Authenticator.Provider>
      );
}