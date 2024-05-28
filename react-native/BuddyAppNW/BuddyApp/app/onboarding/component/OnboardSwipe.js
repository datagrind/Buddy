import { View, Text, useWindowDimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
<<<<<<< HEAD
// import Animated, { Extrapolation, useAnimatedStyle, interpolate } from 'react-native-reanimated'
=======
import Animated, { Extrapolation, useAnimatedStyle, interpolate } from 'react-native-reanimated'
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9
import { useRouter } from 'expo-router'

export default function OnboardSwipe({item, index, x, last, preferred_username, given_name}) {

    const router = useRouter()
    const {width: SCREEN_WIDTH} = useWindowDimensions()
<<<<<<< HEAD
    // const circleAnimation = useAnimatedStyle(() => {
=======
    const circleAnimation = useAnimatedStyle(() => {
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9
    const scale = interpolate(
        x.value,
        [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH
        ],
        [1,4,4],
        Extrapolation.CLAMP
    )
    return {
        transform: [{scale: scale}]
    }
  }) 
  return (
    <View className="flex-1 justify-center items-center mb-32 p-3" style={{width: SCREEN_WIDTH}}>
        <View className="absolute items-center justify-end">
<<<<<<< HEAD
            {/* <Animated.View style={[{width: SCREEN_WIDTH, height: SCREEN_WIDTH, backgroundColor: item.backgroundColor, borderRadius: SCREEN_WIDTH/2,}, circleAnimation]} /> */}
=======
            <Animated.View style={[{width: SCREEN_WIDTH, height: SCREEN_WIDTH, backgroundColor: item.backgroundColor, borderRadius: SCREEN_WIDTH/2,}, circleAnimation]} />
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9
        </View>
        <View >
            {/* <LottieView 
                source={item.animation} 
                style={{width: SCREEN_WIDTH * 0.9, height: SCREEN_WIDTH}} 
                autoPlay
                loop
            /> */}
        </View>
        <Text className="text-4xl text-center font-bold mx-5 mb-6">{item.title}</Text>
        <Text className="text-center text-xl mb-3 mx-5">{item.subtitle}</Text>
            { 
                index === last && 
                <TouchableOpacity 
                    className="bg-red-600 py-2 px-5 rounded-full" 
                    onPress={()=> router.push({pathname: '/welcome', params: { preferred_username: preferred_username, given_name: given_name }})}
                    // onPress={() => router.push('/welcome')}
                >
                    <Text className="text-white font-bold text-center">Next</Text>
                </TouchableOpacity>
            }
    </View>
  )
}