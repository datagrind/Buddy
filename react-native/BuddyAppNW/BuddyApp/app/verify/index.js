import { View, Text, Alert, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { confirmSignUp } from 'aws-amplify/auth';
import { useLocalSearchParams, useRouter } from 'expo-router'
<<<<<<< HEAD
// import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';
=======
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9


export default function Verify() {

    const [confirmation, setConfirmation] = useState('')
    const { username, preferred_username, given_name } = useLocalSearchParams();
    const router = useRouter()

    async function handleSignUpConfirmation(username, confirmationCode) {
        console.log("Verify.handleSignUpConfirmation: sending...");
    
        try {
            const { isSignUpComplete, nextStep } = await confirmSignUp({ username: username, confirmationCode: confirmationCode });
    
            if (isSignUpComplete) {
                console.log("User is signed up completely");
                
                // Wait for autoSignIn to complete before proceeding to the next step
                
                
                // Navigate to the next step or perform any action accordingly
              } 
            if (nextStep) {
              console.log("verify.nextStep:");
              // router.push('/onboarding')
              router.push({pathname: '/onboarding', params: { preferred_username: preferred_username, given_name: given_name }})

              // Handle additional steps, e.g., updating attributes
            }
        } catch (error) {
            // setSignUpLoad(false);
            Alert.alert(error.message)
            console.log('Error confirming sign up:', error);
        }
    }


    const handleConfirm = (event) => {
        event.persist();
        handleSignUpConfirmation(username, confirmation);
    };

    const handleResendCode = () => {
      console.log("resend confirmation code...")
    }

  return (
    <View className="flex-1 justify-center items-center px-5">
      <View className="flex items-center mb-5">
<<<<<<< HEAD
        {/* <Animated.Text 
            entering={FadeInUp.duration(1000).springify()}  */}
            {/* className=" font-bold tracking-wider text-center text-3xl mb-10"> */}
            <Text>Enter Verification Code</Text>
        {/* </Animated.Text> */}
      </View>
      {/* <Animated.View 
          entering={FadeInDown.delay(600).duration(1000).springify()} 
          className=" p-5 rounded-2xl w-full mb-5 items-center"
      > */}
=======
        <Animated.Text 
            entering={FadeInUp.duration(1000).springify()} 
            className=" font-bold tracking-wider text-center text-3xl mb-10">
            Enter Verification Code
        </Animated.Text>
      </View>
      <Animated.View 
          entering={FadeInDown.delay(600).duration(1000).springify()} 
          className=" p-5 rounded-2xl w-full mb-5 items-center"
      >
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9
        <TextInput
          className="border-b-2 border-gray-500 px-3 py-2 w-4/5 mb-5 text-center"
          placeholder="Confirmation Code"
          value={confirmation}
          onChangeText={setConfirmation}
        />
<<<<<<< HEAD
      {/* </Animated.View> */}
      {/* <Animated.View 
        entering={FadeInDown.delay(600).duration(1000).springify()} 
        className=" p-5 rounded-2xl w-full mb-5"
        > */}
=======
      </Animated.View>
      <Animated.View 
        entering={FadeInDown.delay(600).duration(1000).springify()} 
        className=" p-5 rounded-2xl w-full mb-5"
        >
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9
      <TouchableOpacity
        className="bg-red-600 py-2 px-5 rounded-full"
        onPress={handleConfirm}
      >
        <Text className="text-white font-bold text-center">Submit</Text>
      </TouchableOpacity>
<<<<<<< HEAD
      {/* </Animated.View>
      <Animated.View 
            entering={FadeInDown.delay(600).duration(1000).springify()} 
            className=" p-5 rounded-2xl w-full mb-5"
        > */}
=======
      </Animated.View>
      <Animated.View 
            entering={FadeInDown.delay(600).duration(1000).springify()} 
            className=" p-5 rounded-2xl w-full mb-5"
        >
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9
          <TouchableOpacity
              className="mt-4"
              onPress={() => handleResendCode}
          >
              <Text className=" text-center underline">Resend Code</Text>
          </TouchableOpacity>
<<<<<<< HEAD
        {/* </Animated.View>
        <Animated.View 
              entering={FadeInDown.delay(600).duration(1000).springify()} 
              className="flex-col justify-center"> */}
=======
        </Animated.View>
        <Animated.View 
              entering={FadeInDown.delay(600).duration(1000).springify()} 
              className="flex-col justify-center">
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9
              <View className="flex-row justify-center mb-3">
                  <Text>Go back to signup: </Text>
                  <TouchableOpacity onPress={()=>router.back()}>
                      <Text className="text-red-600">Click Here</Text>
                  </TouchableOpacity>
              </View>
<<<<<<< HEAD
          {/* </Animated.View> */}
=======
          </Animated.View>
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9
    </View>
  )
}