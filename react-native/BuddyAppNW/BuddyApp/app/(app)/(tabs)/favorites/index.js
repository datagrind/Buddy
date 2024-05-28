import { View, Text, SafeAreaView, Platform, Dimensions, ScrollView } from 'react-native'
import { Image } from 'expo-image';
import React, { useState, useEffect } from 'react'
<<<<<<< HEAD
// import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated'
=======
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated'
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9
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

<<<<<<< HEAD
              {/* <Animated.View  */}

                  {/* className="w-1/2 mb-5"  */}
                  {/* entering={FadeInDown.delay((index%2 === 0 ? (index/2)*100: ((index-1)/2)*100)).duration(1000).springify()}> */}
=======
              <Animated.View 

                  className="w-1/2 mb-5" 
                  entering={FadeInDown.delay((index%2 === 0 ? (index/2)*100: ((index-1)/2)*100)).duration(1000).springify()}>
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9
    
                    <Image 
                      source={{uri: item.imgUrl}}                  
                      style={{
                        width: hp(25),
                        height: hp(50),
                        contentFit: "cover",
                      }}
                      className="rounded-full"
                    />
    
<<<<<<< HEAD
              {/* </Animated.View>    */}
=======
              </Animated.View>   
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9

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
<<<<<<< HEAD
          {/* <Animated.Text  */}
              {/* entering={FadeInUp.duration(1000).springify()}  */}
              {/* className=" font-bold tracking-wider text-5xl"> */}
                  <Text>Favorites</Text>
          {/* </Animated.Text> */}
=======
          <Animated.Text 
              entering={FadeInUp.duration(1000).springify()} 
              className=" font-bold tracking-wider text-5xl">
                  Favorites
          </Animated.Text>
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9
      </View>
      <ScrollView className="bg-white h-screen w-full px-5 " showsVerticalScrollIndicator={false} >
        <View className="flex-col ">
          {favorites()}
        </View>
      </ScrollView>
    </View>
  )
}