import Card from '../Profile/Card';
import { ScrollView, VStack, Box, Heading, View } from "native-base";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation  } from '@react-navigation/native';
import BackButton from '../UI/BackButton/BackButton';


const ProfileDetails = ({ route }) => {

  const { img } = route.params
  const [indexKey, setIndexKey] = useState(true)



  if (!img) {
    console.log("ProfileDetails: Received undefined or empty img prop");
  }

  const navigation = useNavigation()
  const scrollViewRef = useRef(null);


  const resetSwiper = () => {
    setIndexKey(!indexKey)
  };

  
  const resetView = () => scrollViewRef?.current.scrollTo({ x: 0, y: 0, animated: false });
  

  
  useEffect(()=>{
      resetView()
      navigation.setOptions({
        headerShown: false, // Example of setting options dynamically
    }, []);
    return resetView
  })


  return (
    <Box w={'100%'} h={'100%'} borderWidth={0} mt={120} px={3} display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <BackButton topPos={-100} padL={-170} handlePress={resetSwiper}/>
      <View top={-175} zIndex={3} borderWidth={0}>
        <Heading  textAlign={'center'}>Profile</Heading>
      </View>
      <Box marginTop={-150} w={'100%'} h={'100%'} flex={1} overflow={'hidden'} borderRadius={30}>
        <ScrollView ref={scrollViewRef}  w={"100%"} h="100%" showsVerticalScrollIndicator={false} >
          <VStack w={"100%"} h="100%" >
            <Card img={img} indexKey={indexKey}/>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default ProfileDetails;
