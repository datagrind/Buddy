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

                if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home-outline';
                    return <Ionicons name={iconName} size={size} color={color} />;
                } else if (route.name === 'Profile') {
                    iconName = focused ? 'person' : 'person-outline';
                    return <Ionicons name={iconName} size={size} color={color} />;
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
            <Tab.Screen name="Home" component={SharedScreen} initialParams={{ path: 'home'}} options={{ headerShown: false }}/>
            <Tab.Screen name="Profile" component={SharedScreen} initialParams={{ path: 'profile'}} options={{ headerShown: false }}/>
            <Tab.Screen name="Likes" component={SharedScreen} initialParams={{ path: 'likes'}} options={{ headerShown: false }}/>
            <Tab.Screen name="Chat" component={SharedScreen} initialParams={{ path: 'chat'}} options={{ headerShown: false }}/>
            {/* Add more screens here if needed */}
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;