import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const renderTabBarIcon = (route, focused, size) => {
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

    return (
      <Ionicons
        name={iconName}
        size={size}
        color={focused ? '#FF5733' : 'black'}
      />
    );
  };

  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        return (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(route.name)}
            style={styles.tabButton}
          >
            {renderTabBarIcon(route, isFocused, 30)}

            {isFocused && <View style={styles.activeIndicator} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIndicator: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
  },
});

export default CustomTabBar;
