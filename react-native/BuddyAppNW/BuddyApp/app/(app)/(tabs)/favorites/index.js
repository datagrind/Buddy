import { View, Text, SafeAreaView, Platform, Dimensions, ScrollView } from 'react-native'
import { Image } from 'expo-image';
import React, { useState, useEffect } from 'react'
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated'
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useSelector } from 'react-redux';
import { Link } from 'expo-router';



const android = Platform.OS === "android"
const { width, height } = Dimensions.get("window");

export default function Favorites() {

  const favoriteId = useSelector((state) => state.favoriteData.data.id)
  const providerData = useSelector(state => state.providerData.data);

  const [favoritePro, setfavoritePro] = useState([])

  useEffect(() => {
    if (favoriteId.length > 0) {
      // const newArray = providerData.filter((item) =>
      //   favoriteId.some((favorite) => favorite === item.id)
      // );
      const newArray = favoriteId.map((favorite) =>
        providerData.find((item) => item.id === favorite)
      );
      setfavoritePro(newArray);
    } else {
      setfavoritePro([])
    }
  }, [favoriteId, providerData]);


  const favorites = () => {
    if(favoritePro.length > 0){
      let newArray = favoritePro.map((item, index) => {
        return(
          <Link push href={`/favorites/${item.id}`} key={index+Math.random()} >

              <Animated.View 

                  className="w-1/2 mb-5" 
                  entering={FadeInDown.delay((index%2 === 0 ? (index/2)*100: ((index-1)/2)*100)).duration(1000).springify()}>
    
                    <Image 
                      source={{uri: item.imgUrl}}                  
                      style={{
                        width: hp(25),
                        height: hp(50),
                        contentFit: "cover",
                      }}
                      className="rounded-full"
                    />
    
              </Animated.View>   

          </Link>
        )
      })
      
      return newArray
    }

  }


  return (
    <View
    style={{
      paddingTop: android ? hp(7) : 75,
      backgroundColor: 'white',
      flex: 1,
      height: height,
    }}
    >
      <View className="flex items-center mb-10">
          <Animated.Text 
              entering={FadeInUp.duration(1000).springify()} 
              className=" font-bold tracking-wider text-5xl">
                  Favorites
          </Animated.Text>
      </View>
      <ScrollView className="bg-white h-screen w-full px-5 " showsVerticalScrollIndicator={false} >
        <View className="flex-col ">
          {favorites()}
        </View>
      </ScrollView>
    </View>
  )
}