import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSession } from '../../../../ctx'
// import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';
import { useRouter, Link, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Settings() {

  const { handleAmplifySignOut, session } = useSession();
        const router = useRouter()


        return (
            <SafeAreaView style={{backgroundColor: 'white', padding: 20, justifyContent: 'center', flex: 1,}}>
                {/* <View className=" w-full  border-2 h-full"> */}
                    <View className="flex items-center justify-around mb-10 h-full">
                        <View className="flex w-full justify-center items-center">
                            {/* <Animated.Text   */}
                                {/* entering={FadeInUp.duration(1000).springify()}  */}
                                {/* className=" font-bold tracking-wider text-5xl mb-5"> */}
                                    <Text>Settings</Text>
                            {/* </Animated.Text> */}
                        </View>
                        <View className="flex w-full items-start h-4/6">
                            {/* <Animated.View  */}
                                {/* entering={FadeInDown.delay(200).duration(1000).springify()}  */}
                                {/* className="flex-row justify-center mb-5"> */}
                                <TouchableOpacity onPress={() => router.push('/settings/account')} >
                                    <Text className=" text-3xl">Account</Text>
                                {/* </TouchableOpacity> */}
                            {/* </Animated.View> */}
                            {/* <Animated.View  */}
                                {/* entering={FadeInDown.delay(400).duration(1000).springify()}  */}
                                {/* className="flex-row justify-center mb-5"> */}
                                <TouchableOpacity onPress={() => router.push('/settings/termsconditions')} >
                                    <Text className=" text-3xl">Terms And Conditions</Text>
                                </TouchableOpacity>
                            {/* </Animated.View> */}
                        </View>
                        <View className="flex w-full">
                            {/* <Animated.View className="w-full mb-10 px-10" entering={FadeInDown.delay(600).duration(1000).springify()}> */}
                                <TouchableOpacity onPress={()=>{handleAmplifySignOut()}} className=" bg-red-600 p-3 rounded-2xl mb-3">
                                    <Text className="text-xl font-bold text-white text-center">Sign Out</Text>
                                </TouchableOpacity>
                            {/* </Animated.View> */}
                        </View>
                    </View>
                {/* </View> */}
            </SafeAreaView>
            )

    // return (
    //   <View className="bg-white h-full w-full flex justify-center p-5 ">
    //       <Link href="/settings/1">Settings</Link>
    //       <Link href="/settings/2">Account Settings</Link>
    //       <Link href="/settings/3">Account Deletion</Link>
    //   </View>

    // )
}