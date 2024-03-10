import Card from '../Profile/Card';
import { ScrollView, VStack, Box, Pressable, Center, Text } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useRef } from "react";
import { useNavigation } from '@react-navigation/native';

const ProfileDetails = ({ route }) => {

  const { img } = route.params


  if (!img) {
    console.log("ProfileDetails: Received undefined or empty img prop");
  }

  // console.log("profileDetails.route.params: ", route.params)
  const navigation = useNavigation()
  const scrollViewRef = useRef(null);

  
  const handleResetScroll = () => {
    // Assuming you have a reference to your ScrollView named scrollViewRef
    scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
  };

  
  const handleBackButtonPress = () => {
    navigation.navigate('Dashboard');
    // handleResetScroll();
  };



  useEffect(()=>{
    scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
    return scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
  })

  return (
    <Box w={'100%'} h={'100%'} px={3} flex={1} alignItems={'center'} justifyContent={'center'}>
      <Pressable onPress={handleBackButtonPress} top={0} left={-25} m={10} position={'absolute'} zIndex={1} w={50} h={50} borderRadius={25} bg={'red.600'} alignItems={'center'} justifyContent={'center'}>
        <Ionicons name="chevron-back" size={35} color="white" />
      </Pressable>
      <Box marginTop={100} w={'100%'} h={'100%'} flex={1} overflow={'hidden'} borderRadius={30}>
        <ScrollView ref={scrollViewRef}  w={"100%"} h="100%" showsVerticalScrollIndicator={false} >
          <VStack w={"100%"} h="100%" >
            <Card img={img} />
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default ProfileDetails;
