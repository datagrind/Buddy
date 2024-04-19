import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated'

export default function Posts() {
  return (
    <View className="bg-white h-full w-full px-5 flex justify-center items-center">
      <View className="flex items-center mb-10">
          <Animated.Text 
              entering={FadeInUp.duration(1000).springify()} 
              className=" font-bold tracking-wider text-5xl">
                  Posts
          </Animated.Text>
          <Animated.View 
            entering={FadeInDown.delay(200).duration(1000).springify()} 
            className="flex-row justify-center">
            <Link className="text-4xl" href="/posts/1" asChild> Open Post 1 </Link>
          </Animated.View>
          <Animated.View 
            entering={FadeInDown.delay(400).duration(1000).springify()} 
            className="flex-row justify-center">
            <Link className="text-4xl" href="/posts/2" asChild> Open Post 2 </Link>
          </Animated.View>
          <Animated.View 
            entering={FadeInDown.delay(600).duration(1000).springify()} 
            className="flex-row justify-center">
            <Link className="text-4xl" href="/posts/3" asChild> Open Post 3 </Link>
          </Animated.View>
      </View>
    </View>
  )
}