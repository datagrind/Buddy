import { Button, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack, useRouter, Redirect } from "expo-router";
import "../../global.css"
import { useSession } from '../../ctx';
import { StatusBar } from 'expo-status-bar'




export default function _layout() {

    const { session, isLoading } = useSession()
    const router = useRouter()

    // You can keep the splash screen open, or render a loading screen like we do here.
    if (isLoading) {
        return <View className="w-full h-full">
            <Text>Loading...</Text>
        </View> 
    }
    // Only require authentication within the (app) group's layout as users
    // need to be able to access the (auth) group and sign in again.
    
    if (!session) {
        // On web, static rendering will stop here as the user is not authenticated
        // in the headless Node process that the pages are rendered in.
        
        return <Redirect href="/login" />;
    }
    
  return (
    <View className="w-full h-full">
        <StatusBar barStyle="dark-content" backgroundColor='black' />
        <Stack 
            initialRouteName='(tabs)'
        >
            <Stack.Screen name="(tabs)" options={{
                headerShown: false
            }} />
            <Stack.Screen name="[missing]" options={{
                title: '404'
            }} />
            <Stack.Screen name='searchmodal/index' options={{
                title: '',
                headerTitle: '',
                headerShown: false,
                presentation: 'modal',
            }} initialParams={{}}/>
        </Stack>
    </View>

  )
}