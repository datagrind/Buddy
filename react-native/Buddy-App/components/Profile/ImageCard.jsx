import React from "react";
import { Box, Heading, AspectRatio, Image, Text, Center } from "native-base";
import { TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const ImageCard = ({ img, status, path }) => {

  const navigation = useNavigation()

  const imageSource = { uri: img?.picture.large };

  const handleNavigate = () => {
    navigation.navigate('ProfileDetails', {img: img ?? img})
  }

  return (
    img ?
    <TouchableWithoutFeedback onPress={() => handleNavigate() } >
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
          { path !== 'favorites' &&
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
            borderTopRightRadius={15}
          >
            {status}
          </Center>
          }
        </Box>
        <Box p="4" space={3} bg={'white'} borderBottomRadius={15} height={100}>
          <Heading size="md" ml="-1">
            {`${img?.name.first} ${img?.name.last[0]}.`}
          </Heading>
          <Text color="coolGray.600" fontWeight="400">
            {img?.location.city}, {img?.location.state}
          </Text>
        </Box>
      </Box>
    </TouchableWithoutFeedback> :
    null
  );
};

export default ImageCard;
