import React, { useState, useEffect, useReducer, useLayoutEffect } from "react";
import { View, Text, Dimensions, TouchableOpacity, Image, Platform, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-new-snap-carousel";
import DatesCard from "../../../../components/DatesCard";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { Link, useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { Ionicons } from '@expo/vector-icons';


const android = Platform.OS === "android";
const { width, height } = Dimensions.get("window");



export default function Search() {

  const data = useSelector(state => state.providerData.data);
  const router = useRouter()

  const CarouselComponent = () => {
    return (
      <Carousel
        data={data}
        renderItem={({ item }) => <DatesCard item={item} />}
        keyExtractor={(item, index) => index.toString()} 
        firstItem={1}
        sliderWidth={width}
        itemWidth={width * 0.8}
        slideStyle={{ display: "flex", alignItems: "center" }}
        loop={true}
      />
    )
  }

  useLayoutEffect(()=>{
    CarouselComponent()
  },[])


  return (
    <SafeAreaView
      style={{
        paddingTop: android ? hp(2) : 0,
        backgroundColor: 'white',
        paddingVertical: 10,
        flex: 1,
        height: height,
      }}
    >
      <StatusBar style="dark" backgroundColor="white" />
      <View className="w-full  h-screen " >
        <View className="w-full flex-row justify-between items-center px-5 mb-8 ">
          <View className="">
            <Link href="/(app)/profilesettings" asChild>
              <TouchableOpacity className="rounded-full items-center justify-center">
                <Image
                  source={require("../../../../assets/images/userImages/user1.jpg")}
                  style={{
                    width: hp(5),
                    height: hp(5),
                    resizeMode: "cover",
                  }}
                  className="rounded-full"
                />
              </TouchableOpacity>
            </Link>
          </View>
          <View className="flex-row space-x-2 gap-5">
            <View className="">
              <TouchableOpacity className="bg-black/10 p-2 rounded-full items-center justify-center">
                <Ionicons name="notifications-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View className="">
                <Link href='/searchmodal' asChild>
                  <TouchableOpacity className="bg-black/10 p-2 rounded-full items-center justify-center">
                    <Ionicons name="filter" size={24} color="black" />
                  </TouchableOpacity>
                </Link>
            </View>
          </View>
        </View>

        <View className="flex-1 justify-between items-center ">
          <View className=" w-full flex-1">
            <View className="flex w-full justify-center items-center">
              {data.length === 0 ? 
                <View>
                  <Text className="text-center">No Buddy exists in this criteria.</Text>
                  <Text className="text-center">Please adjust your filter.</Text>
                </View>
              :
                <CarouselComponent />
              }
            </View>

          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
