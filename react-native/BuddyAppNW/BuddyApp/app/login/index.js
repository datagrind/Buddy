import { Alert, View, Text, KeyboardAvoidingView, Platform, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated'
import { router } from 'expo-router'
import { useSession } from '../../ctx'

export default function Login() {
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { handleAmplifySignIn, session } = useSession()  
  
  const handleSignUp = () => {
    console.log('Signing up...');
    router.push('/signup')
  }; 

  const handleForgotPassword = () => {
    router.push('/mainForgotPassword')
  }; 
 
  const handleLogin = () => {
    handleAmplifySignIn( username, password )
  } 

  useEffect(()=>{
      if (session){
        router.replace('/search')
      }
  },[session])

      
  return (
    <KeyboardAvoidingView className="flex-1 w-full h-full" behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View className="bg-white h-full w-full px-5 flex justify-center ">
            <StatusBar style="light" />
            {/* <Image className="h-full w-full absolute" source={null} /> */}
 
            {/* lights */}
            <View className=" flex justify-center items-center w-full mb-20 ">
                <Animated.Image 
                    entering={FadeInUp.delay(200).duration(1000).springify()} 
                    source={require('../../assets/images/logo_white_background.jpg')}
                    className="h-[220] w-[175]" 
                />
                {/* <Animated.Image 
                    entering={FadeInUp.delay(400).duration(1000).springify()} 
                    source={null}
                    className="h-[160] w-[65] opacity-75" 
                /> */}
            </View>

            {/* title and form */}
            {/* <View className="h-full w-full flex justify-around pb-10"> */}
                
                {/* title */}
                {/* <View className="flex items-center">
                    <Animated.Text 
                        entering={FadeInUp.duration(1000).springify()} 
                        className=" font-bold tracking-wider text-5xl">
                            Login
                    </Animated.Text>
                </View> */}
  
                {/* form */}
                <View className="flex items-center mx-5 px-10 sapce-y-4">
                    <Animated.View 
                        entering={FadeInDown.duration(1000).springify()} 
                        className="bg-black/5 p-5 rounded-2xl w-full mb-5"
                    >
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor={'gray'}
                            value={username}
                            type="email"
                            onChange={(e) => { e.persist(); setUsername( e.nativeEvent.text)}} 
                        /> 
                    </Animated.View>
                    <Animated.View 
                        entering={FadeInDown.delay(200).duration(1000).springify()} 
                        className="bg-black/5 p-5 rounded-2xl w-full mb-5">

                        <TextInput
                            placeholder="Password"
                            placeholderTextColor={'gray'}
                            secureTextEntry
                            value={password} 
                            type="password" 
                            onChange={(e) => { e.persist(); setPassword(e.nativeEvent.text);}}
                        />
                    </Animated.View>

                    <Animated.View 
                        className="w-full mb-5" 
                        entering={FadeInDown.delay(400).duration(1000).springify()}>
                            <TouchableOpacity 
                                onPress={handleLogin}
                                className="w-full bg-red-600 p-3 rounded-2xl mb-6">
                                    <Text className="text-xl font-bold text-white text-center">Login</Text>
                            </TouchableOpacity>
                    </Animated.View>

                    <Animated.View 
                        entering={FadeInDown.delay(600).duration(1000).springify()} 
                        className="flex-col justify-center">
                        <View className="flex-row justify-center mb-3">
                            <Text>Forgot Password? </Text>
                            <TouchableOpacity onPress={handleForgotPassword}>
                                <Text className="text-red-600">Click Here</Text>
                            </TouchableOpacity>
                        </View>
                        <View className="flex-row justify-center">
                            <Text>Don't have an account? </Text>
                            <TouchableOpacity onPress={handleSignUp}>
                                <Text className="text-red-600">SignUp</Text>
                            </TouchableOpacity>
                        </View>
                    </Animated.View>
                </View> 
            {/* </View> */}
        </View>
    </KeyboardAvoidingView>
  ) 
}