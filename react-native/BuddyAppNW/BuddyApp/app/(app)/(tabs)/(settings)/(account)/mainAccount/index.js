import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';
import { Link, useRouter } from 'expo-router'


export default function Page() {

  const router = useRouter()

  return (
    <View className="bg-white h-full w-full flex justify-center p-5 ">
      <View className="flex items-center mb-10">
                <Animated.Text 
                    entering={FadeInUp.duration(1000).springify()} 
                    className=" font-bold tracking-wider text-5xl mb-5">
                        Account Settings
                </Animated.Text>
                <Animated.Text 
                    entering={FadeInUp.duration(1000).springify()} 
                    className=" tracking-wider text-xl mb-3">
                        Account information below
                </Animated.Text>
                <Animated.View 
                    entering={FadeInDown.delay(600).duration(1000).springify()} 
                    className="flex-row justify-center mb-3">

                    <Text>Account Deleteion </Text>
                      <TouchableOpacity onPress={() => router.push('/delete')} >
                          <Text className="text-red-600">Click Here</Text>
                      </TouchableOpacity>
                </Animated.View>
                <Animated.View 
                    entering={FadeInDown.delay(600).duration(1000).springify()} 
                    className="flex-row justify-center">
                      <TouchableOpacity onPress={()=> router.back(0)} >
                          <Text className="text-red-600">Go Back</Text>
                      </TouchableOpacity>
                </Animated.View>
            </View>
    </View>
  )
}