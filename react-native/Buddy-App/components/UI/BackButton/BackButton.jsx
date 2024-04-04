import { Pressable, View } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";


const BackButton = ( {topPos, padL, handlePress} ) => {

    const navigation = useNavigation()

    const handleBackButtonPress = () => {
        handlePress && handlePress() 
        navigation.goBack();
    };

    useEffect(()=>{
        navigation.setOptions({
          headerShown: false, // Example of setting options dynamically
      });
    }, [])


    return (
        <View display={'flex-1'}>
            <Pressable onPress={handleBackButtonPress} top={topPos} left={padL} m={10} w={50} h={50} borderRadius={25} bg={'red.600'} alignItems={'center'} justifyContent={'center'}>
                <Ionicons name="chevron-back" size={35} color="white" />
            </Pressable>
        </View>
    )
}

export default BackButton