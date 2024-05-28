import { View, Text } from 'react-native'
import React from 'react'
<<<<<<< HEAD
// import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated'
=======
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated'
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9


export default function Page() {
  return (
    <View className="bg-white h-full w-full px-5 flex justify-center items-center">
      <View className="flex items-center mb-10">
<<<<<<< HEAD
          {/* <Animated.Text  */}
              {/* entering={FadeInUp.duration(1000).springify()}  */}
              {/* className=" font-bold tracking-wider text-5xl"> */}
                  <Text>Requests</Text>
          {/* </Animated.Text> */}
=======
          <Animated.Text 
              entering={FadeInUp.duration(1000).springify()} 
              className=" font-bold tracking-wider text-5xl">
                  Requests
          </Animated.Text>
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9
      </View>
    </View>
  )
}