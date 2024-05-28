import * as ImagePicker from 'expo-image-picker';
import { View, Text, useWindowDimensions, TouchableOpacity, Platform, Alert, Image, Button } from 'react-native'
import React, {useState} from 'react'
// import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useSession } from '../../ctx';
import ProfilePhoto from './ProfilePhoto';
import Info from './Info';



const Body = () => {

    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
  
    const android = Platform.OS === 'android'
    const router = useRouter()
    const { session: hiddencredentials } = useSession()


    const onHandleEdit = () => {
        router.push('/editprofile')
    }



  return (
    <View>
            <ProfilePhoto />
            <View className="" style={{ position: 'absolute', top: android ? 325 : 325, left: 60, width: 300, height: 30,  zIndex: 2, borderWidth: 0, borderRadius: 100, backgroundColor: 'white',}}>
                <Text className=" text-2xl text-center">Firstname Lastname</Text>
            </View>
            {/* <Animated.View 
                entering={FadeInDown.delay(300).duration(1000).springify()} 
                className="  " 
                style={{
                    position: 'absolute', 
                    top: android ? 400 : 400, left: 50, 
                    width: windowWidth * 0.2, 
                    height: windowWidth * 0.2, 
                    borderRadius: ( windowWidth * 0.2)/2, 
                    // paddingTop: 30, 
                    borderWidth: 5, 
                    zIndex: 3, 
                    overflow: 'hidden', 
                    borderColor: 'white', 
                    backgroundColor: 'white',
                    // padding: 10,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}> */}
                    <TouchableOpacity onPress={()=>router.push('/photos')}>
                        <View className="rounded-full items-center justify-center bg-red-600 h-28 w-24">
                            <MaterialIcons name="photo-camera" size={32} color="white" />
                        </View>
                    </TouchableOpacity>
            {/* </Animated.View>
            <Animated.View 
                entering={FadeInDown.delay(300).duration(1000).springify()} 
                className="" 
                style={{
                    position: 'absolute', 
                    top: android ? 400 : 400, left: 290, 
                    width: windowWidth * 0.2, 
                    height: windowWidth * 0.2, 
                    borderRadius: ( windowWidth * 0.2)/2, 
                    // paddingTop: 30, 
                    borderWidth: 5, 
                    zIndex: 3, 
                    overflow: 'hidden', 
                    borderColor: 'white', 
                    backgroundColor: 'white',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // padding: 10,
                }}> */}
                    <TouchableOpacity onPress={onHandleEdit}>
                        <View className="rounded-full items-center justify-center bg-red-600 h-28 w-24" >
                            <FontAwesome6 name="edit" size={24} color="white" />
                        </View>
                    </TouchableOpacity>
            {/* </Animated.View> */}
            <View 
                style={{ 
                    position: 'absolute', 
                    top: android ? 425 : 425, left: 20, 
                    width: windowWidth * 0.9, 
                    height: windowHeight * 0.9, 
                    borderRadius: 100, 
                    // paddingTop: 30, 
                    borderWidth: 5, 
                    zIndex: 2, 
                    overflow: 'scroll', 
                    borderColor: 'white', 
                    backgroundColor: 'white',
                    padding: 10,
                    // flexDirection: 'column',
                    flex: 1,
                    justifyContent: 'center',
            }}>
                <View className="flex justify-between gap-6 items-center p-20">
                    <Info />
                    {/* <Animated.View 
                        className="w-full  " 
                        entering={FadeInDown.delay(400).duration(1000).springify()}> */}
                            <TouchableOpacity 
                                onPress={()=>{}}
                                className={`w-full border-4 border-white bg-red-600 ${windowWidth < 370 ? 'p-1' : 'p-3'} rounded-2xl mb-6`}>
                                    <Text className="text-xl font-bold text-white text-center">Become a Buddy</Text>
                            </TouchableOpacity>
                    {/* </Animated.View>    */}
                </View>
                <View
                style={{
                    width: 200,
                    height: 800,
                    backgroundColor: 'rgba(255, 0, 0, 0.3)',
                    top: -200,
                    borderColor: 'rgba(256, 0, 0, 0.05)',
                    borderWidth: 5,
                    zIndex: -1,
                    position: "absolute",
                    transform: [
                    // { skewX: '100deg' }, // Skew along the X-axis
                    // { skewY: '55deg' }, // Skew along the Y-axis
                    { rotate: '-110deg' },
                    ],
                    flex:1,
                    justifyContent: 'center',
                    alignItems: 'center',   
                }}
                />

            </View>
    </View>
  )
}

export default Body