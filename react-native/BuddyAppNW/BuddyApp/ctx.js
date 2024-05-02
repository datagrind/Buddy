import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useStorageState } from './useStorageState';
import { signOut } from 'aws-amplify/auth';
import { signIn as amplifySignIn, fetchAuthSession, getCurrentUser, resetPassword } from '@aws-amplify/auth'
import { useRouter } from 'expo-router'



const AuthContext = React.createContext({
  handleAmplifySignIn: () => {},
  handleAmplifySignOut: () => {},
  handleResetPassword: () => {},
  session: '',
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}



export function SessionProvider(props) {
  
  const [[isLoading, session], setSession] = useStorageState('session');

  const router = useRouter()
  const userSelector = (context) => context; 

  async function handleResetPassword(username) {
    try {
      const output = await resetPassword({ username });
      handleResetPasswordNextSteps(output);
    } catch (error) {
      console.log(error);
    }
  }
  
  function handleResetPasswordNextSteps(output) {
    const { nextStep } = output;
    switch (nextStep.resetPasswordStep) {
      case 'CONFIRM_RESET_PASSWORD_WITH_CODE':
        const codeDeliveryDetails = nextStep.codeDeliveryDetails;
        console.log(
          `Confirmation code was sent to ${codeDeliveryDetails.deliveryMedium}`
        );
        // Collect the confirmation code from the user and pass to confirmResetPassword.
        break;
      case 'DONE':
        console.log('Successfully reset password.');
        break;
    }
  }

  async function currentSession() {
    try {
      const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};

      if (accessToken === undefined || idToken === undefined){
        return
      } else {
        setSession([accessToken, idToken])
      }

      } catch (err) {
      console.log("Err: currentSession: ", err);
    }
  }

  async function handleAmplifySignOut() {
    
    try {
      console.log("signingout...")
      await signOut();
      // await signOut({ global: true }); //signout of all devices
      setSession(null);
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  async function handleAmplifySignIn(username, password) {
    try {
      const { isSignedIn, nextStep } = await amplifySignIn({
        username: username, 
        password: password,   
        options: {
          authFlowType: 'USER_PASSWORD_AUTH',
          clientMetadata: {},
      }});
      if (isSignedIn) {
        //add animation transition in to app for first time
        console.log("isSignedIn: ", isSignedIn);
        currentSession()
      }
      if (nextStep){
        console.log("nextStep: signing in...")
        router.replace('/(app)');
      }
    } catch (error) {
        error.message === 'There is already a signed in user.' ? (console.log("already signedin: ", error.message, currentSession()), Alert.alert(error.message)) : (console.log('LoginScreen.signIn: error signing in:', error.message), Alert.alert(error.message));

    }
  }

  return (
    <AuthContext.Provider
      value={{
        handleAmplifySignIn,
        handleAmplifySignOut,
        handleResetPassword,
        session,
        isLoading,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}
