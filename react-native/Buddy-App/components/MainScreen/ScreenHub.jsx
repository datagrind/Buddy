
import React, { useState } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import ProfileDetails from '../Profile/ProfileDetails';
import BottomTabNavigator from '../Navigation/BottomTabNavigator';


const ScreenHub = () => {

    const [screenHub, setScreenHub] = useState(true)
    const [path, setPath] = useState()
    const [profileProp, setProfileProp] = useState()

    const isIos = Platform.OS === 'ios'
    
    const handleScreenHub = () => {
        setScreenHub(true)
    }

    const handleSetPath = (str, obj) => {
      setPath(str)
      setProfileProp(obj)
      setScreenHub(false)
    }

    const currentPath = () => {
        if (path === 'profiledetails' && !screenHub){
            return <ProfileDetails handleScreenHub={handleScreenHub} profileProp={profileProp}/>
        }else{
            return <BottomTabNavigator handleSetPath={handleSetPath}/>
        }
    }

    return (
        <View style={styles.container} >
           { currentPath() }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: "100%",
      width: "100%",
    },
  });


export default ScreenHub;
