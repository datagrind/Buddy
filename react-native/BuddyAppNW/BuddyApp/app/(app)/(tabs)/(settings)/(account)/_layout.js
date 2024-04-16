import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack initialRouteName='mainAccount/index'>
        <Stack.Screen name='mainAccount/index' options={{
            title: '',
            headerShown: false
        }} />
        <Stack.Screen name='delete/index' options={{
            title: "",
            // headerShown: false
        }} />
    </Stack>
  )
}