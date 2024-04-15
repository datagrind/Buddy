import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSession } from '../../../../../ctx'
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';
import { Link } from 'expo-router'
import { useRouter } from 'expo-router';

export default function Page() {

    const { handleAmplifySignOut, session } = useSession();
    const router = useRouter()


  return (
    <View className="bg-white h-full w-full px-5 flex justify-center items-center">
      <View className="flex-1 items-center mb-10 justify-around">
          <View className="flex w-full">
            <Animated.Text 
                entering={FadeInUp.duration(1000).springify()} 
                className=" font-bold tracking-wider text-5xl">
                    Settings
            </Animated.Text>
          </View>
          <View className="flex w-full container">
            <Animated.View 
                entering={FadeInDown.delay(600).duration(1000).springify()} 
                className="flex-row justify-center">
                  <TouchableOpacity onPress={() => router.push('/mainAccount')} >
                      <Text className=" text-3xl">Account</Text>
                  </TouchableOpacity>
            </Animated.View>
          </View>
          <View className="flex w-full">
            <Animated.View className="w-full mb-10 " entering={FadeInDown.delay(200).duration(1000).springify()}>
                <TouchableOpacity onPress={()=>{handleAmplifySignOut()}} className="w-full bg-red-600 p-3 rounded-2xl mb-3">
                    <Text className="text-xl font-bold text-white text-center">Sign Out</Text>
                </TouchableOpacity>
            </Animated.View>
          </View>

          

      </View>
    </View>
  )
}