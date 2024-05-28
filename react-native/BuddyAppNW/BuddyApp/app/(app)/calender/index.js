import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
// import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated'
import DateTimePicker from '@react-native-community/datetimepicker';

const Calender = () => {
  return (
    <View className="flex-1 justify-around items-center">
         {/* <Animated.View  */}
            {/* entering={FadeInDown.delay(200).duration(1000).springify()}  */}
            {/* className="flex-col justify-center"> */}
            <View className="flex-row justify-center mb-8">
                <Text className="text-5xl font-bold">Calender </Text>
                {/* <TouchableOpacity >
                    <Text className="text-red-600">Click Here</Text>
                </TouchableOpacity> */}
            </View> 
        {/* </Animated.View> */}
        {/* <Animated.View  */}
            entering={FadeInDown.delay(400).duration(1000).springify()} 
            className="flex-col justify-center">   
            {/* <DateTimePicker /> */}


        {/* </Animated.View>          */}
        {/* <Animated.View  */}
            {/* entering={FadeInDown.delay(600).duration(1000).springify()}  */}
            {/* className="flex-col justify-center">             */}
            <View className="flex-col justify-center mb-8">
                    <Text className="text-2xl mb-5 ">Availability Info:</Text>
                    <View className="flex-col justify-center">
                        <View className="flex-row mb-1">

                            <Text className="text-black/80 text-left  text-sm font-extrabold mr-5">
                            • 
                            </Text> 
                            <Text className="text-black/80 text-left font-medium text-sm">
                            Monday: 5pm - 10pm
                            </Text> 
                        </View>

                        <View className="flex-row mb-1">

                            <Text className="text-black/80 text-left  text-sm font-extrabold mr-5">
                            • 
                            </Text> 
                            <Text className="text-black/80 text-left font-medium text-sm">
                            Tuesday: 5pm - 10pm
                            </Text> 
                        </View>
                        <View className="flex-row mb-1">

                            <Text className="text-black/80 text-left  text-sm font-extrabold mr-5">
                            • 
                            </Text> 
                            <Text className="text-black/80 text-left font-medium text-sm">
                            Wednesday: 5pm - 10pm
                            </Text> 
                        </View>
                        <View className="flex-row mb-1">

                            <Text className="text-black/80 text-left  text-sm font-extrabold mr-5">
                            • 
                            </Text> 
                            <Text className="text-black/80 text-left font-medium text-sm">
                            Thursday: 5pm - 10pm
                            </Text> 
                        </View>
                        <View className="flex-row mb-1">

                            <Text className="text-black/80 text-left  text-sm font-extrabold mr-5">
                            • 
                            </Text> 
                            <Text className="text-black/80 text-left font-medium text-sm">
                            Friday: 5pm -
                            Saturday: 3am
                            </Text> 
                        </View>
                        <View className="flex-row mb-1">

                            <Text className="text-black/80 text-left  text-sm font-extrabold mr-5">
                            • 
                            </Text> 
                            <Text className="text-black/80 text-left font-medium text-sm">
                            Saturday: 8am -
                            Sunday: 3am
                            </Text> 
                        </View>
                        <View className="flex-row mb-1">

                            <Text className="text-black/80 text-left  text-sm font-extrabold mr-5">
                            • 
                            </Text> 
                            <Text className="text-black/80 text-left font-medium text-sm">
                            Sunday: 8am - 10pm
                            </Text> 
                        </View>
                    </View>
                    {/* <TouchableOpacity >
                        <Text className="text-red-600">Click Me</Text>
                    </TouchableOpacity> */}
                </View>
            {/* </Animated.View>             */}
        {/* <Animated.View  */}
            {/* className="w-full mb-5 px-10"  */}
            {/* entering={FadeInDown.delay(800).duration(1000).springify()}> */}
                <TouchableOpacity 
                    onPress={()=>{}}
                    className={` bg-red-600 p-3 rounded-2xl mb-6`}>
                        <Text className="text-xl font-bold text-white text-center">Book Now</Text>
                </TouchableOpacity>
        {/* </Animated.View>  */}
    </View>
  )
}

export default Calender