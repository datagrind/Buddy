import React, { useState, useEffect, useReducer } from "react";
import { View, Text, Dimensions, TouchableOpacity, Image, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-new-snap-carousel";
import DatesCard from "../../../../components/DatesCard";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { datesData } from "../../../../constants";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const android = Platform.OS === "android";
const { width } = Dimensions.get("window");

const filteredReducer = (state, action) => {
  switch (action.type) {
    case 'ADDFILTEREDDATATEST':
      return { filteredDataTest: action.payload, selectedCategory: state.selectedCategory };
    case 'ADDSELECTEDCATEGORY':
      return { selectedCategory: action.payload, filteredDataTest: state.filteredDataTest };
    default:
      return state;
  }
}

export default function Search() {
  const [state, dispatch] = useReducer(filteredReducer, { filteredDataTest: ['all', 'male', 'female', 'other'], selectedCategory: 'all' });
  const [filteredData, setFilteredData] = useState(datesData);
  const [isLoad, setIsLoad] = useState(false);

  // const getUsers = async () => {
  //   const retrievedUsers = await fetchDataUsers();
  //   setData(retrievedUsers.results);
  // }

  useEffect(() => {
    // getUsers();
  }, []);

  const handleFilterChange = (category) => {
    setIsLoad(true);
    // dispatch({ type: 'ADDSELECTEDCATEGORY', payload: category });
    if (category === 'all') {
      setFilteredData(datesData);
    } else {
      setFilteredData(datesData.filter((item) => item.gender === category))
    }
  };

  return (
    <SafeAreaView
      style={{
        paddingTop: android ? hp(2) : 0,
        backgroundColor: 'white',
        paddingVertical: 10,
        flex: 1,
      }}
    >
      <StatusBar style="dark" backgroundColor="white" />
      <View className="w-full flex-row justify-between items-center px-4 mb-8">
        <View className="">
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
        </View>
        <View className="flex-row space-x-2 gap-3">
          <View className="">
            <TouchableOpacity className="bg-black/10 p-2 rounded-full items-center justify-center">
              <Text>Notification Icon</Text>
            </TouchableOpacity>
          </View>
          <View className="">
              <Link href='/searchmodal' asChild>
                <TouchableOpacity className="bg-black/10 p-2 rounded-full items-center justify-center">
                    <Text>Filter Icon</Text>
                </TouchableOpacity>
              </Link>
          </View>
        </View>
      </View>

      <View className="flex-1 justify-between items-center ">
        <View className="pb-4 w-full flex-1 ">
          <View className="flex flex-row justify-between items-center mb-4 px-4 h-14 ">
            <Text className="capitalize text-2xl font-semibold text-center">Select a filter:</Text>
            <Picker
              style={{ width: 100 }}
              selectedValue={state.selectedCategory}
              onValueChange={(itemValue, itemIndex) => dispatch( { type: 'ADDSELECTEDCATEGORY', payload: itemValue } ) }
            >
              {state.filteredDataTest.map((option, index) => (
                <Picker.Item key={index} label={option} value={option} />
              ))}
            </Picker>
            <TouchableOpacity onPress={() => handleFilterChange(state.selectedCategory)} className="bg-red-600 py-2 px-4 rounded">
              <Text className="text-white font-bold">Apply Filter</Text>
            </TouchableOpacity>
          </View>

          <View className="flex w-full justify-center items-center ">
            {filteredData.length === 0 ? 
              <View>
                <Text className="text-center">No Buddy exists in this criteria.</Text>
                <Text className="text-center">Please adjust your filter.</Text>
              </View>
            :
              <Carousel
                data={filteredData}
                renderItem={({ item }) => <DatesCard item={item} />}
                keyExtractor={(item, index) => index.toString()} 
                firstItem={1}
                sliderWidth={width}
                itemWidth={width * 0.8}
                slideStyle={{ display: "flex", alignItems: "center" }}
                loop={true}
              />
            }
          </View>

        </View>
      </View>
    </SafeAreaView>
  );
}
