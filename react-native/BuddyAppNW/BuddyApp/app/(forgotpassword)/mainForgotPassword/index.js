import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert} from 'react-native';
import { resetPassword } from 'aws-amplify/auth';
import { useRouter, Link, useLocalSearchParams } from 'expo-router'
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';

export default function PasswordRecoveryForm () {
  const [email, setEmail] = useState('');

  const router = useRouter()
  const params = useLocalSearchParams()

  const handlePasswordRecovery = () => {
    // Handle password recovery logic here
    console.log('Password recovery requested for:', email);
    handleResetPassword(email)
    // You can call your password recovery API endpoint or perform other actions here
  };


  async function handleResetPassword(username) {
    console.log("handleResetPassword.username: ", username)
    try {
      router.push({pathname: '/confirmation', params: { username: username }})
      const output = await resetPassword({ username });
      handleResetPasswordNextSteps(output);
    } catch (error) {
      console.log(error);
      Alert.alert(error.message)

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
  

  return (
    <KeyboardAvoidingView className="flex-1 " behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

      <View className="bg-white w-full h-full flex justify-center items-center p-5">
            <View className="flex items-center mb-5">
                <Animated.Text 
                    entering={FadeInUp.duration(1000).springify()} 
                    className=" font-bold tracking-wider text-5xl mb-10">
                        Password Recovery
                </Animated.Text>
                <Animated.Text 
                    entering={FadeInUp.duration(1000).springify()} 
                    className=" tracking-wider text-xl">
                        Please enter your email associated with your account below:
                </Animated.Text>
            </View>
          <Animated.View 
          entering={FadeInDown.delay(200).duration(1000).springify()} 
          className="bg-black/5 p-5 rounded-2xl w-full mb-3"
          >
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor={'gray'}
              value={email}
              onChangeText={(e) => {setEmail(e);}}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </Animated.View>

          <Animated.View 
            entering={FadeInDown.delay(400).duration(1000).springify()} 
            className=" p-5 rounded-2xl w-full mb-5"
          >
            <TouchableOpacity
              className="bg-red-600 px-6 py-3 rounded-md mb-3"
              onPress={handlePasswordRecovery}
            >
              <Text className="text-white font-bold text-center">Recover Password</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View 
              entering={FadeInDown.delay(600).duration(1000).springify()} 
              className="flex-col justify-center">
              <View className="flex-row justify-center mb-3">
                  <Text>Go back to login: </Text>
                  <TouchableOpacity onPress={()=>router.back()}>
                      <Text className="text-red-600">Click Here</Text>
                  </TouchableOpacity>
              </View>
          </Animated.View>
      </View>
    </KeyboardAvoidingView>
  );
};


