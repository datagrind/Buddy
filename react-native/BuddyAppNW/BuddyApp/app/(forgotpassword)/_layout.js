import { Button, View, Text } from 'react-native'
import React from 'react'
import { Stack } from "expo-router";
import "../../global.css"



export default function _layout() {
    
  return (

    <Stack 
        initialRouteName='mainForgotPassword/index'
    >
        <Stack.Screen name="confirmation/index" options={{
            headerShown: false,
        }} />
        <Stack.Screen name="mainForgotPassword/index" options={{
            headerShown: false,
        }} />
        <Stack.Screen name="[missing]" options={{
            title: '404'
        }} />
    </Stack>
  )
}