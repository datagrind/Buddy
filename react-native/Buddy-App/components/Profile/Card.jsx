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

} from "native-base";
import { Ionicons } from "@expo/vector-icons";


const Card = ({img}) => {

    if (!img) {
        console.log("Card: Received undefined or empty img prop");
        return null
    }
    const imageSource = {uri: img.picture.large }  
    // : { uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg" };

  return <Box alignItems="center">
        <Box maxW="full" borderRadius={15} overflow="hidden"  _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700"
        }} _web={{
        shadow: 2,
        borderWidth: 0
        }} _light={{
        backgroundColor: "gray.50"
        }}>
            <Box>
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
            <Stack p="4" space={3}>
                <HStack>
                    <Stack space={2}>
                        <Heading size="md" ml="-1">
                            {`${img.name.first} ${img.name.last}`}
                        </Heading>
                        <Text fontSize="xs" _light={{
                        color: "violet.500"
                        }} _dark={{
                            color: "violet.400"
                        }} fontWeight="500" ml="-0.5" mt="-1">
                            Location
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Ionicons key={index} name="star" size={24} color="red" />
                            ))}
                        </View>
                    </Stack>
                    <Box w="full" alignItems="flex-end" borderWidth={2}>
                        <Menu w="190" trigger={triggerProps => {
                        return <Pressable accessibilityLabel="More options menu" {...triggerProps} 
                        borderWidth={2} h={30} w={30} borderRadius={15} background={'red.600'} alignItems={'center'} justifyContent={'center'}>
                                    <AddIcon color={'white'}/>
                                </Pressable>;
                        }}>
                            <Menu.Item>Add to Favorites</Menu.Item>
                            <Menu.Item>Nunito Sans</Menu.Item>
                            <Menu.Item>Roboto</Menu.Item>
                            <Menu.Item>Poppins</Menu.Item>
                            <Menu.Item>SF Pro</Menu.Item>
                            <Menu.Item>Helvetica</Menu.Item>
                            <Menu.Item isDisabled>Sofia</Menu.Item>
                            <Menu.Item>Cookie</Menu.Item>
                        </Menu>
                    </Box>
                </HStack>
                <Text fontWeight="400" >
                👋 Hey there! I'm [Your Name], your friendly neighborhood explorer of life's adventures! 🌟 I'm passionate about [insert interests/hobbies], a firm believer in kindness, and always up for a good laugh. Join me on this journey as I share snippets of my life, connect with amazing people, and embrace the beauty of everyday moments. Let's create memories together and make this social space a positive and uplifting community. 🌈✨ #LifeIsAnAdventure #PositiveVibesOnly
                </Text>
                <HStack alignItems="center" space={4} justifyContent="space-between">
                    <HStack alignItems="center">
                    <Text color="coolGray.600" _dark={{
                    color: "warmGray.200"
                    }} fontWeight="400">
                        6 mins ago
                    </Text>
                    </HStack>
                </HStack>
            </Stack>
        </Box>
    </Box>
};

export default Card;
// export default () => {
//     return (
//         <NativeBaseProvider>
//         <Center flex={1} px="3">
//             <Card />
//         </Center>
//         </NativeBaseProvider>
//     );
// };
    