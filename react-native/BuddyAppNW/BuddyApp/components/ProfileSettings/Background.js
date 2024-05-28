import { View, Text, useWindowDimensions, Platform } from 'react-native'
import { Image } from 'expo-image';
import React, { useMemo } from 'react'
import { useRouter } from 'expo-router';

  


const Background = () => {

    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
  
    const android = Platform.OS === 'android'
    const router = useRouter()


    const renderImages = useMemo(() => {
        const images = [];
        for (let i = 0; i < 20; i++) {
          images.push(
            <Image
              key={i} // Make sure to provide a unique key for each repeated Image component
              source={require('../../assets/images/logo_transparent_background.png')}
              style={{ width: 150, height: 200, contentFit: 'cover', transform: [{ rotate: '90deg' }] }}
            />
          );
        }
        return images
      }, [])

  return (
        <View
            style={{
            position: 'absolute',
            backgroundColor: 'red',
            top: -300, 
            left: -535, 
            height: windowHeight * 2 ,
            width: windowWidth * 4, 
            borderRadius: windowWidth/4,
            borderWidth: 10,
            borderColor: 'white',
            aspectRatio: 16 / 9, // Set the aspect ratio to 16:9 for landscape orientation
            zIndex: 1, // Ensure it's above the background image
            overflow: 'hidden',
            transform: [
                // { skewX: '0deg' }, // Skew along the X-axis
                // { skewY: '0deg' }, // Skew along the Y-axis
                // { translateX: -windowWidth * 0 }, // Adjust horizontally to center
                // { translateY: 0 }, // Adjust vertically to center
                { rotate: '-110deg' },
            ],
            flex:1,
            justifyContent: 'center',
            alignItems: 'flex-start',
        }}
    >

            <View className="flex-row gap-10 mt-10">
                {renderImages}
            </View>
            <View className="flex-row gap-10">
                {renderImages}
            </View>
            <View className="flex-row gap-10">
                {renderImages}
            </View>
            <View className="flex-row gap-10">
                {renderImages}
            </View>
            <View className="flex-row gap-10">
                {renderImages}
            </View>
            <View className="flex-row gap-10">
                {renderImages}
            </View>
            <View className="flex-row gap-10">
                {renderImages}
            </View>
    </View>
  )
}

export default Background