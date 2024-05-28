import { View, Text } from 'react-native'
import React from 'react'
// import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated'
import { Stack } from 'expo-router'

const TermsConditions = () => {
    return(
        <View className="bg-white h-full w-full flex justify-center p-5 ">
            <Stack.Screen options={{name: "delete", headerTitle: '', title: ''}} > </Stack.Screen>
            <View className="flex-1 items-center justify-around mb-10">
                <View>
                    {/* <Animated.Text  */}
                        {/* entering={FadeInUp.duration(1000).springify()}  */}
                        {/* className=" font-bold tracking-wider text-5xl mb-5"> */}
                            <Text>Terms and Conditions</Text>
                    {/* </Animated.Text> */}
                </View>
                <View className="flex  w-full items-start h-5/6">
                    {/* <Animated.Text  */}
                        {/* entering={FadeInUp.duration(1000).springify()}  */}
                        {/* className=" tracking-wider text-xl mb-3"> */}
                            <Text>Information Below</Text>
                    {/* </Animated.Text> */}
                </View>
            </View>
        </View>
    )
}

export default TermsConditions