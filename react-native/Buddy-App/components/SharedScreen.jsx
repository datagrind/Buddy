// SharedScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Home from './Home/Home';
import Profile from './Profile/Profile'
import Likes from './Likes/Likes'
import Chat from './Chat/Chat'

const SharedScreen = ({navigation, route}) => {
    console.log(route)
    const { path } = route.params
    if (path === 'home'){
        return (
            <View style={styles.container}>
                <Home />
            </View>
        )
    } else if (path === 'profile'){
        return (
            <View style={styles.container}>
                <Profile />
            </View>
        )
    } else if (path === 'likes'){
        return (
            <View style={styles.container}>
                <Likes />
            </View>
        )
    } else if (path === 'chat'){
        return (
            <View style={styles.container}>
                <Chat />
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                {/* Hamburger menu button */}
                <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.toggleDrawer()}
                >
                    <Text style={styles.buttonText}>☰ Menu</Text>
                </TouchableOpacity>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    content: {
      fontSize: 16,
      marginBottom: 20,
    },
    menuButton: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 16,
    },
    navBarHeader: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 2,
    },
  });


export default SharedScreen;
