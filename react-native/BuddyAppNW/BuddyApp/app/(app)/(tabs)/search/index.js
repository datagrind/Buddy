// import { View, Text, Button } from 'react-native'
// import React from 'react'
// import { useRouter } from 'expo-router'
// import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated'


// export default function Page() {

//     const router = useRouter()

//   return (
//     <View className="bg-white h-full w-full px-5 flex justify-center items-center">
//       <View className="flex items-center mb-10">
//           <Animated.Text 
//               entering={FadeInUp.duration(1000).springify()} 
//               className=" font-bold tracking-wider text-5xl">
//                   Search
//           </Animated.Text>
//       </View>
//     </View>
//   )
// }

import { View, Text, Dimensions, TouchableOpacity, Image, Platform, useWindowDimensions } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-new-snap-carousel";
import DatesCard from "../components/DatesCard";
// import { datesData } from "../../../../constants";
// import { user1 } from "../../../../assets/images/userImages";
import { datesData } from './userdata'
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { fetchDataUsers } from "./userdata";



const android = Platform.OS === "android";
const { width, height } = Dimensions.get("window");
const PAGE_WIDTH = window.width;

export default function Search() {

  const [data, setData] = useState()
  // const { retrievedUsers } = fetchDataUsers()

  const getUsers = async () => {
    const retrievedUsers = await fetchDataUsers()
    setData(retrievedUsers.results)
    // console.log(retrievedUsers.results)
  }

  useEffect(()=>{
    getUsers()
  },[])
  // console.log(retrievedUsers)


  return (
    <SafeAreaView
      className="bg-white flex-1 justify-between"
      style={{
        paddingTop: android ? hp(2) : 0,
      }}
    >
      {/* Header */}
      <View className="w-full flex-row justify-between items-center px-4 mb-8">
        <View className="rounded-full items-center justify-center">
          <Image
            source={require("../../../../assets/images/userImages/user1.jpg")}
            style={{
              width: hp(5),
              height: hp(5),
              resizeMode: "cover",
            }}
            className="rounded-full"
          />
        </View>

        <View>
          <Text className="text-xl font-semibold text-center uppercase">

          </Text>
        </View>

        {/* Heart Icon */}
        <View className="bg-black/10 p-2 rounded-full items-center justify-center">
          <TouchableOpacity>
            {/* <BellIcon size={25} strokeWidth={2} color="black" /> */}
            <Text> Icon here</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Carousal */}
      <View className=" pb-4">
        <View className="mx-4 mb-4">
          <Text className="capitalize text-2xl font-semibold text-center">

          </Text>
        </View>

        <View className="">
          <Carousel
            // layout={'tinder'}
            data={datesData}
            renderItem={({ item }) => <DatesCard item={item} data={data && data}/>}
            firstItem={1}
            // inactiveSlideScale={0.86}
            // inactiveSlideOpacity={0.6}
            sliderWidth={width}
            itemWidth={width * 0.8}
            slideStyle={{ display: "flex", alignItems: "center" }}
            loop={true}
          />
         
        </View>
      </View>
    </SafeAreaView>
  );
}