import { View, Text, TouchableOpacity, Platform, Image, StyleSheet, Dimensions, useWindowDimensions, ScrollView, ImageBackground } from 'react-native'
import React, { useEffect, useState, memo, useCallback, useMemo } from 'react'
import { useRouter } from 'expo-router';
import Background from '../../../components/ProfileSettings/Background';
import Body from '../../../components/ProfileSettings/Body';


const ProfileSettings = () => {

    const [isProvider, setisProvider] = useState(false)

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const android = Platform.OS === 'android'
  const router = useRouter()

//   const imageSource = 'https://th.bing.com/th/id/OIP.8r32yQFa0vFd3PjkK3hyEwHaKM?rs=1&pid=ImgDetMain'




  return (
      

    <ScrollView
    contentContainerStyle={{
      padding: 5,
      width: windowWidth, 
      height: windowHeight * (isProvider ? 1.25 : 1.65),
      // backgroundColor: '#404040',
      backgroundColor: 'gray',
    }}
    showsVerticalScrollIndicator={false}>
        <View className={`w-full  flex-row justify-start items-center ${windowWidth > 370 ? android ? "pt-20" : "pt-14" : "pt-10"} z-10`}>
            <TouchableOpacity onPress={()=>router.back()}>
                <View className="p-2 rounded-full bg-white/90 ml-5 justify-center items-center">
                <Text className=" text-center text-gray"> Back </Text>
                </View>
            </TouchableOpacity>
        </View>
        <View className={` w-full h-500  bg-black`}>
        </View>
        {/* <View>
            <Background />
        </View> */}
        <Body />
    </ScrollView>
  )
}

export default ProfileSettings