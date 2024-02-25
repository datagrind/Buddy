import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import SharedScreen from '../MainScreen/SharedScreen';
import { View } from 'react-native';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const tabBarIcon = (route, focused, color, size) => {
    let iconName;

    if (route.name === 'Become a Buddy') {
      iconName = focused ? 'calendar-clear' : 'calendar-clear-outline';
    } else if (route.name === 'Find a Buddy') {
      iconName = focused ? 'search' : 'search-outline';
    } else if (route.name === 'Requests') {
      iconName = focused ? 'heart' : 'heart-outline';
    } else if (route.name === 'Chat') {
      iconName = focused ? 'chatbox' : 'chatbox-outline';
    }

    return (<View style={{ borderWidth: 2 }}>
      <Ionicons name={iconName} size={size} color={focused ? '#FF5733' : color} />
    </View>)
  };

  const TabNavigator = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => tabBarIcon(route, focused, color, size),
        tabBarStyle: { 
            width: '90%', 
            borderRadius: 30, 
            elevation: 0,
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            marginTop: 10,
        },
        tabBarLabel: () => null,
      })}
    >
      <Tab.Screen name="Become a Buddy" component={SharedScreen} initialParams={{ path: 'host'}} options={{ headerShown: false }}/>
      <Tab.Screen name="Find a Buddy" component={SharedScreen} initialParams={{ path: 'search'}} options={{ headerShown: false }}/>
      <Tab.Screen name="Requests" component={SharedScreen} initialParams={{ path: 'requests'}} options={{ headerShown: false }}/>
      <Tab.Screen name="Chat" component={SharedScreen} initialParams={{ path: 'chat'}} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );

  return TabNavigator()

};

export default BottomTabNavigator;
