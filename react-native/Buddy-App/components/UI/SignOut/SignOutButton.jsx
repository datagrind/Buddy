import {
    useAuthenticator
  } from '@aws-amplify/ui-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { signOut } from 'aws-amplify/auth';

  // retrieves only the current value of 'user' from 'useAuthenticator'
  
  const SignOutButton = ( { userData, onLogOut }) => {
    const userSelector = (context) => context; 
    // console.log("SignOutButton.userSelector: ", userSelector)
    // console.log("SignOutButton.onLogout: ", onLogOut)
    // const { user, signOut } = useAuthenticator(userSelector);
    // console.log("SignoutButton.userData: ", userData)

    // const logout  = () => onLogOut()

    async function handleSignOut() {
      // console.log("SignOutButton.handleSignOut.onLogout: ", onLogOut)
      
      try {
        console.log("handleSignOut: signingout...")
        console.log("handleSignOut.userSelector: ", userSelector.authStatus)
        await signOut();
        // await signOut({ global: true }); //signout of all devices
        onLogOut()
      } catch (error) {
        console.log('error signing out: ', error);
      }
    }

  return (
    <View style={styles.buttonContainer} >
      <Pressable onPress={handleSignOut} style={styles.button} >
        <Text style={styles.buttonText}>
          {/* Hello, {userData[0]}! Click here to sign out! */}
          Signout
        </Text>
      </Pressable>
    </View>
  );
};

export default SignOutButton


  const styles = StyleSheet.create({
    buttonContainer: {
      height: '100',
      width: '200',
      backgroundColor: 'red',
      borderRadius: 50,
      marginTop: 475,
      display: 'flex',

    },
    buttonText: {
      color: 'white',
      width: 200,
      height: 50,
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize: 16,
    },
    button: {
      // position: 'absolute',
      // zIndex: 6,
    }
  })
