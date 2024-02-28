import Card from '../Profile/Card';
import { ScrollView, VStack, Box, Pressable, Center } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import React from "react";

const ProfileDetails = ({ user, handleScreenHub, profileProp }) => {

  return (
    <Box w={'100%'} h={'100%'} p={5} flex={1}>
      <Pressable onPress={handleScreenHub} top={25} left={-20} m={10}position={'absolute'} zIndex={1} w={50} h={50} borderRadius={25} borderWidth={2} bg={'red.600'} alignItems={'center'} justifyContent={'center'}>
        <Ionicons name="chevron-back" size={35} color="white" />
      </Pressable>
      <ScrollView position={'absolut'} top={100} w={"100%"} h="100%" showsVerticalScrollIndicator={false}>
        <VStack space={2} style={{ marginTop: 15 }}>
          <Card img={profileProp} />
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default ProfileDetails;
