import { Button, Input, FormControl } from "native-base"
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { confirmSignUp } from 'aws-amplify/auth';
import { useEffect, useState } from "react";
import Onboarding1 from "../Onboarding/Onboarding1";
import { autoSignIn } from "aws-amplify/auth";
import { signIn } from 'aws-amplify/auth';



const Verify = ( { username, login, name, password }) => {

    console.log("Verify.username: ", username)

    const [signUpLoad, setSignUpLoad] = useState(true)
    const [confirmation, setConfirmation] = useState('')
    const [isConfirmed, setIsConfirmed] = useState(false)

    async function handleSignUpConfirmation(username, confirmationCode) {
        console.log("Verify.handleSignUpConfirmation: sending...");
    
        try {
            const { isSignUpComplete, nextStep } = await confirmSignUp({ username: username, confirmationCode: confirmationCode });
    
            if (isSignUpComplete) {
                console.log("User is signed up completely");
    
                // Wait for autoSignIn to complete before proceeding to the next step
                // await handleAutoSignIn();
                login(username ? username : 'Friend')

    
                // Navigate to the next step or perform any action accordingly
            } else if (nextStep) {
                console.log("Additional steps are required:", nextStep);
                // Handle additional steps, e.g., updating attributes
            }
        } catch (error) {
            setSignUpLoad(false);
            console.log('Error confirming sign up:', error);
        }
    }

    async function handleSignIn() {
        // setIsConfirmed(true);
        console.log("handleSIgnIn.password: ", password)
        console.log("handleSIgnIn.username: ", username)
        try {
          const { isSignedIn, nextStep } = await signIn({username, password,   options: {
            authFlowType: 'USER_PASSWORD_AUTH'
        }});
          if (isSignedIn) {
            console.log("signIn.isSignedIn: ", isSignedIn);
            login(username)
            setIsConfirmed(true);
          }
        } catch (error) {
          console.log('signIn: error signing in:', error);
        }
      }

    async function handleAutoSignIn() {
        // const signInOutput = await autoSignIn(username, password);
        // console.log("Verify.handleAutoSignIn.signInOutput:", signInOutput);
        try {
            const signInOutput = await autoSignIn();
            console.log("Verify.handleAutoSignIn.signInOutput:", signInOutput);
            
            
            // Check if the user is signed in successfully
            if (signInOutput.isSignedIn) {
                console.log("User is signed in successfully");
                login(username ? username : 'Friend')
                // Handle any additional steps after successful sign-in
                // For example, you can call your own `signIn` function here if needed
                // await handleSignIn();

            }
    
            // Log the signInOutput for debugging purposes
        } catch (error) {
            console.log("handleAutoSignIn:", error);
        }
    }

    const falseSignUp = () => {
        return <Text> Failed Sign Up ....</Text>
    }

    const handleConfirm = (event) => {
        event.persist();
        handleSignUpConfirmation(username, confirmation);
    };

    return ( !isConfirmed ? <View style={styles.container}>
        <Text> Verify </Text>
        <FormControl>
            <FormControl.Label>Confirmation Code</FormControl.Label>
            <Input type='string' onChangeText={(text) => setConfirmation(text)}/>
        </FormControl>
        <Button onPress={handleConfirm}> Confirm </Button>
        <Button onPress={handleSignIn}> autoSignIn </Button>
    </View> :
    <Onboarding1 login={login} name={name}/>
    )
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Verify