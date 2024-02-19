// SharedScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Home from './Home/Home';
import Profile from './Profile/Profile'
import Likes from './Likes/Likes'
import Chat from './Chat/Chat'
import Host from './Host/Host';
import Search from './Search/Search';

const SharedScreen = ({navigation, route}) => {
    console.log(route)
    const { path } = route.params
    if (path === 'home'){
        return <Home />
    } else if (path === 'profile'){
        return <Profile />
    } else if (path === 'likes'){
        return <Likes />
    } else if (path === 'chat'){
        return <Chat />
    } else if (path === 'host'){
        return <Host />
    } else if (path === 'search'){
        return <Search />

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
  });


export default SharedScreen;
