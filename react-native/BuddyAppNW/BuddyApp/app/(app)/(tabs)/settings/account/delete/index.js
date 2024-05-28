import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
// import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';
import { deleteUser } from 'aws-amplify/auth';
import { Alert } from 'react-native';
import { Stack } from 'expo-router';
import { useSession } from '../../../../../../ctx';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Delete() {

    const { handleAmplifySignOut } = useSession()


    async function handleDeleteUserPrompt() {
        Alert.alert(
          'Confirm Deletion',
          'Are you sure you want to delete your account? This is irreversable.',
          [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'Delete',
              onPress: handleDeleteUser,
              style: 'destructive',
            },
          ],
          { cancelable: true }
        );
      }
      
      async function handleDeleteUser() {
        try {
          await deleteUser();
          // Optionally, navigate to a different screen or perform other actions after deletion
          Alert.alert('You have been signed out')
          handleAmplifySignOut()
        } catch (error) {
          console.log(error);
        }
      }

      return(
        <SafeAreaView style={{backgroundColor: 'white', paddingHorizontal: 20, justifyContent: 'center', flex: 1,}}>
        <Stack.Screen options={{name: "delete", headerTitle: '', title: ''}} > </Stack.Screen>
            <View className="flex-1 items-center justify-around mb-10">
                <View>
                    {/* <Animated.Text  */}
                        {/* entering={FadeInUp.duration(1000).springify()}  */}
                        {/* className=" font-bold tracking-wider text-5xl mb-5"> */}
                            <Text>Account Deletion</Text>
                    {/* </Animated.Text> */}
                </View>
                <View className="flex  w-full items-start h-5/6">
                    {/* <Animated.Text  */}
                        {/* entering={FadeInUp.duration(1000).springify()}  */}
                        {/* className=" tracking-wider text-xl mb-3"> */}
                            <Text>Account information below</Text>
                    {/* </Animated.Text> */}
                    {/* <Animated.View  */}
                        {/* entering={FadeInDown.delay(600).duration(1000).springify()}  */}
                        {/* className="flex-row justify-center mb-3"> */}

                        <Text>Delete Account </Text>
                        <TouchableOpacity onPress={()=> handleDeleteUserPrompt()}>
                            <Text className="text-red-600">Click Here</Text>
                        </TouchableOpacity>
                    {/* </Animated.View> */}
                    {/* <Animated.View 
                        entering={FadeInDown.delay(600).duration(1000).springify()} 
                        className="flex-row justify-center">
                        <TouchableOpacity onPress={()=> router.back()} >
                            <Text className="text-red-600">Go Back</Text>
                        </TouchableOpacity>
                    </Animated.View> */}
                </View>
            </View>
          </SafeAreaView>
    )
}