import { View, Text, Alert, Image, KeyboardAvoidingView , Platform, SafeAreaView, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';
import { useRouter, useLocalSearchParams } from 'expo-router'
import { signUp } from "aws-amplify/auth";


export default function SignupScreen() {

//   const [isSignedUp, setIsSignedUp] = useState(false)
//   const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [userID, setUserID] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validationMessage, setValidationMessage] = useState('');
  const [confirmValidationMessage, setConfirmValidationMessage] = useState('');
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const router = useRouter()
  const params = useLocalSearchParams()

    const errorSignUp = () => {
        return console.log("Required info not fulfilled")
    }

    const handleSignUpButton = () => {

        try {
            validateEmail()
            // ConfirmEmail()
            validatePassword()
            validatePasswordsMatch()
            handleSignUp(password, email, phoneNumber, firstname, lastname, username )
        } catch(error){
            console.log(error.message)
            Alert.alert(error.message)
            return errorSignUp()
        }

    }

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsEmailValid(emailRegex.test(email));
        if (!emailRegex){
            let msg = 'Invalid Email'
            throw new Error(msg)
        }

    };

    const ConfirmEmail =() => {

        if (confirmEmail !== email) {
            let msg = "Email doesn't match"
            throw new Error(msg)
        } 
    }

    const validatePassword = () => {
        const lengthRegex = /.{8,}/;
        const lowercaseRegex = /[a-z]/;
        const uppercaseRegex = /[A-Z]/;
        const numeralRegex = /\d/;
        const symbolRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

        if (!lengthRegex.test(password)) {
            let msg = 'Password must be at least 8 characters long.'
            setValidationMessage(msg);
            throw new Error(msg)        
        }
        if (!lowercaseRegex.test(password)) {
            let msg = 'Password must contain at least one lowercase character.'
            setValidationMessage(msg);
            throw new Error(msg)  
        }

        if (!uppercaseRegex.test(password)) {
            let msg = 'Password must contain at least one uppercase character.'
            setValidationMessage(msg);
            throw new Error(msg) 
        }

        if (!numeralRegex.test(password)) {
            let msg = 'Password must contain at least one numeral.'
            setValidationMessage(msg);
            throw new Error(msg)  
        }

        if (!symbolRegex.test(password)) {
            let msg = 'Password must contain at least one symbol.'
            setValidationMessage(msg);
            throw new Error(msg)  
        }

        setValidationMessage('Password meets the password policy requirements.');
    };

    const validatePasswordsMatch = () => {

        if (password !== confirmPassword) {
            let msg = 'Passwords do not match.'
            setConfirmValidationMessage(msg);
            throw new Error(msg)
        } else {
            let msg = 'Passwords match.'
            setConfirmValidationMessage(msg);
        }
    };

    const handlePhoneNumberChange = () => {
        // Check if the input contains only numbers
        if (phoneNumber.length === 0) {
            // let msg = ''
            // return error.message = msg; 
        } 
        const isValidPhoneNumber = /^\d{1,10}$/.test(phoneNumber);
        if ( phoneNumber.length < 10 && phoneNumber.length >= 1){
            let msg = 'Please provide your full 10 digit number'
            throw new Error(msg)
        } else if( phoneNumber.length > 10) {
            let msg = 'Please provide no more than 10 numbers'
            throw new Error(msg)
        }else if(!isValidPhoneNumber && phoneNumber.length >= 1){
            let msg = 'Number characters only'
            throw new Error(msg)
        }
        setIsPhoneValid(isValidPhoneNumber);
    };

    const handlePassword = () => {
        if(password.length > 0){
            validatePassword(password)
        }
    }


    async function handleSignUp(password, email, phone_number, given_name, family_name, username ) {
        try {
        const { isSignUpComplete, userId, nextStep } = await signUp({
            username: email,
            password: password,
            options: {
            userAttributes: {
                email: email,
                phone_number: phone_number, // E.164 number convention
                given_name: given_name,
                family_name: family_name,
                preferred_username: username
            },
            // optional
            autoSignIn: true // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
            }
        });
        router.push({pathname: '/verify', params: { username: userId, preferred_username: username, given_name: given_name }})
        if (isSignUpComplete){
            console.log("isSignUpComplete: ", isSignUpComplete)
            router.replace('/(app)')
        }
        } catch (error) {
            // setIsLoading((prev) => prev = false)
            // setIsSignedUp((prev) => prev = false)
            console.log('error signing up:', error);
            Alert.alert(error.message)
            return error
        }
    }

  return (
    <KeyboardAvoidingView className="flex-1 w-full h-full" behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View className="bg-white h-full w-full flex justify-center p-5 ">
        {/* <StatusBar style="light" /> */}
        {/* <Image className="h-full w-full absolute" source={require('../assets/images/background.png')} /> */}

        {/* lights */}
        {/* <View className="flex-row justify-around w-full absolute"> */}
            {/* <Animated.Image 
                entering={FadeInUp.delay(200).duration(1000).springify()} 
                source={require('../assets/images/light.png')} 
                className="h-[225] w-[90]"
            />
            <Animated.Image 
                entering={FadeInUp.delay(400).duration(1000).springify()} 
                source={require('../assets/images/light.png')} 
                className="h-[160] w-[65] opacity-75" 
            /> */}
        {/* </View> */}

        {/* title and form */}
        {/* <View  className="h-full w-full flex justify-around"> */}
            
            {/* title */}
            <View className="flex items-center mb-10">
                <Animated.Text 
                    entering={FadeInUp.duration(1000).springify()} 
                    className=" font-bold tracking-wider text-5xl">
                        Sign Up
                </Animated.Text>
                <Animated.Text 
                    entering={FadeInUp.duration(1000).springify()} 
                    className=" tracking-wider text-xl">
                        Please enter your information below
                </Animated.Text>
            </View>

            {/* form */}
            <View className="flex mx-5 space-y-4 text-start">
                <Animated.Text 
                        entering={FadeInUp.duration(1000).springify()} 
                        className=" tracking-wider text-xl text-start mb-3">
                            (*) Required
                </Animated.Text>
                <Animated.View 
                    entering={FadeInDown.duration(1000).springify()} 
                    className="bg-black/5 p-5 rounded-2xl w-full mb-3">
                    <TextInput
                        placeholder="Email *"
                        placeholderTextColor={'gray'}
                        type='email' 
                        onChangeText={(text) => setEmail(text)} 
                        onBlur={validateEmail}
                        autoCapitalize="none"
                        keyboardType="email-address"

                    />
                </Animated.View>
                {/* <Animated.View 
                    entering={FadeInDown.delay(200).duration(1000).springify()} 
                    className="bg-black/5 p-5 rounded-2xl w-full mb-3">
                    <TextInput
                        placeholder="Confirm Email *"
                        placeholderTextColor={'gray'}
                        type='email' 
                        onChangeText={(text) => setConfirmEmail(text)} 
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                </Animated.View> */}
                {/* <Animated.View 
                    entering={FadeInDown.delay(300).duration(1000).springify()} 
                    className="bg-black/5 p-5 rounded-2xl w-full mb-3">
                    <TextInput
                        placeholderTextColor={'gray'}
                        secureTextEntry
                        placeholder="(999)1234567" 
                        type='phonenumber' 
                        onChangeText={(text) => setPhoneNumber(text)} 
                        // onBlur={handlePhoneNumberChange}
                    />
                </Animated.View> */}
                <Animated.View 
                    entering={FadeInDown.delay(400).duration(1000).springify()} 
                    className="bg-black/5 p-5 rounded-2xl w-full mb-3">
                    <TextInput
                        placeholder="Username *"
                        placeholderTextColor={'gray'}
                        type='username' 
                        onChangeText={(text) => setUsername(text)}
                    />
                </Animated.View>
                <Animated.View 
                    entering={FadeInDown.delay(400).duration(1000).springify()} 
                    className="bg-black/5 p-5 rounded-2xl w-full mb-3">
                    <TextInput
                        placeholder="First Name"
                        placeholderTextColor={'gray'}
                        type='firstname' 
                        onChangeText={(text) => setFirstname(text)}
                    />
                </Animated.View>
                <Animated.View 
                    entering={FadeInDown.delay(400).duration(1000).springify()} 
                    className="bg-black/5 p-5 rounded-2xl w-full mb-3">
                    <TextInput
                        placeholder="Last Name"
                        placeholderTextColor={'gray'}
                        type='lastname' 
                        onChangeText={(text) => setLastname(text)}
                    />
                </Animated.View>
                <Animated.View 
                    entering={FadeInDown.delay(500).duration(1000).springify()} 
                    className="bg-black/5 p-5 rounded-2xl w-full mb-3">
                    <TextInput
                        placeholder="Password *"
                        placeholderTextColor={'gray'}
                        secureTextEntry
                        type="password" 
                        onChangeText={(text) => setPassword(text)} 
                    />
                </Animated.View>
                <Animated.View 
                    entering={FadeInDown.delay(600).duration(1000).springify()} 
                    className="bg-black/5 p-5 rounded-2xl w-full mb-3">
                    <TextInput
                        placeholder="Confirm Password *"
                        placeholderTextColor={'gray'}
                        secureTextEntry
                        type="password" 
                        onChangeText={(text) => setConfirmPassword(text)} 
                    />
                </Animated.View>

                <Animated.View className="w-full mb-10" entering={FadeInDown.delay(600).duration(1000).springify()}>
                    <TouchableOpacity onPress={handleSignUpButton} className="w-full bg-red-600 p-3 rounded-2xl mb-3">
                        <Text className="text-xl font-bold text-white text-center">SignUp</Text>
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View 
                    entering={FadeInDown.delay(800).duration(1000).springify()} 
                    className="flex-row justify-center">

                    <Text>Already have an account? </Text>
                    <TouchableOpacity onPress={() => router.push('/login')}>
                        <Text className="text-red-600">Login</Text>
                    </TouchableOpacity>

                </Animated.View>
            </View>
        {/* </View> */}
        </View>
    </KeyboardAvoidingView>
  )
}