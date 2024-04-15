import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter, useLocalSearchParams } from 'expo-router'
import { useSession } from '../../ctx'


export default function Welcome() {
  
  const router = useRouter()
  const { preferred_username, given_name } = useLocalSearchParams()
  
  const handleAgreeButton = () => {
    router.push('/index')
  }

  return (
    <View className=" w-full h-full justify-center items-center">
      <Text className=" mb-3 ">{(preferred_username || given_name) ? `Welcome, ${preferred_username || given_name}!` : 'Welcome!'}</Text>
      <TouchableOpacity
          className="bg-red-600 py-2 px-5 rounded-full"
          onPress={handleAgreeButton}
      >
          <Text className="text-white font-bold text-center">I Agree</Text>
      </TouchableOpacity> 
    </View>
  )
}