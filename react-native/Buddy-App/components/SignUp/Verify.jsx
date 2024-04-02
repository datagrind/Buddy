import { Button, Input, FormControl, Heading } from "native-base"
import { Alert, View } from "react-native";
import { StyleSheet } from "react-native";
import { confirmSignUp } from 'aws-amplify/auth';
import { useState } from "react";
import Onboarding1 from "../Onboarding/Onboarding1";




const Verify = ( { username, login, name }) => {

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
                setIsConfirmed(true)
    
                // Wait for autoSignIn to complete before proceeding to the next step

    
                // Navigate to the next step or perform any action accordingly
            } else if (nextStep) {
                console.log("Additional steps are required:", nextStep);
                // Handle additional steps, e.g., updating attributes
            }
        } catch (error) {
            // setSignUpLoad(false);
            setIsConfirmed(false)
            Alert.alert(error.message)
            console.log('Error confirming sign up:', error);
        }
    }


    const handleConfirm = (event) => {
        event.persist();
        handleSignUpConfirmation(username, confirmation);
    };

    return ( !isConfirmed ? <View style={styles.container}>
        <Heading> Verify </Heading>
        <FormControl>
            <FormControl.Label>Confirmation Code</FormControl.Label>
            <Input type='string' onChangeText={(text) => setConfirmation(text)}/>
        </FormControl>
        <Button style={styles.button} onPress={handleConfirm}> Confirm </Button>
    </View> :
    <Onboarding1 login={login} name={name} username={username}/>
    )
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 15,
    backgroundColor: 'red',
    width: 120,
  }
})

export default Verify