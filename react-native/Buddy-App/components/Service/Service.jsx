
import { Text, Box, Button, Slider, VStack, Checkbox } from "native-base";
import { CheckBox } from "@react-native-community/checkbox";
import { useEffect, useState } from "react";
import MeteredScreen from "./ServiceScreens/MeteredScreen";


const Service = ( { toggleBook }) => {

    const [experienceService, setExperienceService] = useState(false)
    const [meteredService, setMeteredService] = useState(false)

      
    const handleServiceValues = (val) => {
        if (val === "experience") {
            setExperienceService((prev) => !prev);
            setMeteredService(false); // Ensure the other checkbox is unchecked
        } else if (val === "metered") {
        setMeteredService((prev) => !prev);
        setExperienceService(false); // Ensure the other checkbox is unchecked
        }
    };


    const experienceScreen = () => {
        return <Text> experience </Text>
    }

    const startScreen = () => {
        return <VStack space={2}>
                <Checkbox onChange={() => handleServiceValues("experience")} isChecked={experienceService} value="experience" my={2} > Experience </Checkbox>
                <Checkbox onChange={() => handleServiceValues("metered")} isChecked={meteredService}  value="metered" my={2} > Metered </Checkbox>
            </VStack>
    }

    const [screen, setScreen] = useState(startScreen)

    const handleServiceScreens = () => {
        if (experienceService){
            setScreen(experienceScreen)
        } else if (meteredService){
            setScreen(MeteredScreen)
        } else {
            setScreen(startScreen)
        }
    }

    return <Box w={'100%'} h={450}>  
        <Text fontSize={22}> Type of Service </Text>
        {screen}
        <Button backgroundColor={'red.600'} onPress={null}> Add to Cart </Button>
        <Button backgroundColor={'red.600'} onPress={handleServiceScreens}> Next </Button>
        <Button backgroundColor={'red.600'} onPress={null}> Back </Button>
        <Button backgroundColor={'red.600'} onPress={toggleBook}> Return to Details </Button>
    </Box>
    
}

export default Service