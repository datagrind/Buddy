import {
    useAuthenticator
  } from '@aws-amplify/ui-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Pressable, Text, StyleSheet } from 'react-native';

  // retrieves only the current value of 'user' from 'useAuthenticator'
const userSelector = (context) => [context.user, console.log("SignOutButton.userSelector.context: ", context)];
console.log("SignOutButton.userSelector: ", userSelector)

const SignOutButton = ( { userData }) => {
  const { user, signOut } = useAuthenticator(userSelector);
  console.log("SignoutButton.userData: ", userData)
  return (
    <Pressable onPress={signOut} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>
        Hello, {userData[0]}! Click here to sign out!
      </Text>
    </Pressable>
  );
};

export default SignOutButton

// export default () => {

//   return (
//       <SafeAreaView style={styles.container}>
//         <View style={styles.container}>
//           <SignOutButton />
//         </View>
//       </SafeAreaView>
  
//     )

// }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%'
    },
  })
