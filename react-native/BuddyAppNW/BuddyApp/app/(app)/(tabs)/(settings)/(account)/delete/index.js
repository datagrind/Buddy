import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';
import { Link, useRouter } from 'expo-router'
import { deleteUser } from 'aws-amplify/auth';
import { Alert } from 'react-native';
import { useSession } from '../../../../../../ctx'


export default function Page() {

    const router = useRouter()
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

  return (
<View className="bg-white h-full w-full flex justify-center p-5 ">
      <View className="flex items-center mb-10">
                <Animated.Text 
                    entering={FadeInUp.duration(1000).springify()} 
                    className=" font-bold tracking-wider text-5xl mb-5">
                        Account Deletion
                </Animated.Text>
                <Animated.Text 
                    entering={FadeInUp.duration(1000).springify()} 
                    className=" tracking-wider text-xl mb-3">
                        Account information below
                </Animated.Text>
                <Animated.View 
                    entering={FadeInDown.delay(600).duration(1000).springify()} 
                    className="flex-row justify-center mb-3">

                    <Text>Delete Account </Text>
                    <TouchableOpacity onPress={()=> handleDeleteUserPrompt()}>
                        <Text className="text-red-600">Click Here</Text>
                    </TouchableOpacity>
                </Animated.View>
                {/* <Animated.View 
                    entering={FadeInDown.delay(600).duration(1000).springify()} 
                    className="flex-row justify-center">
                      <TouchableOpacity onPress={()=> router.back()} >
                          <Text className="text-red-600">Go Back</Text>
                      </TouchableOpacity>
                </Animated.View> */}
            </View>
    </View>
  )
}