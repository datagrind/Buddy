import { Alert, View, Text, KeyboardAvoidingView, Platform, Image, TextInput, TouchableOpacity, useWindowDimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
<<<<<<< HEAD
// import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated'
=======
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated'
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9
import { router } from 'expo-router'
import { useSession } from '../../ctx'

export default function Login() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [windowSize, setwindowSize] = useState()
  
  
  const { handleAmplifySignIn, session: hiddencredentials } = useSession()  
  const { width, height } = useWindowDimensions();
  const smallScreenWidth = 320;
  const mediumScreenWidth = 375;
     
              
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
        if (hiddencredentials){
            router.replace('/search')
        }
        if(width < mediumScreenWidth){
            setwindowSize('small')
        } else if ( width > mediumScreenWidth){
            setwindowSize('large')
        } else {
            setwindowSize('medium')
        }
  },[hiddencredentials])
   
     
  return (
    <KeyboardAvoidingView className="flex-1 w-full h-full" behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View className="bg-white h-full w-full px-5 flex justify-center ">
            {/* <StatusBar style="light" /> */}
            {/* <Image className="h-full w-full absolute" source={null} /> */}
  
            {/* lights */}
            <View className=" flex justify-center items-center w-full mb-20 ">
<<<<<<< HEAD
                {/* <Animated.Image  */}
                    {/* entering={FadeInUp.delay(200).duration(1000).springify()}  */}
                    {/* source={require('../../assets/images/logo_white_background.jpg')} */}
                    {/* className="h-[220] w-[175]"  */}
                {/* /> */}
=======
                <Animated.Image 
                    entering={FadeInUp.delay(200).duration(1000).springify()} 
                    source={require('../../assets/images/logo_white_background.jpg')}
                    className="h-[220] w-[175]" 
                />
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9
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
<<<<<<< HEAD
                    {/* <Animated.View  */}
                        {/* entering={FadeInDown.duration(1000).springify()}  */}
                        {/* className={`bg-black/5 ${windowSize === 'small' ? 'p-2' : 'p-5'} rounded-2xl w-full mb-3`}> */}
=======
                    <Animated.View 
                        entering={FadeInDown.duration(1000).springify()} 
                        className={`bg-black/5 ${windowSize === 'small' ? 'p-2' : 'p-5'} rounded-2xl w-full mb-3`}>
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor={'gray'}
                            autoCapitalize="none"
                            value={username}
                            type="email"
                            onChange={(e) => { e.persist(); setUsername( e.nativeEvent.text)}} 
                        />    
<<<<<<< HEAD
                    {/* </Animated.View> */}
                    {/* <Animated.View  */}
                        {/* entering={FadeInDown.delay(200).duration(1000).springify()}  */}
                        {/* className={`bg-black/5 ${windowSize === 'small' ? 'p-2' : 'p-5'} rounded-2xl w-full mb-3`}> */}
=======
                    </Animated.View>
                    <Animated.View 
                        entering={FadeInDown.delay(200).duration(1000).springify()} 
                        className={`bg-black/5 ${windowSize === 'small' ? 'p-2' : 'p-5'} rounded-2xl w-full mb-3`}>
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9

                        <TextInput
                            placeholder="Password"
                            placeholderTextColor={'gray'}
                            secureTextEntry
                            value={password} 
                            type="password" 
                            onChange={(e) => { e.persist(); setPassword(e.nativeEvent.text);}}
                        />
<<<<<<< HEAD
                    {/* </Animated.View>    */}
       
                    {/* <Animated.View  */}
                        {/* className="w-full mb-5"  */}
                        {/* entering={FadeInDown.delay(400).duration(1000).springify()}> */}
=======
                    </Animated.View>   
       
                    <Animated.View 
                        className="w-full mb-5" 
                        entering={FadeInDown.delay(400).duration(1000).springify()}>
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9
                            <TouchableOpacity 
                                onPress={handleLogin}
                                className={`w-full bg-red-600 ${windowSize === 'small' ? 'p-1' : 'p-3'} rounded-2xl mb-6`}>
                                    <Text className="text-xl font-bold text-white text-center">Login</Text>
                            </TouchableOpacity>
<<<<<<< HEAD
                    {/* </Animated.View>     */}
    
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
<<<<<<< HEAD
                    {/* </Animated.View> */}
=======
                    </Animated.View>
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9
                </View>   
            {/* </View> */}
        </View>
    </KeyboardAvoidingView>
  ) 
} 