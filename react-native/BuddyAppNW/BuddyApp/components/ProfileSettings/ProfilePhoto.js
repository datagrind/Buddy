import { View, Text, Platform } from 'react-native'
import { Image } from 'expo-image'
import React, { useState, useEffect, useMemo, useLayoutEffect, useCallback } from 'react'
// import Animated, { FadeInDown } from 'react-native-reanimated'
import { useSelector, useDispatch } from 'react-redux'
import { getUrlResult } from '../../context/middleware/Photo/settings'

const ProfilePhoto = () => {
  
  const android = Platform.OS === 'android'
  const { mainPhoto } = useSelector((state) => state.photoData.data)
  const dispatch = useDispatch()
  


  useEffect(() => {
    dispatch(getUrlResult())
      .then((result) => {
        // Handle successful result if needed
        // console.log("result: ", result.meta.requestStatus)
      })
      .catch((error) => {
        // Handle error if needed
        console.log("error: ", error)
      });
  }, [dispatch]);

  return (
    <View>
      {/* {mainPhoto && mainPhoto !== '' ? (
        <Animated.View 
          className="w-full" 
          entering={FadeInDown.delay(200).duration(1000).springify()}  
          style={{ position: 'absolute', top: android ? 75 : 75, left: 110, width: 200, height: 200, borderRadius: 100, paddingTop: 10, borderWidth: 5, zIndex: 2, overflow: 'hidden', borderColor: 'white', backgroundColor: 'black'}}
        >
          <Image
            source={{ uri: mainPhoto }}
            style={{ top: -10, width: 200, height: 300, zIndex: -1 }}
          />
        </Animated.View> 
      ) :
        <View style={{ position: 'absolute', top: android ? 75 : 75, left: 110, width: 200, height: 200, borderRadius: 100, paddingTop: 10, borderWidth: 5, zIndex: 2, overflow: 'hidden', borderColor: 'white', backgroundColor: 'black'}}/>
      } */}
    </View>
  )
}


export default ProfilePhoto
