import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function DeleteLayout() {
  return (
    <Stack initialRouteName='index'>
        <Stack.Screen name='index' options={{
          title: '',
          headerShown: false,
        }} />
    </Stack>
  )
} 