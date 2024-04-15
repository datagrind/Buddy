import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Page(props) {
  return (
    <View>
      <Text>Page does not exist {JSON.stringify(props)}</Text>
    </View>
  )
}