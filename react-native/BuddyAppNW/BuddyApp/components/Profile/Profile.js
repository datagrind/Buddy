import { View, Text,  TouchableOpacity, ScrollView, Dimensions, StatusBar, Platform } from "react-native";
import React, { useEffect, useState, useLayoutEffect, memo, useMemo, useCallback } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useRouter, useLocalSearchParams } from 'expo-router'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { useSelector, useDispatch } from "react-redux";
import { addfavoriteState, removefavoriteState } from "../../context/slices/favoriteSlice/favoriteSlice";
import { Ionicons, Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
// import ImageModal from 'react-native-image-modal';
import { Image } from "expo-image";


var { width, height } = Dimensions.get("window");



  const Profile = memo(() => {

  const iOS = Platform.OS === "ios"
  const router = useRouter()
  const { id } = useLocalSearchParams()
  const data = useSelector(state => state.profileDetailsData)

  const [currentProfile, setcurrentProfile] = useState()
  const [liked, setliked] = useState(false)

  const stars = [];

  const dispatch = useDispatch()


  for (let i = 0; i < 5; i++) {
    stars.push(
      <Ionicons key={i} name="star" size={24} color="red" />
    );
  }

  const profile = useMemo(() => (
      data.data.find((item) => item.id.toString() === id.toString())
  ))




  const profileState = () => {
    if (data) {
      // const profile = profileDetailsData.data.map((item) => item.id.toString() === id.toString())
      // const profile = profileDetailsData.data.filter((item) => id === item.id)
      // const profile = profileDetailsData.data.find(user => user.id === id)
      setcurrentProfile(profile);
      // setcurrentProfile(profile)
    }
  }



  useEffect(()=>{
    profileState()
  },[id, data, profile])

  const handleBack = () => {
    // setliked(false)
    router.back()
  }

  const Hobbies = memo(({profiledata}) =>{
    return (<>
      {profiledata?.hobbies?.map((hobby, index) => (
        <View
          key={index}
          style={{
            borderRadius: 20,
            padding: 5,
            paddingHorizontal: 10,
            marginRight: 5,
          }}
          className="bg-[#d3d3d3]"
        >
          <Text className="text-black ">{hobby}</Text>
        </View>
      ))}
    </>
    )
  })


  

  let imageWidth, imageHeight;

  // Define breakpoints for different screen sizes
  const smallScreenWidth = 320;
  const mediumScreenWidth = 375;

  // Determine image width and height based on screen size
  if (width <= smallScreenWidth) {
    // For small screens
    imageWidth = width * 1.06666;
    imageHeight = height * 1.013333;
  } else if (width <= mediumScreenWidth) {
    // For medium screens
    imageWidth = width * 0.9333;
    imageHeight = height * 0.86666;
  } else {
    // For large screens (default)
    imageWidth = width * 0.8;
    imageHeight = height * 0.76;
  }


  const favoritesHandle = () =>{
    let number = parseInt(id);
    if (!liked){
      dispatch(addfavoriteState(number))
      setliked(true)
    } else {
      dispatch(removefavoriteState(number))
      setliked(false)
    }
  }

  const renderToggleFavoriteIcon = useCallback(() => {
    !liked ? <FontAwesome5   name="heart" size={32} color="white" 
                      style={{
                      textShadowColor: 'rgba(0, 0, 0, 0.75)',
                      textShadowOfftextSet: {width: 1, height: 1},
                      textShadowRadius: 5,
                    }}
                /> :
                <FontAwesome name="heart" size={32} color="red" style={{ textShadowColor: 'rgba(0, 0, 0, 0.75)', textShadowOfftextSet: {width: 1, height: 1}, textShadowRadius: 5, }}/> 
  },[])

  return (
    <ScrollView
      className="relative bg-white flex-1"
      contentContainerStyle={{
        paddingBottom: hp(5),
      }}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar hidden={true} className="m-0 p-0"/>
      {/* Image */}
      <View className="flex ">
        <Image
          source={{ uri: currentProfile?.imgPath }}
          style={{
            width: wp(100),
            height: hp(60),
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
          // resizeMode="cover"
          contentFit="cover"

        />
        {/* ?  (currentProfile?.imgPath)  : null} */}
      </View>

      {/* Header */}
      {/* <View className={`w-full absolute flex-row justify-end items-center ${width >= mediumScreenWidth ? "pt-5" : "pt-10"}`}>
        <TouchableOpacity>
          <View className="p-2 rounded-full bg-black/40 mr-5 justify-center items-center">
            <Text className=" text-center text-white"> Carmera Icon</Text>
          </View>
        </TouchableOpacity>
      </View> */}
      <View className={`w-full absolute flex-row justify-start items-center ${width > mediumScreenWidth ? !iOS ? "pt-10" : "pt-14" : "pt-10"}`}>
          <TouchableOpacity onPress={handleBack}>
            <View className="p-2 rounded-full bg-black/40 ml-5 justify-center items-center">
              <Text className=" text-center text-white"> Back </Text>
            </View>
          </TouchableOpacity>
      </View>

      {/* Bio */}
      <View className="w-full justify-start items-start px-6 space-y-4 mt-6 ">
        {/* User name and age */}
        <View className="flex-row space-x-2 justify-between w-full items-center ">
          <View className="flex-row ">
            <Text className="text-black text-center font-bold text-xl">
              {currentProfile?.name}
              {", "}
            </Text>
            <Text className="text-black text-center font-bold text-xl mr-2">
              {currentProfile?.age}
            </Text>
            <Text className="text-black text-center font-bold text-xl mr-2">
              {currentProfile?.id}
            </Text>
            <Feather name="check-circle" size={24} color="#06BCEE" />
          </View>
          <TouchableOpacity onPress={favoritesHandle}>
            <View className="flex pt-3  ">
              
               { renderToggleFavoriteIcon() }

            </View>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row items-center justify-around mb-3">
          {stars}
        </View>

        {/* User hobbies */}
        <View className="mb-5">
          <View className="flex-row">
            
                    <Hobbies profileData={currentProfile}/>

          </View>
        </View>

        {/* User Bio */}
        <View className="mb-8">
          <Text className="uppercase font-semibold text-neutral-500 tracking-wider mb-2 ">
            Rate
          </Text>

          <Text className="text-black/80 text-left font-medium text-sm mb-8">
            $35 per hour
          </Text> 
          <Text className="uppercase font-semibold text-neutral-500 tracking-wider mb-2 ">
            About Me
          </Text>

          <Text className="text-black/80 text-left font-medium text-sm mb-8">
            {currentProfile?.bio}
          </Text> 

          <Text className="uppercase font-semibold text-neutral-500 tracking-wider mb-2 ">
            Things We Can Do
          </Text>
          <View className="flex-row mb-1">
            <Text className="text-black/80 text-left  text-sm font-extrabold mr-5">
              • 
            </Text> 
            <Text className="text-black/80 text-left font-medium text-sm">
               Hold hands / Hug (Non-sexual)
            </Text> 
          </View>
          <View className="flex-row mb-1">
            <Text className="text-black/80 text-left  text-sm font-extrabold mr-5">
              • 
            </Text> 
            <Text className="text-black/80 text-left font-medium text-sm">
               Cheerlead for you
            </Text> 
          </View>
          <View className="flex-row mb-1">
            <Text className="text-black/80 text-left  text-sm font-extrabold mr-5">
              • 
            </Text> 
            <Text className="text-black/80 text-left font-medium text-sm">
               Emotional support
            </Text> 
          </View>
          <View className="flex-row mb-1">
            <Text className="text-black/80 text-left  text-sm font-extrabold mr-5">
              • 
            </Text> 
            <Text className="text-black/80 text-left font-medium text-sm">
               Go with you on your planned activities
            </Text> 
          </View>
          <View className="flex-row mb-1">
            <Text className="text-black/80 text-left  text-sm font-extrabold mr-5">
              • 
            </Text> 
            <Text className="text-black/80 text-left font-medium text-sm">
               Side piece / wingwoman to a party
            </Text> 
          </View>
        </View>
        <View className="flex-row justify-center">
          <Link href="/(app)/calender" asChild>
            <TouchableOpacity 
                className={`w-full bg-red-600 ${width < mediumScreenWidth ? 'p-1' : 'p-3'} rounded-2xl mb-6`}>
                    <Text className="text-xl font-bold text-white text-center">Check Availability</Text>
            </TouchableOpacity>
          </Link>
        </View>

        {/*  */}
      </View>
    </ScrollView>
  );
}, (prevProps, nextProps) => { 
  return prevProps.items === nextProps.items;
})

export default Profile