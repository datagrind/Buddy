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
    NativeBaseProvider,
} from "native-base";


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
            </Stack>
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
    