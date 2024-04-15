import { View, Text } from 'react-native'
import React from 'react'
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated'

export default function Page() {
  return (
    <View className="bg-white h-full w-full px-5 flex justify-center items-center">
      <View className="flex items-center mb-10">
          <Animated.Text 
              entering={FadeInUp.duration(1000).springify()} 
              className=" font-bold tracking-wider text-5xl">
                  Favorites
          </Animated.Text>
      </View>
    </View>
  )
}