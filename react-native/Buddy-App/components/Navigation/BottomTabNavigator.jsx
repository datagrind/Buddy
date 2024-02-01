import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, AntDesign  } from '@expo/vector-icons';
import React from 'react';
import { Text } from 'react-native';
import SharedScreen from '../SharedScreen';


const BottomTabNavigator = () => {
    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                // if (route.name === 'Home') {
                //     iconName = focused ? 'home' : 'home-outline';
                //     return <Ionicons name={iconName} size={size} color={color} />;
                if (route.name === 'Become a Buddy') {
                    iconName = focused ? 'calendar-clear' : 'calendar-clear-outline';
                    return <Ionicons name={iconName} size={size} color={color} />;
                } else if (route.name === 'Find a Buddy') {
                    iconName = focused ? 'search' : 'search-outline';
                    return <Ionicons name={iconName} size={size} color={color} />;
                // } else if (route.name === 'Profile') {
                //     iconName = focused ? 'person' : 'person-outline';
                //     return <Ionicons name={iconName} size={size} color={color} />;
                } else if (route.name === 'Likes') {
                    iconName = focused ? 'heart' : 'hearto';
                    return <AntDesign name={iconName} size={size} color={color} />;
                } else if (route.name === 'Chat') {
                    iconName = focused ? 'chatbox' : 'chatbox-outline';
                    return <Ionicons name={iconName} size={size} color={color} />;
                }
                
                // You can add more icons and customize them as needed
                
            },
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
            })}
            >
            <Tab.Screen name="Become a Buddy" component={SharedScreen} initialParams={{ path: 'host'}} options={{ headerShown: false }}/>
            <Tab.Screen name="Find a Buddy" component={SharedScreen} initialParams={{ path: 'search'}} options={{ headerShown: false }}/>
            <Tab.Screen name="Likes" component={SharedScreen} initialParams={{ path: 'likes'}} options={{ headerShown: false }}/>
            <Tab.Screen name="Chat" component={SharedScreen} initialParams={{ path: 'chat'}} options={{ headerShown: false }}/>
            {/* Add more screens here if needed */}
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;