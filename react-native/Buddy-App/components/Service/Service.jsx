
import { Text, Box, Button, Slider, VStack, Checkbox, Stack } from "native-base";
import { CheckBox } from "@react-native-community/checkbox";
import { useEffect, useState } from "react";
import MeteredScreen from "./ServiceScreens/MeteredScreen";


const Service = ( { toggleBook }) => {

    const [experienceService, setExperienceService] = useState(false)
    const [meteredService, setMeteredService] = useState(false)
    const [next, setNext] = useState(false)

      
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
                <Checkbox onChange={() => handleServiceValues("experience")}  value="experience" my={2} > Experience </Checkbox>
                <Checkbox onChange={() => handleServiceValues("metered")}  value="metered" my={2} > Metered </Checkbox>
            </VStack>
    }

    const ServiceScreens = () => {
        if (experienceService && next){(prev) =>
            setNext(!prev)
            return experienceScreen()
        } else if (meteredService && next){ (prev) =>
            setNext(!prev)
            return <MeteredScreen />
        } else {
            return startScreen()
        }
    }

    return <Stack w={'100%'} h={450}  >  
        <Text fontSize={22}> Type of Service </Text>
        <ServiceScreens />
        <Button backgroundColor={'red.600'} onPress={null}> Add to Cart </Button>
        <Button backgroundColor={'red.600'} onPress={setNext}> Next </Button>
        <Button backgroundColor={'red.600'} onPress={null}> Back </Button>
        <Button backgroundColor={'red.600'} onPress={toggleBook}> Return to Details </Button>
    </Stack>
    
}

export default Service