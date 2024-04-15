import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack initialRouteName='mainSettings/index'>
        <Stack.Screen name='mainSettings/index' options={{
            title: 'Main Settings',
            headerShown: false
        }} />
        <Stack.Screen name='(account)' options={{
            headerShown: false,
        }} />
    </Stack>
  )
} 