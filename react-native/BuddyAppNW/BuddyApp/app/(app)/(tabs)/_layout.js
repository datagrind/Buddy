import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function TabsLayout() {
  return ( 
    <Tabs initialRouteName='search/index'>
        <Tabs.Screen name="search/index" options={{
            tabBarLabel: 'Search',
            headerTitle: 'Search',
            headerShown: false
        }} />
        <Tabs.Screen name="requests/index" options={{
            tabBarLabel: 'Requests',
            headerTitle: 'Requests',
            headerShown: false
        }} />
        <Tabs.Screen name="favorites/index" options={{
            tabBarLabel: 'Favorites',
            headerTitle: 'Favorites',
            headerShown: false
        }} />
        <Tabs.Screen name="posts" options={{
            tabBarLabel: 'Posts',
            headerTitle: 'Posts',
            headerShown: false
        }} /> 
        <Tabs.Screen name="settings" options={{
            tabBarLabel: 'Settings',
            headerShown: false,
        }} />
    </Tabs>
  )
}