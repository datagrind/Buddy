import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter, useLocalSearchParams } from 'expo-router'
<<<<<<< HEAD
// import Animated, { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
=======
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9
import OnboardSwipe from './component/OnboardSwipe';

export default function Onboarding() {
 
    const textTitles = [
        {
            title: 'Discover Great Connections',
            subtitle: 'Explore a diverse community of Buddys ready to offer unique experiences',
            animation: null,
            backgroundColor: 'pink',
        },
        {
            title: 'Respectful Relationships',
            subtitle: 'Buddys committed to treating you with kindness and respect',
            animation: null,
            backgroundColor: 'yellow',
        },
        {
            title: 'Connect with Confidence',
            subtitle: 'Every Buddy you meet undergoes a thorough verification check, ensuring a confident and genuine experience',
            animation: null,
            backgroundColor: 'purple',
        },
    ];
 
<<<<<<< HEAD
    // const flatListRef = useAnimatedRef() //review 
=======
    const flatListRef = useAnimatedRef() //review 
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9
    const x = useSharedValue(0)

    const router = useRouter()
    const { preferred_username, given_name } = useLocalSearchParams()
    
    const handleNextButton = () => {
        router.push('/welcome')
    }

<<<<<<< HEAD
    // const onScrollHandle = useAnimatedScrollHandler({
    //     onScroll: event => {
    //         x.value = event.contentOffset.x
    //     }
    // })

  return (
    <View className=" flex-1 ">
        {/* <Animated.FlatList 
=======
    const onScrollHandle = useAnimatedScrollHandler({
        onScroll: event => {
            x.value = event.contentOffset.x
        }
    })

  return (
    <View className=" flex-1 ">
        <Animated.FlatList 
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9
            ref={flatListRef}
            data={textTitles} 
            onScroll={onScrollHandle}
            renderItem={({item, index}) =>{
                return <OnboardSwipe item={item} index={index} x={x} last={textTitles.length-1} preferred_username={preferred_username} given_name={given_name}/>
            }}
            keyExtractor={item => item.title}
            horizontal={true}
            bounces={false}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
<<<<<<< HEAD
        /> */}
=======
        />
>>>>>>> e3f4dec2cfa9a2dad11faa24bbf7fc9963ece5b9
    </View>
  )
}