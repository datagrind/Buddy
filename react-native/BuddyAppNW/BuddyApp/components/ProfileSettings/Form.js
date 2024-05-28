import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Platform } from 'react-native';
import { useRouter } from 'expo-router';
// import Animated, { FadeInDown } from 'react-native-reanimated';

const Form = ( { handleBack }) => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        age: '',
        about_me: '',
        nickname: '',
        interests: '',
        city: '',
        state: '',
        user_star_rating: '',
    });

    const [charCount, setCharCount] = useState(0);
    const maxCharLimit = 1500;
    const ios = Platform.OS === "ios"

    const router = useRouter();

    const handleChange = (key, value) => {
        if (key && value) {
            setFormData({ ...formData, [key]: value });
            setCharCount(value.length); // Move this line inside the if block
        } else {
            setCharCount(0); // Reset char count if value is undefined or null
        }
    };
    

    const handleSubmit = () => {
        // Handle form submission here
        console.log(formData);
    };

    return (
        <View className={`w-full max-w-sm ${ ios ? "py-16" : "py-32"}`}>
            <View className="md:w-1/3">
                <Text className="block text-center text-gray-500 text-4xl font-bold md:text-right mb-10 md:mb-10">
                    Edit Profile
                </Text>
            </View>
            {/* <Animated.View
                className="mb-4"
                entering={FadeInDown.delay(100).duration(1000).springify()}
            > */}
                <View className="md:flex md:items-center mb-6">
                    <View className="md:w-1/3">
                    <Text className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        First Name
                    </Text>
                    </View>
                    <View className="md:w-2/3">
                    <TextInput 
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" 
                        placeholder="Firstname"
                        value={formData.firstname}
                        onChangeText={(text) => handleChange('firstname', text)}
                    />
                    </View>
                </View>
            {/* </Animated.View>
            <Animated.View
                className="mb-4"
                entering={FadeInDown.delay(200).duration(1000).springify()} */}
            >
                <View className="md:flex md:items-center mb-6">
                    <View className="md:w-1/3">
                    <Text className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                        Last Name
                    </Text>
                    </View>
                    <View className="md:w-2/3">
                    <TextInput 
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" 
                        placeholder="Last Name"
                        value={formData.lastname}
                        onChangeText={(text) => handleChange('lastname', text)}
                    />
                    </View>
                </View>
            {/* </Animated.View>
            <Animated.View
                className="mb-4"
                entering={FadeInDown.delay(300).duration(1000).springify()}
            > */}
                <View className="md:flex md:items-center mb-6">
                    <View className="md:w-1/3">
                    <Text className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                        Nickname
                    </Text>
                    </View>
                    <View className="md:w-2/3">
                    <TextInput 
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" 
                        placeholder="Nickame"
                        value={formData.nickname}
                        onChangeText={(text) => handleChange('nickname', text)}
                    />
                    </View>
                </View>
            {/* </Animated.View>
            <Animated.View
                className="mb-4"
                entering={FadeInDown.delay(400).duration(1000).springify()}
            > */}
                <View className="md:flex md:items-center mb-6">
                    <View className="md:w-1/3">
                    <Text className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                        Age
                    </Text>
                    </View>
                    <View className="md:w-2/3">
                    <TextInput 
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" 
                        placeholder="Age"
                        value={formData.age}
                        onChangeText={(text) => handleChange('age', text)}
                    />
                    </View>
                </View>
            {/* </Animated.View>
            <Animated.View
                className="mb-4"
                entering={FadeInDown.delay(500).duration(1000).springify()}
            > */}
                <View className="md:flex md:items-center mb-6">
                    <View className="md:w-1/3">
                    <Text className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                        City
                    </Text>
                    </View>
                    <View className="md:w-2/3">
                    <TextInput 
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" 
                        placeholder="City"
                        value={formData.city}
                        onChangeText={(text) => handleChange('city', text)}
                    />
                    </View>
                </View>
            {/* </Animated.View>
            <Animated.View
                className="mb-4"
                entering={FadeInDown.delay(600).duration(1000).springify()} */}
            {/* > */}
                <View className="md:flex md:items-center mb-6">
                    <View className="md:w-1/3">
                    <Text className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                        State
                    </Text>
                    </View>
                    <View className="md:w-2/3">
                    <TextInput 
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" 
                        placeholder="State"
                        value={formData.state}
                        onChangeText={(text) => handleChange('state', text)}
                    />
                    </View>
                </View>
            {/* </Animated.View>
            <Animated.View
                className="mb-4"
                entering={FadeInDown.delay(700).duration(1000).springify()}
            > */}
                <View className="md:flex md:items-center mb-6">
                    <View className="md:w-1/3">
                    <Text className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                        Full Name
                    </Text>
                    </View>
                    <View className="md:w-2/3">
                    <TextInput 
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" 
                        placeholder="First Name"
                        value={formData.firstname}
                        onChangeText={(text) => handleChange('firstname', text)}
                    />
                    </View>
                </View>
            {/* </Animated.View>
            <Animated.View
                className="mb-4"
                entering={FadeInDown.delay(800).duration(1000).springify()}
                > */}
                <View className="md:flex md:items-center mb-6">
                    <View className="md:w-1/3">
                    <Text className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        About Me
                    </Text>
                    </View>
                    <View className="md:w-2/3 ">
                    <TextInput
                        style={{
                        height: 150,
                        textAlignVertical: 'top',
                        backgroundColor: '#E5E7EB',
                        borderRadius: 8,
                        paddingVertical: 12,
                        paddingHorizontal: 16,
                        color: '#4B5563',
                        }}
                        type="text"
                        placeholder="About Me"
                        value={formData.about_me}
                        onChangeText={(text) => handleChange('about_me', text)}
                        multiline={true}
                        maxLength={maxCharLimit} // Limit the number of characters
                    />
                    <Text className="text-gray-400 mt-1">
                        {maxCharLimit - charCount} characters remaining
                    </Text>
                    </View>
                </View>
            {/* </Animated.View> */}

            {/* <View className="md:flex md:items-center mb-6">
                <View className="md:w-1/3"></View>
                <Text className="md:w-2/3 block text-gray-500 font-bold">
                <TextInput className="mr-2 leading-tight" type="checkbox"/>
                <Text className="text-sm">
                    Send me your newsletter!
                </Text>
                </Text>
            </View> */}
            {/* <Animated.View
                className="mb-4"
            entering={FadeInDown.delay(900).duration(1000).springify()}
            > */}
                <TouchableOpacity onPress={()=>{}} className="shadow bg-red-600 hover:bg-red-400 focus:shadow-outline focus:outline-none py-2 px-4 rounded">
                    <View className="md:flex md:items-center">
                        <View className="md:w-1/3"></View>
                        <View className="md:w-2/3">
                        <Text className=" text-white font-bold text-center" >
                            Confirm Change
                        </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            {/* </Animated.View>
            <Animated.View
                className="mb-4"
            entering={FadeInDown.delay(900).duration(1000).springify()} */}
            {/* > */}
                <TouchableOpacity onPress={handleBack} className="shadow bg-red-600 hover:bg-red-400 focus:shadow-outline focus:outline-none py-2 px-4 rounded">
                    <View className="md:flex md:items-center">
                        <View className="md:w-1/3"></View>
                        <View className="md:w-2/3">
                        <Text className=" text-white font-bold text-center" >
                            Back
                        </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            {/* </Animated.View> */}
        </View>
    );
};

export default Form;
