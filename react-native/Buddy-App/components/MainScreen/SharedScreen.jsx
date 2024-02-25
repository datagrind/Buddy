// SharedScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Home from '../Home/Home';
import Profile from '../Profile/Profile'
import Requests from '../Requests/Requests'
import Chat from '../Chat/Chat'
import Host from '../Host/Host';
import Search from '../Search/Search';
import Background from '../UI/Background';
import { Box, Menu } from 'native-base';
import HiderHeader from './HideHeader';
import { useState } from 'react';
// import BottomTabNavigator from './Navigation/BottomTabNavigator'


const SharedScreen = ({navigation, route}) => {

    console.log("ShardeScreen prop: ", route)
    const { path } = route.params
    const currentPath = () => {
        if (path === 'home'){
            return <Home />
        } else if (path === 'profile'){
            return <Profile />
        } else if (path === 'requests'){
            return <Requests />
        } else if (path === 'chat'){
            return <Chat />
        } else if (path === 'host'){
            return <Host />
        } else if (path === 'search'){
            return <Search />
        }else{
            return false
        }
    }
    const defaultPath = () => {
        return (
            <TouchableOpacity
            style={styles.menuButton}
            onPress={() => navigation.toggleDrawer()}
            >
                <Text style={styles.buttonText}>☰ Menu</Text>
            </TouchableOpacity>
        )
    }



    return (
        <View style={styles.container}>
            <Background />
            <View style={styles.overlay}>
                <Box 
                    safeAreaTop 
                    bg="white"
                    w='100%'
                    height={'25%'}
                    position="absolute"
                    zIndex={1}
                >
                    <Text fontSize="xl" color="white">
                    Your Transparent Header
                    </Text>
                </Box>
                <Box 
                    w='100%' 
                    h='100%'         
                    position="absolute"
                    top={40}
                    zIndex={2}
                >
                    { currentPath ? currentPath() : defaultPath()}
                </Box>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: "100%",
      width: "100%",
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
    overlay: {
        flex: 1,
        backgroundColor: 'transparent', // Make sure to set a transparent background
        // Add other styles as needed
    },
  });


export default SharedScreen;
