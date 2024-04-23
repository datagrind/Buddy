import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons, FontAwesome } from '@expo/vector-icons';



export default function TabsLayout() {
  return ( 
    <Tabs initialRouteName='search/index'>
        <Tabs.Screen name="search/index" options={{
            tabBarLabel: 'Search',
            headerTitle: 'Search',
            tabBarIcon: ()=> <Ionicons name="search" size={24} color="black" />,
            headerShown: false
        }} />
        <Tabs.Screen name="profile" options={{
            tabBarLabel: 'Profile',
            headerTitle: 'Profile',
            headerShown: false,
            href: null,
            tabBarHideOnKeyboard: true,
        }} />
        <Tabs.Screen name="index" options={{
            headerShown: false,
            href: null,
        }} />
        <Tabs.Screen name="requests/index" options={{
            tabBarLabel: 'Requests',
            headerTitle: 'Requests',
            tabBarIcon: () => <Ionicons name="notifications-outline" size={24} color="black" />,
            headerShown: false
        }} />
        <Tabs.Screen name="favorites" options={{
            tabBarLabel: 'Favorites',
            headerTitle: 'Favorites',
            tabBarIcon: ()=> <FontAwesome name="heart-o" size={24} color="black" />,
            headerShown: false
        }} />
        <Tabs.Screen name="posts" options={{
            tabBarLabel: 'Posts',
            headerTitle: 'Posts',
            headerShown: false,
            href: null
        }} /> 
        <Tabs.Screen name="settings" options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ()=> <Ionicons name="settings-outline" size={24} color="black" />,
            headerShown: false,
        }} />
    </Tabs>
  )
}