import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function SettingsLayout() {
  return (
    <Stack initialRouteName='index'>
        <Stack.Screen name='index' options={{
          title: '',
          headerShown: false,
        }} />
        <Stack.Screen name='account' options={{
          title: '',
          headerTitle: '',
          headerShown: false,
        }} />
        <Stack.Screen name='termsconditions/index' options={{
          title: '',
          headerTitle: '',
          // headerShown: false,
        }} />
    </Stack>
  )
} 