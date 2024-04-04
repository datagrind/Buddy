import Card from '../Profile/Card';
import { ScrollView, VStack, Box, Heading, View } from "native-base";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation, useFocusEffect  } from '@react-navigation/native';
import BackButton from '../UI/BackButton/BackButton';


const ProfileDetails = ({ route }) => {

  const { img } = route.params
  const [index, setIndex] = useState(0)



  if (!img) {
    console.log("ProfileDetails: Received undefined or empty img prop");
  }

  const navigation = useNavigation()
  const scrollViewRef = useRef(null);
  const swiperRef = useRef(0)
  console.log("swiperRef: ", swiperRef)

  const resetSwiper = () => {
    swiperRef.current =  0
  };

  
  const resetView = () => scrollViewRef?.current.scrollTo({ x: 0, y: 0, animated: false });
  

  
  useEffect(()=>{
      resetView()
      // swiperRef.current = null
      navigation.setOptions({
        headerShown: false, // Example of setting options dynamically
    }, []);
    return (resetView)
  })

    // Execute this effect whenever the screen comes into focus
    useFocusEffect(
      React.useCallback(() => {
        resetSwiper(); // Reset swiper when screen comes into focus
      }, [])
    );

  return (
    <Box w={'100%'} h={'100%'} borderWidth={0} mt={125} px={3} display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <BackButton topPos={-100} padL={-170} handlePress={resetSwiper}/>
      <View position={'absolute'} top={-45} zIndex={3}>
        <Heading  textAlign={'center'}>Profile</Heading>
      </View>
      <Box marginTop={-20} w={'100%'} h={'100%'} flex={1} overflow={'hidden'} borderRadius={30}>
        <ScrollView ref={scrollViewRef}  w={"100%"} h="100%" showsVerticalScrollIndicator={false} >
          <VStack w={"100%"} h="100%" >
            <Card img={img} setIndex={setIndex} swiperRef={swiperRef}/>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default ProfileDetails;
