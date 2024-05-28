import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router'
import { confirmResetPassword, resetPassword } from 'aws-amplify/auth';
<<<<<<< HEAD
// import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';
=======
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9



const PasswordRecoveryConfirmation = () => {
  const [confirmationCode, setConfirmationCode] = useState('');
  const [ newPassword, setNewPassword ] = useState('')
  const [ confirmNewPassword, setConfirmNewPassword ] = useState('')

  const { username } = useLocalSearchParams()
  const router = useRouter()

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


  const handleConfirmCode = () => {
    // Handle confirmation code submission logic here
    try{
      handleConfirmResetPassword({username, confirmationCode, newPassword})
    } catch(error) {
        console.log(error)
        Alert.alert(error.message)
    }
    // You can call your API endpoint to verify the confirmation code
  };


  async function handleConfirmResetPassword({
    username,
    confirmationCode,
    newPassword
  }) {
    try {
      validatePassword(newPassword)
      validatePasswordsMatch()
      await confirmResetPassword({ username: username, confirmationCode: confirmationCode, newPassword: newPassword });
      Alert.alert("Your password has reset successfully")
      router.replace('/login')
    } catch (error) {
      console.log(error);
      Alert.alert(error.message)
    }
  }

  const handleResendCode = async () =>{
    console.log("handleResendCode")
    const output = await resetPassword({ username });
    handleResetPasswordNextSteps(output)
  }

  const validatePassword = (password) => {
    const lengthRegex = /.{8,}/;
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numeralRegex = /\d/;
    const symbolRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    if (!lengthRegex.test(password)) {
        let msg = 'Password must be at least 8 characters long.'
        throw new Error(msg)        
    }
    if (!lowercaseRegex.test(password)) {
        let msg = 'Password must contain at least one lowercase character.'
        throw new Error(msg)  
    }

    if (!uppercaseRegex.test(password)) {
        let msg = 'Password must contain at least one uppercase character.'
        throw new Error(msg) 
    }

    if (!numeralRegex.test(password)) {
        let msg = 'Password must contain at least one numeral.'
        throw new Error(msg)  
    }

    if (!symbolRegex.test(password)) {
        let msg = 'Password must contain at least one symbol.'
        throw new Error(msg)  
    }

};

const validatePasswordsMatch = () => {

    if (newPassword !== confirmNewPassword) {
        let msg = 'Passwords do not match.'
        throw new Error(msg)
    } else {
        let msg = 'Passwords match.'
    }
};

  return (
    <View className="flex-1 justify-center bg-white  p-5">
        <View className="flex items-center mb-10">
<<<<<<< HEAD
                {/* <Animated.Text  */}
                    {/* entering={FadeInUp.duration(1000).springify()}  */}
                    {/* className=" font-bold tracking-wider text-5xl"> */}
                        <Text>Password Recovery Confirmation</Text>
                {/* </Animated.Text> */}
                {/* <Animated.Text  */}
                    {/* entering={FadeInUp.duration(1000).springify()}  */}
                    {/* className=" tracking-wider text-xl"> */}
                       <Text>An email with a confirmation code has been sent to: {username}</Text>
                {/* </Animated.Text> */}
        </View>
        <View className="flex mx-5 space-y-4 text-start">
          {/* <Animated.View  */}
            {/* entering={FadeInDown.delay(200).duration(1000).springify()}  */}
            {/* className="bg-black/5 p-5 rounded-2xl w-full mb-5" */}
          {/* > */}
=======
                <Animated.Text 
                    entering={FadeInUp.duration(1000).springify()} 
                    className=" font-bold tracking-wider text-5xl">
                        Password Recovery Confirmation
                </Animated.Text>
                <Animated.Text 
                    entering={FadeInUp.duration(1000).springify()} 
                    className=" tracking-wider text-xl">
                       An email with a confirmation code has been sent to: {username}
                </Animated.Text>
        </View>
        <View className="flex mx-5 space-y-4 text-start">
          <Animated.View 
            entering={FadeInDown.delay(200).duration(1000).springify()} 
            className="bg-black/5 p-5 rounded-2xl w-full mb-5"
          >
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9
          <TextInput
              placeholder="Enter confirmation code"
              value={confirmationCode}
              onChangeText={setConfirmationCode}
              placeholderTextColor={'gray'}
              keyboardType="numeric"
          />
<<<<<<< HEAD
        {/* </Animated.View> */}
        {/* <Animated.View  */}
            {/* entering={FadeInDown.delay(300).duration(1000).springify()}  */}
            {/* className="bg-black/5 p-5 rounded-2xl w-full mb-5" */}
        {/* > */}
=======
        </Animated.View>
        <Animated.View 
            entering={FadeInDown.delay(300).duration(1000).springify()} 
            className="bg-black/5 p-5 rounded-2xl w-full mb-5"
        >
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9
            <TextInput
                placeholder="New Password"
                placeholderTextColor={'gray'}
                secureTextEntry
                value={newPassword} 
                type="password" 
                onChange={(e) => { e.persist(); setNewPassword(e.nativeEvent.text);}}
            />
<<<<<<< HEAD
        {/* </Animated.View> */}
        {/* <Animated.View  */}
            {/* entering={FadeInDown.delay(400).duration(1000).springify()}  */}
            {/* className="bg-black/5 p-5 rounded-2xl w-full mb-5" */}
        {/* > */}
=======
        </Animated.View>
        <Animated.View 
            entering={FadeInDown.delay(400).duration(1000).springify()} 
            className="bg-black/5 p-5 rounded-2xl w-full mb-5"
        >
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9
            <TextInput
                placeholder="Confirm New Password"
                placeholderTextColor={'gray'}
                secureTextEntry
                value={confirmNewPassword} 
                type="password" 
                onChange={(e) => { e.persist(); setConfirmNewPassword(e.nativeEvent.text);}}
            />
<<<<<<< HEAD
        {/* </Animated.View> */}
        {/* <Animated.View  */}
            {/* entering={FadeInDown.delay(500).duration(1000).springify()}  */}
            {/* className=" p-5 rounded-2xl w-full mb-5" */}
        {/* > */}
=======
        </Animated.View>
        <Animated.View 
            entering={FadeInDown.delay(500).duration(1000).springify()} 
            className=" p-5 rounded-2xl w-full mb-5"
        >
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9
          <TouchableOpacity
              className="bg-red-600 px-6 py-3 rounded-md"
              onPress={handleConfirmCode}
          >
              <Text className="text-white font-bold text-center">Confirm Code</Text>
          </TouchableOpacity>
<<<<<<< HEAD
        {/* </Animated.View> */}
        {/* <Animated.View  */}
            {/* entering={FadeInDown.delay(600).duration(1000).springify()}  */}
            {/* className=" p-5 rounded-2xl w-full mb-5" */}
        {/* > */}
=======
        </Animated.View>
        <Animated.View 
            entering={FadeInDown.delay(600).duration(1000).springify()} 
            className=" p-5 rounded-2xl w-full mb-5"
        >
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9
          <TouchableOpacity
              className="mt-4"
              onPress={() => handleResendCode()}
          >
              <Text className=" text-center underline">Resend Code</Text>
          </TouchableOpacity>
<<<<<<< HEAD
        {/* </Animated.View> */}
        {/* <Animated.View  */}
              {/* entering={FadeInDown.delay(600).duration(1000).springify()}  */}
              {/* className="flex-col justify-center"> */}
=======
        </Animated.View>
        <Animated.View 
              entering={FadeInDown.delay(600).duration(1000).springify()} 
              className="flex-col justify-center">
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9
              <View className="flex-row justify-center mb-3">
                  {/* <Text>Go back to login: </Text> */}
                  <TouchableOpacity onPress={()=>router.back(2)}>
                      <Text className="text-red-600">Go Back</Text>
                  </TouchableOpacity>
              </View>
<<<<<<< HEAD
          {/* </Animated.View> */}
=======
          </Animated.View>
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9
      </View>
    </View>
  );
};

export default PasswordRecoveryConfirmation;
