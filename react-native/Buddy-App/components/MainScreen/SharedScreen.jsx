// SharedScreen.js

import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import Home from '../Home/Home';
import Profile from '../Profile/Profile'
import Chat from '../Chat/Chat'
import Host from '../Host/Host';
import { View, Box, VStack } from 'native-base';
import HeaderSearchHub from '../Search/HeaderSearch';
import SearchHub from '../Search/SearchHub';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';



const SharedScreen = ({ route }) => {

    if (!route || !route.params) {
        // Handle the case when route or params is undefined
        return <Text>Error: Missing route or params</Text>;
      }

    const isIos = Platform.OS === 'ios'
    const { path } = route.params
    const navigation = useNavigation();
    const [searchHubPath, setSearchHubPath] = useState(path);
    console.log("ShardeScreen prop: ", path) 

    const currentPath = () => {
        if (path === 'home'){
            return <Home />
        } else if (path === 'profile'){
            return <Profile />
        } else if (path === 'requests'){
            return <Host />
        } else if (path === 'chat'){
            return <Chat />
        } else if (path === 'host'){
            return <Host />
        } else if (path === 'search'){
            // return <Search handleSetPath={handleSetPath}/>
        // } else if (path === 'search' || path === 'requests'){
        // return <ProfileDetails handleSetPath={handleSetPath} />
        return <SearchHub path={searchHubPath} />
        }else{
            return <DefaultPath />
        }
    }
    const DefaultPath = () => {
        return (
            <Text>  404 </Text>
        )
    }

    const handlePress = (newPath) => {
        if (newPath !== searchHubPath){
            setSearchHubPath(newPath);
        }
      };


    return (
        <View style={styles.container}  backgroundColor={'red.600' || 'white'}>
            {/* <Background /> */}
            <VStack style={styles.overlay}>
                <Box 
                    safeAreaTop 
                    bg="transparent"
                    w='85%'
                    height={70}
                    top={150}
                    left={0}
                    // borderWidth={2}
                    alignItems={'center'}
                    justifyContent={'center'}
                    mx={40}
                >
                    {/* <Pressable onPress={ () => navigation.navigate('Settings')}>
                        <HamburgerIcon />
                    </Pressable> */}
                    { path === 'search'
                    ?   <HeaderSearchHub handlePress={handlePress} searchHubPath={searchHubPath} marginTop={100}/>
                    :   <Text fontSize="xl" color="white">
                        Your Transparent Header
                        </Text>
                    }
                </Box>
                <Box 
                    w='100%' 
                    h='100%'         
                    top={150}
                    borderTopRadius={50}
                    overflow={'hidden'}
                    // borderWidth={2}
                >
                    { currentPath() }
                </Box>
            </VStack>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: "100%",
      width: "100%",
    //   borderWidth: 5,
      borderColor: 'pink',
      overflow: 'hidden',
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
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent', // Make sure to set a transparent background
        alignItems: 'center', 
        justifyContent: 'center',
        // borderWidth: 2,
    },
  });


export default SharedScreen;
