import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useEffect, useReducer, useLayoutEffect } from "react";
import { Link } from 'expo-router'
// import Animated, { FadeInUp, FadeInDown} from 'react-native-reanimated'
import { Picker } from "@react-native-picker/picker";
import { useDispatch, useSelector } from "react-redux";
import { setProviderState, setSubProviderState, resetProviderState, resetSubProviderState } from '../../../context/slices/searchProviderSlice/searchProviderSlice';

var { width, height } = Dimensions.get("window");


const SearchModal = () => {

  const data = useSelector(state => state.providerData.data);
  const subData = useSelector(state => state.providerData.subData);
  const dispatch = useDispatch()

  const category = ['all', 'male', 'female', 'other']
  const [selectedCategory, setSelectedCategory] = useState(category[0])
  const [windowSize, setwindowSize] = useState()

  const smallScreenWidth = 320;
  const mediumScreenWidth = 375;

  const handleFilterChange = (category) => {
    dispatch(resetProviderState())
    setSelectedCategory(category)
    if (category === 'all') {
      dispatch(resetProviderState())
    } else {
      let newArray = subData.filter((item) => item.gender === category)
      dispatch(setProviderState(newArray))
    }
  };

  useEffect(()=>{
    if(width <= smallScreenWidth){
        setwindowSize('small')
    } else if ( width > mediumScreenWidth){
        setwindowSize('large')
    } else {
        setwindowSize('medium')
    }
  })

  return (
    <View className="bg-white h-full w-full flex justify-around p-5 px-10">
        <View className="flex items-center mb-10">
            {/* <Animated.Text  */}
                {/* entering={FadeInUp.duration(1000).springify()}  */}
                {/* className=" font-bold tracking-wider text-5xl"> */}
                    <Text>Search Modal</Text>
            {/* </Animated.Text> */}
        </View>

        <View className="flex flex-row justify-between items-center mb-4  h-14 w-full ">
            <Text className={`capitalize ${width >= mediumScreenWidth ? "text-2xl": "text-base"} font-semibold text-center `}>Select a filter:</Text>
            <Picker
              style={{ width: 100 }}
              selectedValue={selectedCategory}
              onValueChange={(item) => {
                resetSubProviderState()
                setSelectedCategory(item)
              } }
            >
              {category.map((option, index) => (
                <Picker.Item key={index} label={option} value={option} />
              ))}
            </Picker>
            <TouchableOpacity onPress={() => handleFilterChange(selectedCategory)} className={`bg-teal-500 ${width >= mediumScreenWidth ? "py-2 px-4" : "py-1 px-2"}  rounded`}>
              <Text className={`${width >= mediumScreenWidth ? "text-xl" : "text-base"} text-white font-bold`}>Apply Filter</Text>
            </TouchableOpacity>
          </View>

          {/* <Animated.View className=" mb-10 items-center w-full" entering={FadeInDown.delay(200).duration(1000).springify()}> */}
            <Link href="../" asChild>
              <TouchableOpacity onPress={()=>{}} className={` bg-red-600 ${width >= mediumScreenWidth ? "p-3" : "p-1"} rounded-3xl mb-3 w-full items-center `}>
                <Text className={`${width > mediumScreenWidth ? "text-xl" : "text-base"} font-bold text-white text-center `}>Back</Text>
              </TouchableOpacity>
            </Link>
          {/* </Animated.View> */}
    </View>
  )
}

export default SearchModal