import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
<<<<<<< HEAD
// import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated'
=======
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated'
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9

export default function Posts() {
  return (
    <SafeAreaView className="bg-white px-5 flex-1  justify-center items-center">
      <View className="flex-1 items-center mb-10  w-full  mt-20">
<<<<<<< HEAD
          {/* <Animated.Text  */}
              {/* entering={FadeInUp.duration(1000).springify()}  */}
              {/* className=" font-bold tracking-wider text-5xl"> */}
                  <Text>Posts </Text>
          {/* </Animated.Text> */}
          {/* <Animated.View  */}
            {/* entering={FadeInDown.delay(200).duration(1000).springify()}  */}
            {/* className="w-full h-28 flex justify-center items-center"> */}
            <Link className="text-4xl text-center" href="/posts/1" > Open Post 1 </Link>
          {/* </Animated.View> */}
          {/* <Animated.View  */}
            {/* entering={FadeInDown.delay(400).duration(1000).springify()}  */}
            {/* className="w-full h-28 flex justify-center items-center"> */}
            <Link className="text-4xl" href="/posts/2" > Open Post 2 </Link>
          {/* </Animated.View> */}
          {/* <Animated.View  */}
            {/* entering={FadeInDown.delay(600).duration(1000).springify()}  */}
            {/* className="w-full h-28 flex justify-center items-center"> */}
            <Link className="text-4xl" href="/posts/3" > Open Post 3 </Link>
          {/* </Animated.View> */}
=======
          <Animated.Text 
              entering={FadeInUp.duration(1000).springify()} 
              className=" font-bold tracking-wider text-5xl">
                  Posts
          </Animated.Text>
          <Animated.View 
            entering={FadeInDown.delay(200).duration(1000).springify()} 
            className="w-full h-28 flex justify-center items-center">
            <Link className="text-4xl text-center" href="/posts/1" > Open Post 1 </Link>
          </Animated.View>
          <Animated.View 
            entering={FadeInDown.delay(400).duration(1000).springify()} 
            className="w-full h-28 flex justify-center items-center">
            <Link className="text-4xl" href="/posts/2" > Open Post 2 </Link>
          </Animated.View>
          <Animated.View 
            entering={FadeInDown.delay(600).duration(1000).springify()} 
            className="w-full h-28 flex justify-center items-center">
            <Link className="text-4xl" href="/posts/3" > Open Post 3 </Link>
          </Animated.View>
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9
      </View>
    </SafeAreaView>
  )
}