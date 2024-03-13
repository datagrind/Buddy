import React from "react";
import { 
    Box, 
    Heading, 
    AspectRatio, 
    Image, 
    Text, 
    Center, 
    HStack, 
    Stack, 
    View,
    Menu,
    Pressable,
    AddIcon,
    VStack,

} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { logVariables } from "../../logVariables";
import Service from "../Service/Service";
import { useState } from "react";
import { Linking } from "react-native";



const Card = ({ img }) => { 

    const [bookMe, setBookMe] = useState(false)

    if (!img) {
        console.log("Card: Received undefined or empty img prop");
        return (
            <Box>
              <Text>No image available</Text>
            </Box>
          );
    }
    const imageSource = {uri: img.picture.large }  


    const toggleBookMe = async () => {
        !bookMe ? setBookMe(true) : setBookMe(false)
        const url = 'https://book.stripe.com/test_28oeXd8PDefcgbmcMM';

        // Check if the device can open the given URL
        const supported = await Linking.canOpenURL(url);

        if (supported) {
        // Open the URL
        await Linking.openURL(url);
        } else {
        console.error("Don't know how to open URI: " + url);
        }
    }

  return <Box alignItems="center" h={'100%'} w={'100%'}  overflow={'hidden'}>
        <Box  maxW="full"    _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700"
        }} _web={{
        shadow: 2,
        }} _light={{
        backgroundColor: "gray.50",
        borderColor: "coolGray.600",
        }} w={'100%'}>
            <Box w={'100%'}  >
            <AspectRatio w="100%" ratio={1}>
                <Image 
                source={imageSource} 
                alt="image" />
            </AspectRatio>
            <Center bg="red.600" _dark={{
            bg: "violet.400"
            }} _text={{
            color: "warmGray.50",
            fontWeight: "700",
            fontSize: "xs"
            }} position="absolute" bottom="0" px="3" py="1.5">
                AVAILABLE
            </Center>
            </Box>
            <Stack  p="4" w={'100%'} space={3}  borderColor={'pink.500'}>
                <HStack  w={'100%'} >
                    <Stack  space={2} flex={1} w={'50%'}>
                        <Heading size="md" ml="-1">
                            {`${img.name.first} ${img.name.last}`}
                        </Heading>
                        <Text fontSize="xs" _light={{
                        color: "black"
                        }} _dark={{
                            color: "black"
                        }} fontWeight="500" ml="-0.5" mt="-1">
                            Age: XX
                        </Text>
                        <Text fontSize="xs" _light={{
                        color: "black"
                        }} _dark={{
                            color: "black"
                        }} fontWeight="500" ml="-0.5" mt="-1">
                            Sex Orientation: Straight
                        </Text>
                        <Text fontSize="xs" _light={{
                        color: "black"
                        }} _dark={{
                            color: "black"
                        }} fontWeight="500" ml="-0.5" mt="-1">
                            Location
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Ionicons key={index} name="star" size={24} color="red" />
                            ))}
                        </View>
                    </Stack>
                    <HStack   w={'50%'} h={30} alignItems="center" justifyContent={'flex-end'}  >
                        <Menu
                            placement="top right"
                            trigger={(triggerProps) => {
                            return (
                                <Pressable
                                accessibilityLabel="More options menu"
                                {...triggerProps}
                                borderColor={'gray.700'}
                                h={30}
                                w={30}
                                borderRadius={15}
                                background={'red.600'}
                                alignItems={'center'}
                                justifyContent={'center'}
                                >
                                <AddIcon color={'white'} />
                                </Pressable>
                            );
                            }}
                        >
                            <Menu.Item>Add to Favorites</Menu.Item>
                        </Menu>
                    </HStack>

                </HStack>
                <VStack h={'40%'} w={'100%'} borderWidth={0}>
                    { !bookMe ? 
                        <>
                            <Text  fontWeight="400" >
                            👋 Hey there! I'm [Your Name], your friendly neighborhood explorer of life's adventures! 🌟 I'm passionate about [insert interests/hobbies], a firm believer in kindness, and always up for a good laugh. Join me on this journey as I share snippets of my life, connect with amazing people, and embrace the beauty of everyday moments. Let's create memories together and make this social space a positive and uplifting community. 🌈✨ #LifeIsAnAdventure #PositiveVibesOnly
                            </Text>
                            <Stack flex={1} alignItems={'flex-end'} h={100} borderWidth={0}>
                                <Text>Rate:            $40/HR</Text>
                            </Stack>
                            <Stack flex={1} alignItems={'flex-end'} h={100} >
                                <Pressable onPress={toggleBookMe} justifyContent={'center'} alignItems={'center'} borderRadius={50} w={100} h={50} bg={'red.600'}>
                                    <Text color={'white'}>Book Me</Text>
                                </Pressable>
                            </Stack> 
                        </> :
                         <Stack w={'100%'} borderWidth={0}>
                            <Service toggleBook={toggleBookMe} />
                        </Stack>
                    }
                </VStack>
            </Stack>
        </Box>
    </Box>
};

export default Card;

    