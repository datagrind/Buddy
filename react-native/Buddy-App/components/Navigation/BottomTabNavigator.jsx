import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import SharedScreen from '../MainScreen/SharedScreen';
import { View, Platform } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

  const isIos = Platform.OS === 'ios';



  const tabBarIcon = (route, focused, color, size) => {
    let iconName;

    if (route.name === 'Become a Buddy') {
      iconName = focused ? 'calendar' : 'calendar-outline';
    } else if (route.name === 'Find a Buddy') {
      iconName = focused ? 'search' : 'search-outline';
    } else if (route.name === 'Requests') {
      iconName = focused ? 'heart' : 'heart-outline';
    } else if (route.name === 'Chat') {
      iconName = focused ? 'chatbox' : 'chatbox-outline';
    }

    // useEffect(() => {
    //   handleComponentReset(true, null)
    // },[])


    return (
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Ionicons name={iconName} size={size} color={focused ? 'white': color} />
        {focused && (
          <View
            style={{
              position: 'absolute',
              top: -10,
              right: -10,
              width: 45,
              height: 45,
              borderRadius: 22.5,
              backgroundColor: 'red',
              zIndex: -1,
            }}
          />
        )}
      </View>
    );
  };

  // const TabNavigator = () => (
  return  <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) =>
          tabBarIcon(route, focused, color, size),
        tabBarStyle: {
          width: '90%',
          height: 70,
          borderRadius: 30,
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          padding: isIos && 0,
          paddingBottom: isIos && 0,
          elevation: !isIos && 5, // For Android shadow
          shadowColor: isIos && '#000', // For iOS shadow
          shadowOffset: { width: 0, height: 7 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        },
        tabBarLabel: () => null,
      })}
    >
      <Tab.Screen
        name="Find a Buddy"
        component={SharedScreen}
        initialParams={{ path: 'search'}}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Become a Buddy"
        component={SharedScreen}
        initialParams={{ path: 'host'}}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Requests"
        component={SharedScreen}
        initialParams={{ path: 'requests'}}
        options={{ headerShown: false }}
      />
      {/* <Tab.Screen
        name="Chat"
        component={SharedScreen}
        initialParams={{ path: 'chat' }}
        options={{ headerShown: false }}
      /> */}
    </Tab.Navigator>
  // );

  // return <TabNavigator />;
};

export default BottomTabNavigator;
