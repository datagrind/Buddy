import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { Stack,  Link, useRouter } from 'expo-router'
// import Animated, { FadeIn, FadeInDown, FadeInUp} from 'react-native-reanimated'
import { StatusBar } from 'expo-status-bar'



const AccountSettings= () => {

    const router = useRouter()

    return(
        <SafeAreaView style={{backgroundColor: 'white', padding: 20, justifyContent: 'center', flex: 1,}}>
            <StatusBar style='dark'/>
            <View className="flex items-center justify-around mb-10 h-full">
                <View className="flex w-full justify-center items-center">
                    {/* <Animated.Text  */}
                        {/* entering={FadeInUp.duration(1000).springify()}  */}
                        {/* className=" font-bold tracking-wider text-5xl mb-5"> */}
                            <Text>Account Settings</Text>
                    {/* </Animated.Text> */}
                </View>
                <View className="flex w-full items-start h-5/6">
                    {/* <Animated.Text  */}
                        {/* entering={FadeInUp.delay(200).duration(1000).springify()}  */}
                        {/* className=" tracking-wider text-xl mb-3"> */}
                            <Text>Account information below</Text>
                    {/* </Animated.Text> */} 
                    {/* <Animated.View  */}
                        {/* // entering={FadeInDown.delay(400).duration(1000).springify()}  */}
                        {/* // className="flex-row justify-center mb-3"> */}
                            <Text>Account Deleteion </Text>
                            <TouchableOpacity onPress={() => router.push('/settings/account/delete')} >
                                <Text className="text-red-600">Click Here</Text>
                            </TouchableOpacity>
                    {/* // </Animated.View> */}
                    {/* <Animated.View  */}
                        {/* // entering={FadeInDown.delay(600).duration(1000).springify()}  */}
                        {/* // className="flex-row justify-center"> */}
                        <TouchableOpacity onPress={()=> router.back(0)} >
                            <Text className="text-red-600">Go Back</Text>
                        </TouchableOpacity>
                    {/* // </Animated.View> */}
                </View>
            </View>
        </SafeAreaView>
    )
}

export default AccountSettings