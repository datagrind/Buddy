// SharedScreen.js

import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Home from '../Home/Home';
import Profile from '../Profile/Profile'
import Requests from '../Requests/Requests'
import Chat from '../Chat/Chat'
import Host from '../Host/Host';
import Search from '../Search/Search';
import Background from '../UI/Background';
import { Box } from 'native-base';


const SharedScreen = ({route}) => {


    const isIos = Platform.OS === 'ios'
    const { path, handleSetPath } = route.params
    console.log("ShardeScreen prop: ", path, handleSetPath) 
    const currentPath = () => {
        if (path === 'home'){
            return <Home />
        } else if (path === 'profile'){
            return <Profile />
        } else if (path === 'requests'){
            return <Requests handleSetPath={handleSetPath}/>
        } else if (path === 'chat'){
            return <Chat />
        } else if (path === 'host'){
            return <Host />
        } else if (path === 'search'){
            return <Search handleSetPath={handleSetPath}/>
        }else{
            return <DefaultPath />
        }
    }
    const DefaultPath = () => {
        return (
            <Text> 404 </Text>
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
                {/* <Spacer /> */}
                <Box 
                    w='100%' 
                    h='70%'         
                    position="absolute"
                    top={40}
                    zIndex={2}
                    borderColor={'black'}
                    borderTopRadius={50}
                    overflow={'hidden'}
                >
                    { currentPath() }
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
