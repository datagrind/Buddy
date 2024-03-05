import Card from '../Profile/Card';
import { ScrollView, VStack, Box, Pressable, Center } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import React from "react";

const ProfileDetails = ({ user, handleScreenHub, profileProp }) => {

  return (
    <Box w={'100%'} h={'100%'} px={3} flex={1} alignItems={'center'} justifyContent={'center'}>
      <Pressable onPress={handleScreenHub} top={0} left={-20} m={10}position={'absolute'} zIndex={1} w={50} h={50} borderRadius={25} bg={'red.600'} alignItems={'center'} justifyContent={'center'}>
        <Ionicons name="chevron-back" size={35} color="white" />
      </Pressable>
      <Box marginTop={100} w={'100%'} h={'100%'} flex={1} overflow={'hidden'} borderRadius={30}>
        <ScrollView  w={"100%"} h="100%" showsVerticalScrollIndicator={false} >
          <VStack w={"100%"} h="100%" >
            <Card img={profileProp} />
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default ProfileDetails;
