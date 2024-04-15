import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function Page(props) {

  const router = useRouter()

  return (
    <View>
      <Text>Page does not exist {JSON.stringify(props)}</Text>
      <Button title='go back' onPress={()=> router.back()} />
    </View>
  )
}