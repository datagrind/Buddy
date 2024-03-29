import React from "react";
import { Box, Heading, AspectRatio, Image, Text, Center } from "native-base";
import { TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const ImageCard = ({ img, status, handleSetPath }) => {

  var debugText = "ImageCard: Received undefined or empty img prop"
  if (!img) {
    console.log(debugText);
    return <Text> {debugText} </Text>;
  }

  const navigation = useNavigation()

  const imageSource = { uri: img.picture.large };

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('ProfileDetails', {img: img})}
      //   style={{
      //   shadowColor: '#000',
      //   shadowOffset: {
      //     width: 0,
      //     height: 2,
      //   },
      //   shadowOpacity: 0.25,
      //   shadowRadius: 8.84,
      //   elevation: 5, // for Android
      // }}
    >
      <Box
        width="100%"
        borderWidth="1"
        borderColor="transparent"
        p={0}
        borderRadius={15}
        overflow="hidden"
        marginTop={3}
      >
        <Box
          maxW="full"
          borderTopRadius={15}
          overflow="hidden"
          borderColor="red.600"
          borderWidth="5"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <AspectRatio ratio={1}>
            <Image source={imageSource} alt="image" borderTopRadius={10} />
          </AspectRatio>
          <Center
            bg="red.600"
            _dark={{
              bg: "red.600",
            }}
            _text={{
              color: "warmGray.50",
              fontWeight: "700",
              fontSize: "xs",
            }}
            position="absolute"
            bottom="0"
            px="3"
            py="1.5"
          >
            {status}
          </Center>
        </Box>
        <Box p="4" space={3} bg={'white'} borderBottomRadius={15}>
          <Heading size="md" ml="-1">
            {`${img.name.first} ${img.name.last}`}
          </Heading>
          <Text color="coolGray.600" fontWeight="400">
            6 mins ago
          </Text>
        </Box>
      </Box>
    </TouchableWithoutFeedback>
  );
};

export default ImageCard;
