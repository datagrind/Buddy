import React, { useState, useEffect, memo, useCallback } from "react";
import { View, Text, Dimensions, TouchableOpacity,  Platform } from "react-native";
import { Image } from 'expo-image';
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-new-snap-carousel";
import DatesCard from "../../../../components/DatesCard";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { Link, useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { Ionicons } from '@expo/vector-icons';

const android = Platform.OS === "android";
const { width } = Dimensions.get("window");

const Search = memo(() => {
  const data = useSelector(state => state.providerData.data);
  const router = useRouter();
  const [first, setFirst] = useState(false);

  const toggleTest = () => {
    setFirst(!first);
  }; 

  const memoizedCarouselCallback = useCallback((items) => (
    <DatesCard items={items} />
  ), []);

  const CarouselComponent = memo(({ data }) => (
    <Carousel
      data={data}
      renderItem={memoizedCarouselCallback}
      keyExtractor={(item, index) => item.toString() + index.toString()}
      firstItem={1}
      sliderWidth={width}
      itemWidth={width * 0.8}
      slideStyle={{ display: "flex", alignItems: "center" }}
      loop={true}
    />
  ), [data]);

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
      <View style={{ display: 'flex', padding: 10, width: "100%", height: "100%"}}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, marginBottom: 8 }}>
        <Link href="/(app)/profilesettings" asChild>  
            <TouchableOpacity>
              <Image
                source={{ uri: 'https://www.goodfreephotos.com/albums/people/beautiful-women-in-white-dress.jpg' }}
                style={{
                  width: hp(5),
                  height: hp(5),
                  contentFit: "cover",
                  borderRadius: hp(5) / 2,
                }}
              />
            </TouchableOpacity>
          </Link>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
            <TouchableOpacity onPress={toggleTest} style={{ backgroundColor: 'rgba(0,0,0,0.1)', padding: 10, borderRadius: 20, marginRight: 10 }}>
              <Ionicons name="notifications-outline" size={24} color="black" />
            </TouchableOpacity>
            <Link href='/searchmodal' asChild>
            <TouchableOpacity onPress={toggleTest} style={{ backgroundColor: 'rgba(0,0,0,0.1)', padding: 10, borderRadius: 20, marginRight: 10 }}>
                <Ionicons name="filter" size={24} color="black" />
              </TouchableOpacity>
            </Link>
          </View>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
          {data.length === 0 ?
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>No Buddy exists in this criteria.</Text>
              <Text>Please adjust your filter.</Text>
            </View>
            :
            <CarouselComponent data={data} />
          }
        </View>
      </View>
    </SafeAreaView>
  );
}, (prevProps, nextProps) => {
  return prevProps.data === nextProps.data;
});

export default Search;
