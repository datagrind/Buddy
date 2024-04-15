import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack>
        <Stack.Screen name='index' options={{
            title: 'Posts',
            headerShown: false
        }} />
        <Stack.Screen name='[id]' options={{
            headerTitle: 'Posts details',
            // headerShown: false
        }} />
    </Stack>
  )
}